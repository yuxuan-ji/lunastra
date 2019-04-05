import {clone} from '../utils/utils.js';

/**
 * A key-value document store used for storing sets of tokens for
 * documents stored in the index.
 */
export class DocumentStore {

  /**
   * Initialize a document store
   * @param  {Boolean} save    whether to store original documents
   * @param  {Boolean} deepcpy whether to deep copy the original documents
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
   * Check whether a given document id is stored
   * @param  {String|Number}  id
   * @return {Boolean}
   */
  hasDoc(id) {
    return id in this.docs;
  }

  /**
   * Get a document by its id
   * @param  {String|Number} id
   * @return {Object}
   */
  getDoc(id) {
    if (this.hasDoc(id) === false) return null;
    return this.docs[id];
  }

  /**
   * Store a document or update it if it already exists
   * @param {String|Number} id
   * @param {Object} doc
   */
  addDoc(id, doc) {
    if (!this.hasDoc(id)) this.length++;

    this.docs[id] = this._save ? (this.deepcpy ? clone(doc) : doc) : null;

  }

  /**
   * Remove a document from the store by its id
   * @param  {String|Number} id
   */
  removeDoc(id) {
    if (!this.hasDoc(id)) return;

    delete this.docs[id];
    delete this.docInfo[id];
    this.length--;
  }

  /**
   * Get the field length of a document by its id
   *
   * @param {Number|String} id
   * @param {String} fieldName field name
   * @return {Number} field length
   */
  getFieldLength(id, fieldName) {
    if (id === null || id === undefined) return 0;

    if (!(id in this.docs)) return 0;
    if (!(fieldName in this.docInfo[id])) return 0;
    return this.docInfo[id][fieldName];
  };

  /**
   * Add field length of a document's field tokens from pipeline results.
   * The field length of a document is used to do field length normalization
   * even without the original JSON document stored.
   * @param {Number|String} id
   * @param {String} fieldName field name
   * @param {Number} length field length
   */
  addFieldLength(id, fieldName, length) {
    if (id === null || id === undefined) return;
    if (!this.hasDoc(id)) return;

    if (!this.docInfo[id]) this.docInfo[id] = {};
    this.docInfo[id][fieldName] = length;
  }

  /**
   * Update field length of a document's field tokens from pipeline results.
   * The field length of a document is used to do field length normalization
   * even without the original JSON document stored.
   * @param {Number|String} id
   * @param {String} fieldName field name
   * @param {Number} length field length
   */
  updateFieldLength(id, fieldName, length) {
    if (id === null || id === undefined) return;
    if (!this.hasDoc(id)) return;

    this.addFieldLength(id, fieldName, length);
  }
}
