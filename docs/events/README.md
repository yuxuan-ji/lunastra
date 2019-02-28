<a name="EventEmitter"></a>

## EventEmitter
An event manager for Lunastra.

**Kind**: global class  

* [EventEmitter](#EventEmitter)
    * [new exports.EventEmitter()](#new_EventEmitter_new)
    * [.addListener(events, f)](#EventEmitter+addListener)
    * [.removeListener(event, f)](#EventEmitter+removeListener)
    * [.emit(event, ...args)](#EventEmitter+emit)

<a name="new_EventEmitter_new"></a>

### new exports.EventEmitter()
Initialize an event emitter

<a name="EventEmitter+addListener"></a>

### eventEmitter.addListener(events, f)
Bind a handler function to a specific event(s).Can bind a single function to many different events in one call.

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| events | <code>string</code> | the name(s) of events to bind this function to |
| f | <code>function</code> | the function to call when an event is fired |

<a name="EventEmitter+removeListener"></a>

### eventEmitter.removeListener(event, f)
Unbind a handler from an event

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| f | <code>function</code> | 

<a name="EventEmitter+emit"></a>

### eventEmitter.emit(event, ...args)
Emit an event

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | the event to emit |
| ...args | <code>any</code> | additional data that the event should expose |

