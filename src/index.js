import {Pipeline} from './pipeline.js';

export class Index {

  constructor() {
    this._fields = [];
    this._ref = 'id';
    this.index = {};
    this._idfCache = {};

    this.pipeline = new Pipeline();
  }

}
