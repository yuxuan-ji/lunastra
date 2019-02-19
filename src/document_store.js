export class DocumentStore {

  constructor(save = true) {
    this._save = (save !== false);
    this.docs = {};
    this.docInfo = {};
    this.length = 0;
  }

}
