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
   * Run each function stored in the pipeline on some input
   * in FIFO order and returns the result in a list
   * @param  {any|any[]} input
   * @return {any[]}
   */
  run(input) {
    if (!Array.isArray(input)) input = [input];
    var output = input;

    // Apply each pipeline extension on each element of the input
    // and aggregate the result
    this._queue.forEach(function (ext) {
      var pipelineOutput = [];

      output.forEach(function (item) {
        var extensionOutput = ext.run(item);
        if (!Array.isArray(extensionOutput)) extensionOutput = [extensionOutput];

        extensionOutput.forEach(function (el) {
          if (el !== null && el !== undefined && el !== "") pipelineOutput.push(el);
        });

      });
      output = pipelineOutput;

    });

    return output;
  }
}
