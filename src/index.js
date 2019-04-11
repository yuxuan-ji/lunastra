import {Pipeline} from './core/pipeline.js';
import {DocumentStore} from './core/document_store.js';
import {InvertedIndex} from './core/inverted_index.js';
import {Configuration} from './core/configuration.js';
import {Tokenizer} from './core/tokenizer.js';
import {EventEmitter} from './events/event_emitter.js';

/**
 * A dataset maintained by Lunastra and exposing its public facing API.
 */
export class Index {

  /**
   * Initialize an index
   */
  constructor() {
    this._fields = [];
    this._id = 'id';
    this._idfCache = {};

    this.index = {};

    this.pipeline = new Pipeline();
    this.documentStore = new DocumentStore();
    this.eventEmitter = new EventEmitter();

    this.on('add', 'remove', 'update', (function () {
      this._idfCache = {};
    }).bind(this));
  }

  /**
   * Return the fields registered in the index
   * @return {String[]}
   */
  getFields() {
    return this._fields.slice();
  }

  /**
   * Register a field in the index
   * @param {String} fieldName
   */
  addField(fieldName) {
    this._fields.push(fieldName);
    this.index[fieldName] = new InvertedIndex();
    return this;
  }

  /**
   * Set the field used to uniquely identify a document (default is 'id')
   * @param {String} fieldName
   */
  setId(fieldName) {
    this._id = fieldName;
    return this;
  }

  /**
   * Bind a handler to the specified events
   * @param  {...String} events
   * @param {function} f
   */
  on(...args) {
    return this.eventEmitter.addListener.apply(this.eventEmitter, args);
  }

  /**
   * Unbind a handler from an event
   * @param  {String} event
   * @param  {function} f
   */
  off(event, fn) {
    return this.eventEmitter.removeListener(event, fn);
  }

  /**
   * Sets whether origin JSON documents are stored
   * @param  {Boolean} save default true
   * @return {this}
   */
  saveDoc(save) {
    this.documentStore = new DocumentStore(save);
    return this;
  }

  /**
   * Adds a document to the index
   * @param {Object} doc
   * @param {Boolean} emitEvent whether an event should be triggered
   */
  addDoc(doc, emitEvent = true) {
    if (!doc) return;

    var id = doc[this._id];

    this.documentStore.addDoc(id, doc);
    this._fields.forEach(function (field) {
      var fieldTokens = this.pipeline.run(Tokenizer.tokenize(doc[field]));
      this.documentStore.addFieldLength(id, field, fieldTokens.length);

      var tokenCount = {};
      fieldTokens.forEach(function (token) {
        if (token in tokenCount) tokenCount[token] += 1;
        else tokenCount[token] = 1;
      }, this);

      for (var token in tokenCount) {
        var termFrequency = tokenCount[token];
        termFrequency = Math.sqrt(termFrequency);
        this.index[field].addToken(token, { id: id, tf: termFrequency });
      }

    }, this);

    if (emitEvent) this.eventEmitter.emit('add', doc, this);
  }

  /**
   * Remove a document from the index by its unique id
   * @param  {String|Number} id
   * @param  {Boolean} emitEvent whether an event should be triggered
   */
  removeDocById(id, emitEvent = true) {
    if (!id) return;
    if (this.documentStore.isDocStored() === false) {
      return;
    }

    if (!this.documentStore.hasDoc(id)) return;
    var doc = this.documentStore.getDoc(id);
    this.removeDoc(doc, emitEvent);
  }

  /**
   * Remove a document from the index
   * @param  {Object} doc
   * @param  {Boolean} emitEvent whether an event should be triggered
   */
  removeDoc(doc, emitEvent = true) {
    if (!doc) return;

    var id = doc[this._id];
    if (!this.documentStore.hasDoc(id)) return;

    this.documentStore.removeDoc(id);

    this._fields.forEach(function (field) {
      var fieldTokens = this.pipeline.run(Tokenizer.tokenize(doc[field]));
      fieldTokens.forEach(function (token) {
        this.index[field].removeToken(token, id);
      }, this);
    }, this);

    if (emitEvent) this.eventEmitter.emit('remove', doc, this);
  }

  /**
   * Update a document in the index
   * @param  {Object} doc
   * @param  {Boolean} emitEvent whether an event should be triggered
   */
  updateDoc(doc, emitEvent = true) {

    this.removeDocById(doc[this._id], false);
    this.addDoc(doc, false);

    if (emitEvent) this.eventEmitter.emit('update', doc, this);
  }

