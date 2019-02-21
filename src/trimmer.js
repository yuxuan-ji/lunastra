export class Trimmer {

  static trim(token) {
    if (token === null || token === undefined) {
      throw new Error('token should not be undefined');
    }

    return token
      .replace(/^\W+/, '')
      .replace(/\W+$/, '');
  }
}
