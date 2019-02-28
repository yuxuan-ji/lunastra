/**
 * Enum for Query Events
 * @readonly
 * @enum {string}
 */
export const QueryEvents = {

  /**
   * Triggered when the query is being built.
   * The string value is 'buildingQuery'.
   * @type {string}
   */
  buildingQuery: 'buildingQuery',

  /**
   * Triggered when the query is done being built.
   * The string value is 'doneBuildingQuery'.
   * @type {string}
   */
  doneBuildingQuery: 'doneBuildingQuery',

  /**
   * Triggered when the query is being executed on the Search API.
   * The string value is 'duringQuery'.
   * @type {string}
   */
  duringQuery: 'duringQuery',

  /**
   * Triggered when a new query is launched.
   * The string value is 'newQuery'.
   * @type {string}
   */
  newQuery: 'newQuery',

  /**
   * Triggered when there is no result for a particular query.
   * The string value is 'noResults'.
   * @type {string}
   */
  noResults: 'noResults',

  /**
   * Triggered before the QueryEvents.querySuccess event.
   * This allows external code to modify the results before rendering them.
   * The string value is 'preprocessResults'.
   * @type {string}
   */
  preprocessResults: 'preprocessResults',

  /**
   * Triggered when there was an error executing a query on the Search API.
   * The string value is 'querySuccess'.
   * @type {string}
   */
  queryError: 'queryError',

  /**
   * Triggered when a query successfully returns from the Search API.
   * The string value is 'querySuccess'.
   * @type {string}
   */
  querySuccess: 'querySuccess'
};
