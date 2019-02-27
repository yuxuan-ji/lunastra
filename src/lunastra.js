import {Index} from './index.js';
import {Trimmer} from './trimmer.js';
import {StopWordFilter} from './stop_word_filters.js';
import {Stemmer} from './stemmer.js';

/**
 * A helper method to initialize a Lunastra Index
 * @param  {object} config
 * @return {Index}
 */
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

export * from './configuration.js';
export * from './document_store.js';
export * from './event_emitter.js';
export * from './index.js';
export * from './inverted_index.js';
export * from './pipeline.js';
export * from './stemmer.js';
export * from './stop_word_filters.js';
export * from './tokenizer.js';
export * from './trimmer.js';
export * from './utils.js';
