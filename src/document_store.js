import {clone} from './utils.js';

export class DocumentStore {

  constructor(save = true, deepcpy = true) {
    this._save = (save !== false);
    this._deepcpy = (deepcpy !== false);
    this.docs = {};
    this.docInfo = {};
    this.length = 0;
  }

  get save() {return this._save;}
  get deepcpy() {return this._deepcpy;}

  has(docRef) {
    return docRef in this.docs;
  }

  get(docRef) {
    if (this.has(docRef) === false) return null;
    return this.docs[docRef];
  }

  add(docRef, doc) {
    if (!this.has(docRef)) this.length++;

    this.docs[docRef] = this._save ? (this.deepcpy ? clone(doc) : doc) : null;

  }

  remove(docRef) {
    if (!this.has(docRef)) return;

    delete this.docs[docRef];
    delete this.docsInfo[docRef];
    this.length--;
  }

  getFieldLength(docRef, fieldName) {
    if (docRef === null || docRef === undefined) return 0;

    if (!(docRef in this.docs)) return 0;
    if (!(fieldName in this.docInfo[docRef])) return 0;
    return this.docInfo[docRef][fieldName];
  };

  addFieldLength(docRef, fieldName, length) {
    if (docRef === null || docRef === undefined) return;
    if (!this.has(docRef)) return;

    if (!this.docInfo[docRef]) this.docInfo[docRef] = {};
    this.docInfo[docRef][fieldName] = length;
  }

  updateFieldLength(docRef, fieldName, length) {
    if (docRef === null || docRef === undefined) return;
    if (!this.has(docRef)) return;

    this.addFieldLength(docRef, fieldName, length);
  }
}
