import {Pipeline} from './pipeline.js';
import {DocumentStore} from './document_store.js';
import {EventEmitter} from './event_emitter.js';
import {InvertedIndex} from './inverted_index.js';
import {Configuration} from './configuration.js';
import {Tokenizer} from './tokenizer.js';

export class Index {

  constructor() {
    this._fields = [];
    this._ref = 'id';
    this._idfCache = {};

    this.index = {};

    this.pipeline = new Pipeline();
    this.documentStore = new DocumentStore();
    this.eventEmitter = new EventEmitter();

    this.on('add', 'remove', 'update', (function () {
      this._idfCache = {};
    }).bind(this));
  }

  get fields() {
    return this.__fields.slice();
  }

  set ref(refName) {
    this._ref = refName;
  }

  setRef(refName) {
    this._ref = refName;
    return this;
  }

  on() {
    var args = Array.prototype.slice.call(arguments);
    return this.eventEmitter.addListener.apply(this.eventEmitter, args);
  }

  off(name, fn) {
    return this.eventEmitter.removeListener(name, fn);
  }

  saveDocument(save) {
    this.documentStore = new DocumentStore(save);
    return this;
  }

  addDoc(doc, emitEvent) {
    if (!doc) return;
    emitEvent = (emitEvent === undefined) ? true : emitEvent;

    var docRef = doc[this._ref];

    this.documentStore.add(docRef, doc);
    this._fields.forEach(function (field) {
      var fieldTokens = this.pipeline.run(Tokenizer.tokenize(doc[field]));
      this.documentStore.addFieldLength(docRef, field, fieldTokens.length);

      var tokenCount = {};
      fieldTokens.forEach(function (token) {
        if (token in tokenCount) tokenCount[token] += 1;
        else tokenCount[token] = 1;
      }, this);

      for (var token in tokenCount) {
        var termFrequency = tokenCount[token];
        termFrequency = Math.sqrt(termFrequency);
        this.index[field].addToken(token, { ref: docRef, tf: termFrequency });
      }

    }, this);

    if (emitEvent) this.eventEmitter.emit('add', doc, this);
  }

  removeDocByRef(docRef, emitEvent) {
    if (!docRef) return;
    if (this.documentStore.save === false) {
      return;
    }

    if (!this.documentStore.hasDoc(docRef)) return;
    var doc = this.documentStore.getDoc(docRef);
    this.removeDoc(doc, false);
  }

  removeDoc(doc, emitEvent) {
    if (!doc) return;

    emitEvent = emitEvent === undefined ? true : emitEvent;

    var docRef = doc[this._ref];
    if (!this.documentStore.hasDoc(docRef)) return;

    this.documentStore.removeDoc(docRef);

    this._fields.forEach(function (field) {
      var fieldTokens = this.pipeline.run(Tokenizer.tokenize(doc[field]));
      fieldTokens.forEach(function (token) {
        this.index[field].removeToken(token, docRef);
      }, this);
    }, this);

    if (emitEvent) this.eventEmitter.emit('remove', doc, this);
  }

  updateDoc(doc, emitEvent) {
    emitEvent = emitEvent === undefined ? true : emitEvent;

    this.removeDocByRef(doc[this._ref], false);
    this.addDoc(doc, false);

    if (emitEvent) this.eventEmitter.emit('update', doc, this);
  }

  addField(fieldName) {
    this._fields.push(fieldName);
    this.index[fieldName] = new InvertedIndex();
    return this;
  }

  idf(term, field) {
    var cacheKey = "@" + field + '/' + term;
    if (Object.prototype.hasOwnProperty.call(this._idfCache, cacheKey)) return this._idfCache[cacheKey];

    var df = this.index[field].getDocFreq(term);
    var idf = 1 + Math.log(this.documentStore.length / (df + 1));
    this._idfCache[cacheKey] = idf;

    return idf;
  }

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

      for (let docRef in fieldSearchResults) {
        fieldSearchResults[docRef] = fieldSearchResults[docRef] * fieldBoost;
      }

      for (let docRef in fieldSearchResults) {
        if (docRef in queryResults) {
          queryResults[docRef] += fieldSearchResults[docRef];
        } else {
          queryResults[docRef] = fieldSearchResults[docRef];
        }
      }
    }

    var results = [];
    var result;
    for (var docRef in queryResults) {
      result = {ref: docRef, score: queryResults[docRef]};
      if (this.documentStore.hasDoc(docRef)) {
        result.doc = this.documentStore.getDoc(docRef);
      }
      results.push(result);
    }

    results.sort(function (a, b) { return b.score - a.score; });
    return results;
  }

  fieldSearch(queryTokens, fieldName, config) {
    var booleanType = config[fieldName].bool;
    var expand = config[fieldName].expand;
    var boost = config[fieldName].boost;
    var scores = null;
    var docTokens = {};

    // Do nothing if the boost is 0
    if (boost === 0) {
      return;
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
          for (let docRef in scores) {
            if (docRef in docs) {
              filteredDocs[docRef] = docs[docRef];
            }
          }
          docs = filteredDocs;
        }

        if (key === token) {
          this.fieldSearchStats(docTokens, key, docs);
        }

        for (var docRef in docs) {
          var tf = this.index[fieldName].getTermFrequency(key, docRef);
          var fieldLength = this.documentStore.getFieldLength(docRef, fieldName);
          var fieldLengthNorm = 1;
          if (fieldLength !== 0) {
            fieldLengthNorm = 1 / Math.sqrt(fieldLength);
          }

          var penality = 1;
          if (key !== token) {
            penality = (1 - (key.length - token.length) / key.length) * 0.15;
          }

          var score = tf * idf * fieldLengthNorm * penality;

          if (docRef in queryTokenScores) {
            queryTokenScores[docRef] += score;
          } else {
            queryTokenScores[docRef] = score;
          }
        }
      }, this);

      scores = this.mergeScores(scores, queryTokenScores, booleanType);
    }, this);

    scores = this.coordNorm(scores, docTokens, queryTokens.length);
    return scores;
  }

  mergeScores(accumScores, scores, op) {
    if (!accumScores) {
      return scores;
    }
    if (op === 'AND') {
      var intersection = {};
      for (let docRef in scores) {
        if (docRef in accumScores) {
          intersection[docRef] = accumScores[docRef] + scores[docRef];
        }
      }
      return intersection;
    }

    for (var docRef in scores) {
      if (docRef in accumScores) {
        accumScores[docRef] += scores[docRef];
      } else {
        accumScores[docRef] = scores[docRef];
      }
    }
    return accumScores;
  }

  fieldSearchStats(docTokens, token, docs) {
    for (var doc in docs) {
      if (doc in docTokens) {
        docTokens[doc].push(token);
      } else {
        docTokens[doc] = [token];
      }
    }
  }

  coordNorm(scores, docTokens, n) {
    for (var doc in scores) {
      if (!(doc in docTokens)) continue;
      var tokens = docTokens[doc].length;
      scores[doc] = scores[doc] * tokens / n;
    }

    return scores;
  }

  use(plugin) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.unshift(this);
    plugin.apply(this, args);
  }

}
