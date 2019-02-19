import {Pipeline} from './pipeline.js';
import {DocumentStore} from './document_store.js';
import {EventEmitter} from './event_emitter.js';

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

  on() {
    var args = Array.prototype.slice.call(arguments);
    return this.eventEmitter.addListener.apply(this.eventEmitter, args);
  }

  off(name, fn) {
    return this.eventEmitter.removeListener(name, fn);
  }
}
