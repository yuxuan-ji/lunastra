import {warn} from './utils.js';

export class Pipeline {

  constructor() {
    this.__queue = [];
  }

  static registerFunction(f, label) {
    if (label in Pipeline.registeredFunctions) {
      warn('Overwriting existing registered function: ' + label);
    }

    f.label = label;
    Pipeline.registeredFunctions[label] = f;
  }

  static getRegisteredFunction(label) {
    if (!(label in Pipeline.registeredFunctions)) return null;
    return Pipeline.registeredFunctions[label];
  }
}

Pipeline.registeredFunctions = {};
