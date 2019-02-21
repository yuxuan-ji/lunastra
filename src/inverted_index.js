export class InvertedIndex {

  constructor() {
    this.root = { docs: {}, df: 0};
  }

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

  hasToken(token) {
    if (!token) return false;

    var node = this.root;

    for (var i = 0; i < token.length; i++) {
      if (!node[token[i]]) return false;
      node = node[token[i]];
    }

    return true;
  }

  getNode(token) {
    if (!token) return null;

    var node = this.root;

    for (var i = 0; i < token.length; i++) {
      if (!node[token[i]]) return null;
      node = node[token[i]];
    }

    return node;
  }

  getDocs(token) {
    var node = this.getNode(token);
    if (node == null) {
      return {};
    }

    return node.docs;
  }

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

  getDocFreq(token) {
    var node = this.getNode(token);

    if (node == null) {
      return 0;
    }

    return node.df;
  }

  removeToken(token, ref) {
    if (!token) return;
    var node = this.getNode(token);

    if (node == null) return;

    if (ref in node.docs) {
      delete node.docs[ref];
      node.df -= 1;
    }
  }

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
