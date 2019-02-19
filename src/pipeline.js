import {warn} from './utils.js';

export class Pipeline {

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

  constructor() {
    this._queue = [];
  }

  get queue() {
    return this._queue;
  }
  
  push() {
    var fs = Array.prototype.slice.call(arguments);

    fs.forEach(function (f) {
      this._queue.push(f);
    }, this);
  }

  insertAfter(existingFct, newFct) {
    var pos = this._queue.indexOf(existingFct);
    if (pos === -1) throw new Error('Cannot find the the requested function to insert after');

    this._queue.splice(pos + 1, 0, newFct);
  };

  insertBefore(existingFct, newFct) {
    var pos = this._queue.indexOf(existingFct);
    if (pos === -1) throw new Error('Cannot find the the requested function to insert after');

    this._queue.splice(pos, 0, newFct);
  };

  remove(f) {
    var pos = this._queue.indexOf(f);
    if (pos === -1) return;

    this._queue.splice(pos, 1);
  };

  pop() {
    this._queue.pop();
  }

  clear() {
    this._queue = [];
  }
}

Pipeline.registeredFunctions = {};
