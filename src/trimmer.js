/**
 * Pipeline Extension: Trimmer
 */
export class Trimmer {

  /**
   * Trim non word characters from the begining and end of a string
   * and return the result
   * @param  {string} token
   * @return {string}
   */
  static trim(token) {
    if (token === null || token === undefined) {
      throw new Error('token should not be undefined');
    }

    return token
      .replace(/^\W+/, '')
      .replace(/\W+$/, '');
  }
}
