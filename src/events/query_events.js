/**
 * Enum for Query Events
 * @readonly
 * @namespace {Enum} QueryEvents
 */
export const QueryEvents = {

  /**
   * Triggered when the query is being built.
   * The String value is 'buildingQuery'.
   * @memberof QueryEvents
   * @type {String}
   */
  buildingQuery: 'buildingQuery',

  /**
   * Triggered when the query is done being built.
   * The String value is 'doneBuildingQuery'.
   * @memberof QueryEvents
   * @type {String}
   */
  doneBuildingQuery: 'doneBuildingQuery',

  /**
   * Triggered when the query is being executed on the Search API.
   * The String value is 'duringQuery'.
   * @memberof QueryEvents
   * @type {String}
   */
  duringQuery: 'duringQuery',

  /**
   * Triggered when a new query is launched.
   * The String value is 'newQuery'.
   * @memberof QueryEvents
   * @type {String}
   */
  newQuery: 'newQuery',

  /**
   * Triggered when there is no result for a particular query.
   * The String value is 'noResults'.
   * @memberof QueryEvents
   * @type {String}
   */
  noResults: 'noResults',

  /**
   * Triggered before the QueryEvents.querySuccess event.
   * This allows external code to modify the results before rendering them.
   * The String value is 'preprocessResults'.
   * @memberof QueryEvents
   * @type {String}
   */
  preprocessResults: 'preprocessResults',

  /**
   * Triggered when there was an error executing a query on the Search API.
   * The String value is 'querySuccess'.
   * @memberof QueryEvents
   * @type {String}
   */
  queryError: 'queryError',

  /**
   * Triggered when a query successfully returns from the Search API.
   * The String value is 'querySuccess'.
   * @memberof QueryEvents
   * @type {String}
   */
  querySuccess: 'querySuccess'
};
