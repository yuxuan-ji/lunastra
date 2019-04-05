/**
 * Utility class to convert a user query into a model understandable
 * by the Lunastra Index
 */
export class QueryParser {

  /**
   * Build the query into a model understandable by the Lunastra Index
   * @param  {String} query
   * @return {Object} model
   */
  static build(query) {
    var model = {
      q: "",
      config: {}
    };
    return model;
  }

}
