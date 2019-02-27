/**
 * An event manager for Lunastra.
 */
export class EventEmitter {

  /**
   * Initialize an event emitter
   */
  constructor() {
    this.events = {};
  }

  /**
   * Check whether an event is registered
   * @private
   * @param {string} event
   * @return {boolean}
   */
  hasHandler(event) {
    return event in this.events;
  };

  /**
   * Bind a handler function to a specific event(s).
   *
   * Can bind a single function to many different events in one call.
   *
   * @param {string} events the name(s) of events to bind this function to
   * @param {function} f the function to call when an event is fired
   */
  addListener(...args) {
    var f = args.pop();
    var events = args;

    if (typeof f !== "function") throw new TypeError("Last argument must be a function");

    events.forEach(function (event) {
      if (!this.hasHandler(event)) this.events[event] = [];
      this.events[event].push(f);
    }, this);
  }

  /**
   * Unbind a handler from an event
   * @param  {string} event
   * @param  {function} f
   */
  removeListener(event, f) {
    if (!this.hasHandler(event)) return;

    var fIndex = this.events[event].indexOf(f);
    if (fIndex === -1) return;

    this.events[event].splice(fIndex, 1);

    if (this.events[event].length === 0) delete this.events[event];
  }

  /**
   * Emit an event
   * @param  {string} event
   */
  emit(event) {
    if (!this.hasHandler(event)) return;

    var args = Array.prototype.slice.call(arguments, 1);

    this.events[event].forEach(function (f) {
      f.apply(undefined, args);
    }, this);
  }
}
