export function warn(global) {
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message);
    }
  };
}

export function toString(obj) {
  if (obj === undefined || obj === null) return "";

  return obj.toString();
}

export function clone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  var copy = obj.constructor();

  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}
