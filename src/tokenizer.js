import {toString} from './utils.js';

export class Tokenizer {

  /**
   * Split a string into a list of tokens
   * @param  {string} str
   * @return {string[]}
   */
  static tokenize(str) {
    if (!arguments.length || str === null || str === undefined) return [];
    if (Array.isArray(str)) {
      var arr = str.filter(function (token) {
        if (token === null || token === undefined) {
          return false;
        }

        return true;
      });

      arr = arr.map(function (t) {
        return toString(t).toLowerCase();
      });

      var out = [];
      arr.forEach(function (item) {
        var tokens = item.split(Tokenizer.separator);
        out = out.concat(tokens);
      }, this);

      return out;
    }

    return str.toString().trim().toLowerCase().split(Tokenizer.separator);
  }

  /**
   * Get the seperator
   * @return {string|regexp}
   */
  static getSeparator() {
    return Tokenizer.separator;
  }

  /**
   * Set the seperator
   * @param {string|regexp} sep
   */
  static setSeparator(sep) {
    Tokenizer.separator = sep;
  }

  /**
   * Reset to the default seperator
   */
  static resetSeparator() {
    Tokenizer.separator = Tokenizer.defaultSeparator;
  }

}

Tokenizer.defaultSeparator = /[\s\-]+/;
Tokenizer.separator = Tokenizer.defaultSeparator;
