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
   * @return {Function[]}
   */
  get() {
    return this._queue;
  }

  /**
   * Push functions to the end of the pipeline
   * @param {...Function} fs
   */
  add(...fs) {
    fs.forEach(function (f) {
      this._queue.push(f);
    }, this);
  }

  /**
   * Insert a function after a function present in the pipeline
   * @param  {Function} existingFct
   * @param  {Function} newFct
   */
  after(existingFct, newFct) {
    var pos = this._queue.indexOf(existingFct);
    if (pos === -1) throw new Error('Cannot find the the requested function to insert after');

    this._queue.splice(pos + 1, 0, newFct);
  };

  /**
   * Insert a function before a function present in the pipeline
   * @param  {Function} existingFct
   * @param  {Function} newFct
   */
  before(existingFct, newFct) {
    var pos = this._queue.indexOf(existingFct);
    if (pos === -1) throw new Error('Cannot find the the requested function to insert before');

    this._queue.splice(pos, 0, newFct);
  };

  /**
   * Remove a function from the pipeline
   * @param  {Function} f
   */
  remove(f) {
    var pos = this._queue.indexOf(f);
    if (pos === -1) return;

    this._queue.splice(pos, 1);
  };

  /**
   * Remove and return the last function in the pipeline
   * @return {Function}
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
   * @param  {Any|Any[]} input
   * @return {Any[]}
   */
  run(input) {
    if (!Array.isArray(input)) input = [input];
    var output = input;

    // Apply each pipeline extension on each element of the input
    // and aggregate the result
    this._queue.forEach(function (f) {
      var pipelineOutput = [];

      output.forEach(function (item, index, array) {
        var extensionOutput = f(item, index, array);
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