  /**
   * Searches the index using the passed query.
   * Queries should be a String, multiple words are allowed.
   *
   * If config is null, will search all fields defaultly, and lead to OR based query.
   * If config is specified, will search specified with query time boosting.
   *
   * All query tokens are passed through the same pipeline that document tokens
   * are passed through, so any language processing involved will be run on every
   * query term.
   *
   * Each query term is expanded, so that the term 'he' might be expanded to
   * 'hello' and 'help' if those terms were already included in the index.
   *
   * Matching documents are returned as an array of objects, each Object contains
   * the matching document id, as set for this index, and the similarity score
   * for this document against the query.
   *
   * @param {String} query The query to search the index with.
   * @param {JSON} userConfig The user query config, JSON format.
   * @return {Object}
   */
  search(query, userConfig) {
    if (!query) return [];
    if (typeof query === 'string') {
      query = {any: query};
    } else {
      query = JSON.parse(JSON.stringify(query));
    }

    var configStr = null;
    if (userConfig != null) {
      configStr = JSON.stringify(userConfig);
    }

    var config = new Configuration(configStr, this.getFields()).get();

    var queryTokens = {};
    var queryFields = Object.keys(query);

    for (var i = 0; i < queryFields.length; i++) {
      var key = queryFields[i];

      queryTokens[key] = this.pipeline.run(Tokenizer.tokenize(query[key]));
    }

    var queryResults = {};

    for (var field in config) {
      var tokens = queryTokens[field] || queryTokens.any;
      if (!tokens) {
        continue;
      }

      var fieldSearchResults = this.fieldSearch(tokens, field, config);
      var fieldBoost = config[field].boost;

      for (let id in fieldSearchResults) {
        fieldSearchResults[id] = fieldSearchResults[id] * fieldBoost;
      }

      for (let id in fieldSearchResults) {
        if (id in queryResults) {
          queryResults[id] += fieldSearchResults[id];
        } else {
          queryResults[id] = fieldSearchResults[id];
        }
      }
    }

    var results = [];
    var result;
    for (var id in queryResults) {
      result = {id: id, score: queryResults[id]};
      if (this.documentStore.hasDoc(id)) {
        result.doc = this.documentStore.getDoc(id);
      }
      results.push(result);
    }

    results.sort(function (a, b) { return b.score - a.score; });
    return results;
  }

  /**
   * Search a list of tokens within a field
   * @param  {String[]} queryTokens
   * @param  {String} fieldName
   * @param  {Configuration} config
   * @return {Object}
   */
  fieldSearch(queryTokens, fieldName, config) {
    var booleanType = config[fieldName].bool;
    var expand = config[fieldName].expand;
    var boost = config[fieldName].boost;
    var scores = null;
    var docTokens = {};

    // Do nothing if the boost is 0
    if (boost === 0) {
      return undefined;
    }

    queryTokens.forEach(function (token) {
      var tokens = [token];
      if (expand) {
        tokens = this.index[fieldName].expandToken(token);
      }

      var queryTokenScores = {};
      tokens.forEach(function (key) {
        var docs = this.index[fieldName].getDocs(key);
        var idf = this.idf(key, fieldName);

        if (scores && booleanType === 'AND') {
          // special case, we can rule out documents that have been
          // already been filtered out because they weren't scored
          // by previous query token passes.
          var filteredDocs = {};
          for (let id in scores) {
            if (id in docs) {
              filteredDocs[id] = docs[id];
            }
          }
          docs = filteredDocs;
        }

        if (key === token) {
          this.fieldSearchStats(docTokens, key, docs);
        }

        for (var id in docs) {
          var tf = this.index[fieldName].getTermFrequency(key, id);
          var fieldLength = this.documentStore.getFieldLength(id, fieldName);
          var fieldLengthNorm = 1;
          if (fieldLength !== 0) {
            fieldLengthNorm = 1 / Math.sqrt(fieldLength);
          }

          var penality = 1;
          if (key !== token) {
            penality = (1 - (key.length - token.length) / key.length) * 0.15;
          }

          var score = tf * idf * fieldLengthNorm * penality;

          if (id in queryTokenScores) {
            queryTokenScores[id] += score;
          } else {
            queryTokenScores[id] = score;
          }
        }
      }, this);

      scores = this.mergeScores(scores, queryTokenScores, booleanType);
    }, this);

    scores = this.coordNorm(scores, docTokens, queryTokens.length);
    return scores;
  }

  /**
   * Merge the scores from one set of tokens into an accumulated score table.
   * Exact operation depends on the op parameter. If op is 'AND', then only the
   * intersection of the two score lists is retained. Otherwise, the union of
   * the two score lists is returned.
   * @param {Boolean} accumScores should be null on first call
   * @param {Object} scores new scores to merge into accumScores
   * @param {String} op merge operation (should be 'AND' or 'OR')
   */
  mergeScores(accumScores, scores, op) {
    if (!accumScores) {
      return scores;
    }
    if (op === 'AND') {
      var intersection = {};
      for (let id in scores) {
        if (id in accumScores) {
          intersection[id] = accumScores[id] + scores[id];
        }
      }
      return intersection;
    }

    for (var id in scores) {
      if (id in accumScores) {
        accumScores[id] += scores[id];
      } else {
        accumScores[id] = scores[id];
      }
    }
    return accumScores;
  }

  /**
   * Record query tokens of retrieved documents
   * @param  {Object} docTokens
   * @param  {String} token
   * @param  {Object} docs
   */
  fieldSearchStats(docTokens, token, docs) {
    for (var doc in docs) {
      if (doc in docTokens) {
        docTokens[doc].push(token);
      } else {
        docTokens[doc] = [token];
      }
    }
  }

  /**
   * Calculate the inverse document frequency of a term within a field
   * @param  {String} term
   * @param  {String} field
   * @return {Number}
   */
  idf(term, field) {
    var cacheKey = "@" + field + '/' + term;
    if (Object.prototype.hasOwnProperty.call(this._idfCache, cacheKey)) return this._idfCache[cacheKey];

    var df = this.index[field].getDocFreq(term);
    var idf = 1 + Math.log(this.documentStore.length / (df + 1));
    this._idfCache[cacheKey] = idf;

    return idf;
  }

  /**
   * Get the normalized coordination factor
   * @param  {Object} scores
   * @param  {Object} docTokens
   * @param  {Number} n
   * @return {Object}
   */
  coordNorm(scores, docTokens, n) {
    for (var doc in scores) {
      if (!(doc in docTokens)) continue;
      var tokens = docTokens[doc].length;
      scores[doc] = scores[doc] * tokens / n;
    }

    return scores;
  }

}
