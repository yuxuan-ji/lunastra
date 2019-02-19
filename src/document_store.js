export class DocumentStore {

  constructor(save = true) {
    this._save = (save !== false);
    this.docs = {};
    this.docInfo = {};
    this.length = 0;
  }

  get save() {
    return this._save;
  }

  hasDoc(docRef) {
    return docRef in this.docs;
  }

  getDoc(docRef) {
    if (this.hasDoc(docRef) === false) return null;
    return this.docs[docRef];
  }
}
