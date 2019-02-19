import {Index} from './index.js';

export function init(config) {
  var index = new Index();

  if (config) config.call(index, index);

  return index;
}

