## Classes

<dl>
<dt><a href="#EventEmitter">EventEmitter</a></dt>
<dd><p>An event manager for Lunastra.</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#QueryEvents">QueryEvents</a> : <code>object</code></dt>
<dd><p>Enum for Query Events</p>
</dd>
</dl>

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

<a name="QueryEvents"></a>

## QueryEvents : <code>object</code>
Enum for Query Events

**Kind**: global namespace  
**Read only**: true  

* [QueryEvents](#QueryEvents) : <code>object</code>
    * [.buildingQuery](#QueryEvents.buildingQuery) : <code>string</code>
    * [.doneBuildingQuery](#QueryEvents.doneBuildingQuery) : <code>string</code>
    * [.duringQuery](#QueryEvents.duringQuery) : <code>string</code>
    * [.newQuery](#QueryEvents.newQuery) : <code>string</code>
    * [.noResults](#QueryEvents.noResults) : <code>string</code>
    * [.preprocessResults](#QueryEvents.preprocessResults) : <code>string</code>
    * [.queryError](#QueryEvents.queryError) : <code>string</code>
    * [.querySuccess](#QueryEvents.querySuccess) : <code>string</code>

<a name="QueryEvents.buildingQuery"></a>

### QueryEvents.buildingQuery : <code>string</code>
Triggered when the query is being built.The string value is 'buildingQuery'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.doneBuildingQuery"></a>

### QueryEvents.doneBuildingQuery : <code>string</code>
Triggered when the query is done being built.The string value is 'doneBuildingQuery'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.duringQuery"></a>

### QueryEvents.duringQuery : <code>string</code>
Triggered when the query is being executed on the Search API.The string value is 'duringQuery'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.newQuery"></a>

### QueryEvents.newQuery : <code>string</code>
Triggered when a new query is launched.The string value is 'newQuery'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.noResults"></a>

### QueryEvents.noResults : <code>string</code>
Triggered when there is no result for a particular query.The string value is 'noResults'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.preprocessResults"></a>

### QueryEvents.preprocessResults : <code>string</code>
Triggered before the QueryEvents.querySuccess event.This allows external code to modify the results before rendering them.The string value is 'preprocessResults'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.queryError"></a>

### QueryEvents.queryError : <code>string</code>
Triggered when there was an error executing a query on the Search API.The string value is 'querySuccess'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.querySuccess"></a>

### QueryEvents.querySuccess : <code>string</code>
Triggered when a query successfully returns from the Search API.The string value is 'querySuccess'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
