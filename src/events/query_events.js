/**
 * Enum for Query Events
 * @readonly
 * @namespace {Enum} QueryEvents
 */
export const QueryEvents = {

  /**
   * Triggered when the query is being built.
   * The string value is 'buildingQuery'.
   * @memberof QueryEvents
   * @type {string}
   */
  buildingQuery: 'buildingQuery',

  /**
   * Triggered when the query is done being built.
   * The string value is 'doneBuildingQuery'.
   * @memberof QueryEvents
   * @type {string}
   */
  doneBuildingQuery: 'doneBuildingQuery',

  /**
   * Triggered when the query is being executed on the Search API.
   * The string value is 'duringQuery'.
   * @memberof QueryEvents
   * @type {string}
   */
  duringQuery: 'duringQuery',

  /**
   * Triggered when a new query is launched.
   * The string value is 'newQuery'.
   * @memberof QueryEvents
   * @type {string}
   */
  newQuery: 'newQuery',

  /**
   * Triggered when there is no result for a particular query.
   * The string value is 'noResults'.
   * @memberof QueryEvents
   * @type {string}
   */
  noResults: 'noResults',

  /**
   * Triggered before the QueryEvents.querySuccess event.
   * This allows external code to modify the results before rendering them.
   * The string value is 'preprocessResults'.
   * @memberof QueryEvents
   * @type {string}
   */
  preprocessResults: 'preprocessResults',

  /**
   * Triggered when there was an error executing a query on the Search API.
   * The string value is 'querySuccess'.
   * @memberof QueryEvents
   * @type {string}
   */
  queryError: 'queryError',

  /**
   * Triggered when a query successfully returns from the Search API.
   * The string value is 'querySuccess'.
   * @memberof QueryEvents
   * @type {string}
   */
  querySuccess: 'querySuccess'
};
