/**
 * Print a warning message to the console
 * @param  {String} message
 */
export function warn(global) {
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message);
    }
  };
}

/**
 * Returns an empty String for null and undefined,
 * otherwise returns the result of the Object's
 * '.toString()' method
 * @param  {Object} obj
 * @return {String}
 */
export function toString(obj) {
  if (obj === undefined || obj === null) return "";

  return obj.toString();
}

/**
 * Return a deep copy of the Object
 * @param  {Object} obj
 * @return {Object}
 */
export function clone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  var copy = obj.constructor();

  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}
