export class Pipeline {

  constructor() {
    this._queue = [];
  }

  get() {
    return this._queue;
  }

  add() {
    var fs = Array.prototype.slice.call(arguments);

    fs.forEach(function (f) {
      this._queue.push(f);
    }, this);
  }

  after(existingFct, newFct) {
    var pos = this._queue.indexOf(existingFct);
    if (pos === -1) throw new Error('Cannot find the the requested function to insert after');

    this._queue.splice(pos + 1, 0, newFct);
  };

  before(existingFct, newFct) {
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

  run(tokens) {
    var out = tokens,
      queueLength = this._queue.length;
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
