import {clone} from '../utils/utils.js';

/**
 * A key-value document store used for storing sets of tokens for
 * documents stored in the index.
 */
export class DocumentStore {

  /**
   * Initialize a document store
   * @param  {boolean} save    whether to store original documents
   * @param  {boolean} deepcpy whether to deep copy the original documents
   */
  constructor(save = true, deepcpy = true) {
    this._save = (save !== false);
    this._deepcpy = (deepcpy !== false);
    this.docs = {};
    this.docInfo = {};
    this.length = 0;
  }

  get deepcpy() {return this._deepcpy;}

  isDocStored() {return this._save;}

  /**
   * Check whether a given document ref is stored
   * @param  {string|number}  docRef
   * @return {boolean}
   */
  hasDoc(docRef) {
    return docRef in this.docs;
  }

  /**
   * Get a document by its ref
   * @param  {string|number} docRef
   * @return {object}
   */
  getDoc(docRef) {
    if (this.hasDoc(docRef) === false) return null;
    return this.docs[docRef];
  }

  /**
   * Store a document or update it if it already exists
   * @param {string|number} docRef
   * @param {object} doc
   */
  addDoc(docRef, doc) {
    if (!this.hasDoc(docRef)) this.length++;

    this.docs[docRef] = this._save ? (this.deepcpy ? clone(doc) : doc) : null;

  }

  /**
   * Remove a document from the store by its ref
   * @param  {string|number} docRef
   */
  removeDoc(docRef) {
    if (!this.hasDoc(docRef)) return;

    delete this.docs[docRef];
    delete this.docInfo[docRef];
    this.length--;
  }

  /**
   * Get the field length of a document by its ref
   *
   * @param {number|string} docRef document id or reference
   * @param {string} fieldName field name
   * @return {number} field length
   */
  getFieldLength(docRef, fieldName) {
    if (docRef === null || docRef === undefined) return 0;

    if (!(docRef in this.docs)) return 0;
    if (!(fieldName in this.docInfo[docRef])) return 0;
    return this.docInfo[docRef][fieldName];
  };

  /**
   * Add field length of a document's field tokens from pipeline results.
   * The field length of a document is used to do field length normalization
   * even without the original JSON document stored.
   * @param {number|string} docRef document's id or reference
   * @param {string} fieldName field name
   * @param {number} length field length
   */
  addFieldLength(docRef, fieldName, length) {
    if (docRef === null || docRef === undefined) return;
    if (!this.hasDoc(docRef)) return;

    if (!this.docInfo[docRef]) this.docInfo[docRef] = {};
    this.docInfo[docRef][fieldName] = length;
  }

  /**
   * Update field length of a document's field tokens from pipeline results.
   * The field length of a document is used to do field length normalization
   * even without the original JSON document stored.
   * @param {number|string} docRef document's id or reference
   * @param {string} fieldName field name
   * @param {number} length field length
   */
  updateFieldLength(docRef, fieldName, length) {
    if (docRef === null || docRef === undefined) return;
    if (!this.hasDoc(docRef)) return;

    this.addFieldLength(docRef, fieldName, length);
  }
}
