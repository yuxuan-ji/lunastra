import {Pipeline} from './pipeline.js';
import {DocumentStore} from './document_store.js';
import {EventEmitter} from './event_emitter.js';
import {tokenize} from './tokenizer.js';
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
      var fieldTokens = this.pipeline.run(tokenize(doc[field]));
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
      var fieldTokens = this.pipeline.run(tokenize(doc[field]));
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
}
