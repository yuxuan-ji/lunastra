export class EventEmitter {

  constructor() {
    this.events = {};
  }

  hasHandler(name) {
    return name in this.events;
  };
}
