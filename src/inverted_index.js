export class InvertedIndex {

  /**
   * Initialize an inverted index
   */
  constructor() {
    this.root = { docs: {}, df: 0};
  }

  /**
     * Adds a {token: tokenInfo} pair to the inverted index.
     * If the token already exist, then update the tokenInfo.
     *
     * tokenInfo format: { ref: 1, tf: 2}
     * tokenInfo should contains the document's ref and the tf(token frequency) of that token in
     * the document.
     *
     * By default this function starts at the root of the current inverted index, however
     * it can start at any node of the inverted index if required.
     *
     * @param {string} token
     * @param {object} tokenInfo format: { ref: 1, tf: 2}
     * @param {object} root An optional node at which to start looking for the
     * correct place to enter the doc, by default the root of this InvertedIndex
     * is used.
   */
  addToken(token, tokenInfo, root) {
    root = root || this.root;

    for (var i = 0; i < token.length; ++i) {
      var key = token[i];

      if (!(key in root)) root[key] = {docs: {}, df: 0};
      root = root[key];
    }

    var docRef = tokenInfo.ref;
    if (!root.docs[docRef]) {
      // if this doc not exist, then add this doc
      root.docs[docRef] = {tf: tokenInfo.tf};
      root.df += 1;
    } else {
      // if this doc already exist, then update tokenInfo
      root.docs[docRef] = {tf: tokenInfo.tf};
    }
  }

  /**
   * Check whether the token is stored in this inverted index
   * @param  {string}  token
   * @return {boolean}
   */
  hasToken(token) {
    if (!token) return false;

    var node = this.root;

    for (var i = 0; i < token.length; i++) {
      if (!node[token[i]]) return false;
      node = node[token[i]];
    }

    return true;
  }

  /**
   * Get a node from the inverted index for a given token.
   * If token not found in this InvertedIndex, return null.
   * @param {string} token The token to get the node for.
   * @return {object}
   */
  getNode(token) {
    if (!token) return null;

    var node = this.root;

    for (var i = 0; i < token.length; i++) {
      if (!node[token[i]]) return null;
      node = node[token[i]];
    }

    return node;
  }

  /**
   * Get the documents of a given token.
   * If token not found, return {}.
   * @param {string} token The token to get the documents for.
   * @return {object}
   */
  getDocs(token) {
    var node = this.getNode(token);
    if (node == null) {
      return {};
    }

    return node.docs;
  }

  /**
   * Get term frequency of given token in given document unique id.
   * If token or document id not found, return 0.
   * @param {string} token the token to get the documents for
   * @param {string|number} docRef the unique id of the document
   * @return {number}
   */
  getTermFrequency(token, docRef) {
    var node = this.getNode(token);

    if (node == null) {
      return 0;
    }

    if (!(docRef in node.docs)) {
      return 0;
    }

    return node.docs[docRef].tf;
  }

  /**
   * Get the document frequency of given token.
   * If token not found, return 0.
   * @param {string} token the token to get the documents for
   * @return {object}
   */
  getDocFreq(token) {
    var node = this.getNode(token);

    if (node == null) {
      return 0;
    }

    return node.df;
  }

  /**
   * Remove the document identified by document's ref from the token in the inverted index.
   * @param {string} token remove the document from token
   * @param {string} ref the ref of the document to remove from given token
   */
  removeToken(token, ref) {
    if (!token) return;
    var node = this.getNode(token);

    if (node == null) return;

    if (ref in node.docs) {
      delete node.docs[ref];
      node.df -= 1;
    }
  }

  /**
   * Find all the possible suffixes of given token using tokens currently in the inverted index.
   * If token not found, return empty Array.
   * @param {string} token the token to expand
   * @return {string[]}
   */
  expandToken(token, memo, root) {
    if (token == null || token === '') return [];
    memo = memo || [];

    if (root == null) {
      root = this.getNode(token);
      if (root == null) return memo;
    }

    if (root.df > 0) memo.push(token);

    for (var key in root) {
      if (key === 'docs') continue;
      if (key === 'df') continue;
      this.expandToken(token + key, memo, root[key]);
    }

    return memo;
  }

}
