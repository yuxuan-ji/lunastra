import {toString} from './utils.js';

export class Tokenizer {

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

  static getSeparator() {
    return Tokenizer.separator;
  }

  static setSeparator(sep) {
    Tokenizer.separator = sep;
  }

  static resetSeparator() {
    Tokenizer.separator = Tokenizer.defaultSeparator;
  }

}

Tokenizer.defaultSeparator = /[\s\-]+/;
Tokenizer.separator = Tokenizer.defaultSeparator;
