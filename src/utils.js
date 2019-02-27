/**
 * Print a warning message to the console
 * @param  {string} message
 */
export function warn(global) {
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message);
    }
  };
}

/**
 * Returns and empty string for null and undefined,
 * otherwise returns the result of the object's
 * '.toString()' method
 * @param  {object} obj
 * @return {string}
 */
export function toString(obj) {
  if (obj === undefined || obj === null) return "";

  return obj.toString();
}

/**
 * Return a deep copy of the object
 * @param  {object} obj
 * @return {object}
 */
export function clone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  var copy = obj.constructor();

  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}
