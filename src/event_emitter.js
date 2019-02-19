export class EventEmitter {

  constructor() {
    this.events = {};
  }

  hasHandler(name) {
    return name in this.events;
  };

  addListener() {
    var args = Array.prototype.slice.call(arguments);
    var f = args.pop();
    var names = args;

    if (typeof f !== "function") throw new TypeError("Last argument must be a function");

    names.forEach(function (name) {
      if (!this.hasHandler(name)) this.events[name] = [];
      this.events[name].push(f);
    }, this);
  }

  removeListener(name, f) {
    if (!this.hasHandler(name)) return;

    var fIndex = this.events[name].indexOf(f);
    if (fIndex === -1) return;

    this.events[name].splice(fIndex, 1);

    if (this.events[name].length === 0) delete this.events[name];
  }

  emit(name) {
    if (!this.hasHandler(name)) return;

    var args = Array.prototype.slice.call(arguments, 1);

    this.events[name].forEach(function (f) {
      f.apply(undefined, args);
    }, this);
  }
}
