import {Pipeline} from './pipeline.js';

/**
 * The Document Processing Manager is a large pipeline
 * any document goes through before being stored in
 * the Document Store
 */
export class DocumentProcessingManager {

  /**
   * Initialize a DPM
   */
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
