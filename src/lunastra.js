import {Index} from './index.js';
import {Trimmer} from './exts/trimmer.js';
import {StopWordFilter} from './exts/stop_word_filters.js';
import {Stemmer} from './exts/stemmer.js';

/**
 * A helper method to initialize a Lunastra Index
 * @param  {Object} config
 * @return {Index}
 */
export function init(config) {
  var index = new Index();

  index.pipeline.add(
    Trimmer.trimmer,
    StopWordFilter.stopWordFilter,
    Stemmer.stemmer
  );

  if (config) config.call(index, index);

  return index;
}

export * from './index.js';
export * from './core/configuration.js';
export * from './core/document_store.js';
export * from './core/tokenizer.js';
export * from './core/inverted_index.js';
export * from './core/pipeline.js';
export * from './events/event_emitter.js';
export * from './exts/stemmer.js';
export * from './exts/stop_word_filters.js';
export * from './exts/trimmer.js';
export * from './utils/utils.js';
