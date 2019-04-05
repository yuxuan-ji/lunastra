import {toString} from '../utils/utils.js';

/**
 * A wrapper around how Lunastra tokenizes strings
 */
export class Tokenizer {

  /**
   * Split a String into a list of tokens
   * @param  {String} str
   * @return {String[]}
   */
  static tokenize(str) {
    if (!arguments.length || str === null || str === undefined) return [];
    if (Array.isArray(str)) {
      var arr = str.filter(function (token) {return token !== null && token !== undefined;});

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
   * @return {String|RegExp}
   */
  static getSeparator() {
    return Tokenizer.separator;
  }

  /**
   * Set the seperator
   * @param {String|RegExp} sep
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
