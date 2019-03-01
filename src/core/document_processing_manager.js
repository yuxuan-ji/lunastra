import {Pipeline} from './pipeline.js';

export class DocumentProcessingManager {
  constructor() {
    this._preconversion = new Pipeline();
    this._postconversion = new Pipeline();
  }

  processing() {

  }

  mapping() {

  }

  addPreConversion(...fs) {
    this._preconversion.add(...fs);
  }

  addPostConversion(...fs) {
    this._postconversion.add(...fs);
  }

  run() {

  }

}
