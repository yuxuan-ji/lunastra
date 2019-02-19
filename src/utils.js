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