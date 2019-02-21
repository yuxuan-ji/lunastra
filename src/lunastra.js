import {Index} from './index.js';
import {Trimmer} from './trimmer.js';
import {StopWordFilter} from './stop_word_filters.js';
import {Stemmer} from './stemmer.js';

export function init(config) {
  var index = new Index();

  index.pipeline.add(
    Trimmer.trim,
    StopWordFilter.filter,
    Stemmer.stem
  );

  if (config) config.call(index, index);

  return index;
}

