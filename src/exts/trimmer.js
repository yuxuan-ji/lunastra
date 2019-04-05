/**
 * Pipeline Extension: Trimmer
 */
export class Trimmer {

  /**
   * Trim non word characters from the begining and end of a String
   * and return the result
   * @param  {String} token
   * @return {String}
   */
  static trimmer(token) {
    if (token === null || token === undefined) {
      throw new Error('token should not be undefined');
    }

    return token
      .replace(/^\W+/, '')
      .replace(/\W+$/, '');
  }
}
