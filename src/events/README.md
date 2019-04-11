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
    * [.addListener(...events, f)](#EventEmitter+addListener)
    * [.removeListener(event, f)](#EventEmitter+removeListener)
    * [.emit(event, ...args)](#EventEmitter+emit)

<a name="new_EventEmitter_new"></a>

### new exports.EventEmitter()
Initialize an event emitter

<a name="EventEmitter+addListener"></a>

### eventEmitter.addListener(...events, f)
Bind a handler function to a specific event(s).Can bind a single function to many different events in one call.

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| ...events | <code>String</code> | the name(s) of events to bind this function to |
| f | <code>function</code> | the function to call when an event is fired |

<a name="EventEmitter+removeListener"></a>

### eventEmitter.removeListener(event, f)
Unbind a handler from an event

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type |
| --- | --- |
| event | <code>String</code> | 
| f | <code>function</code> | 

<a name="EventEmitter+emit"></a>

### eventEmitter.emit(event, ...args)
Emit an event

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> | the event to emit |
| ...args | <code>Any</code> | additional data that the event should expose |

<a name="QueryEvents"></a>

## QueryEvents : <code>object</code>
Enum for Query Events

**Kind**: global namespace  
**Read only**: true  

* [QueryEvents](#QueryEvents) : <code>object</code>
    * [.buildingQuery](#QueryEvents.buildingQuery) : <code>String</code>
    * [.doneBuildingQuery](#QueryEvents.doneBuildingQuery) : <code>String</code>
    * [.duringQuery](#QueryEvents.duringQuery) : <code>String</code>
    * [.newQuery](#QueryEvents.newQuery) : <code>String</code>
    * [.noResults](#QueryEvents.noResults) : <code>String</code>
    * [.preprocessResults](#QueryEvents.preprocessResults) : <code>String</code>
    * [.queryError](#QueryEvents.queryError) : <code>String</code>
    * [.querySuccess](#QueryEvents.querySuccess) : <code>String</code>

<a name="QueryEvents.buildingQuery"></a>

### QueryEvents.buildingQuery : <code>String</code>
Triggered when the query is being built.The String value is 'buildingQuery'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.doneBuildingQuery"></a>

### QueryEvents.doneBuildingQuery : <code>String</code>
Triggered when the query is done being built.The String value is 'doneBuildingQuery'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.duringQuery"></a>

### QueryEvents.duringQuery : <code>String</code>
Triggered when the query is being executed on the Search API.The String value is 'duringQuery'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.newQuery"></a>

### QueryEvents.newQuery : <code>String</code>
Triggered when a new query is launched.The String value is 'newQuery'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.noResults"></a>

### QueryEvents.noResults : <code>String</code>
Triggered when there is no result for a particular query.The String value is 'noResults'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.preprocessResults"></a>

### QueryEvents.preprocessResults : <code>String</code>
Triggered before the QueryEvents.querySuccess event.This allows external code to modify the results before rendering them.The String value is 'preprocessResults'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.queryError"></a>

### QueryEvents.queryError : <code>String</code>
Triggered when there was an error executing a query on the Search API.The String value is 'querySuccess'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
<a name="QueryEvents.querySuccess"></a>

### QueryEvents.querySuccess : <code>String</code>
Triggered when a query successfully returns from the Search API.The String value is 'querySuccess'.

**Kind**: static property of [<code>QueryEvents</code>](#QueryEvents)  
