/**
 * An ordered list of functions applied to both document
 * tokens and query tokens.
 */
export class Pipeline {

  /**
   * Initialize a pipeline
   */
  constructor() {
    this._queue = [];
  }

  /**
   * Return the stored list of functions
   * @return {function[]}
   */
  get() {
    return this._queue;
  }

  /**
   * Push functions to the end of the pipeline
   * @param {...function} fs
   */
  add(...fs) {
    fs.forEach(function (f) {
      this._queue.push(f);
    }, this);
  }

  /**
   * Insert a function after a function present in the pipeline
   * @param  {function} existingFct
   * @param  {function} newFct
   */
  after(existingFct, newFct) {
    var pos = this._queue.indexOf(existingFct);
    if (pos === -1) throw new Error('Cannot find the the requested function to insert after');

    this._queue.splice(pos + 1, 0, newFct);
  };

  /**
   * Insert a function before a function present in the pipeline
   * @param  {function} existingFct
   * @param  {function} newFct
   */
  before(existingFct, newFct) {
    var pos = this._queue.indexOf(existingFct);
    if (pos === -1) throw new Error('Cannot find the the requested function to insert after');

    this._queue.splice(pos, 0, newFct);
  };

  /**
   * Remove a function from the pipeline
   * @param  {function} f
   */
  remove(f) {
    var pos = this._queue.indexOf(f);
    if (pos === -1) return;

    this._queue.splice(pos, 1);
  };

  /**
   * Remove and return the last function in the pipeline
   * @return {function}
   */
  pop() {
    return this._queue.pop();
  }

  /**
   * Empty the pipeline
   */
  clear() {
    this._queue = [];
  }

  /**
   * Run each function stored in the pipeline on the input tokens
   * in FIFO order and returns the result
   * @param  {string[]} tokens
   * @return {string[]}
   */
  run(tokens) {
    var out = tokens;
    var queueLength = this._queue.length;
    for (var i = 0; i < queueLength; i++) {
      var pipelineOutput = [];
      for (let j = 0; j < out.length; j++) {
        var output = this._queue[i](out[j], j, out);
        if (!Array.isArray(output)) output = [output];
        for (var k = 0; k < output.length; k++) {
          if (output[k] !== null && output[k] !== void 0) {
            pipelineOutput.push(output[k]);
          }
        }
      }
      for (var j = pipelineOutput.length - 1; j >= 0; j--) {
        if (pipelineOutput[j] === "") pipelineOutput.splice(j, 1);
      }
      out = pipelineOutput;
    }

    return out;
  }
}
