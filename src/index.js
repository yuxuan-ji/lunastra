import {Pipeline} from './pipeline.js';
import {DocumentStore} from './document_store.js';

export class Index {

  constructor() {
    this._fields = [];
    this._ref = 'id';
    this.index = {};
    this._idfCache = {};

    this.pipeline = new Pipeline();
    this.documentStore = new DocumentStore();
  }

}
