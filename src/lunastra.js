import {Index} from './index.js';
import {Trimmer} from './exts/trimmer.js';
import {StopWordFilter} from './exts/stop_word_filters.js';
import {Stemmer} from './exts/stemmer.js';

/**
 * A helper method to initialize a Lunastra Index
 * @param  {Object} config
 * @param {String} config.id field used to uniquely identify a document (default is 'id')
 * @param {Boolean} config.save whether to save documents in the document store (default is true)
 * @param {String[]} config.fields fields to be registered in the index
 * @param {Object[]} config.documents documents to add to the index
 * @return {Index}
 */
export function init(config) {
  var index = new Index();

  index.pipeline.add(
    Trimmer.trimmer,
    StopWordFilter.stopWordFilter,
    Stemmer.stemmer
  );

  if (config.id) index.setId(config.id);
  if (config.save === false) index.saveDoc(false);
  if (config.fields && config.fields.length > 0) {
    config.fields.forEach(function (field) {index.addField(field);});
  }
  if (config.documents && config.documents.length > 0) {
    config.documents.forEach(function (doc) {index.addDoc(doc);});
  }

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
