## Classes

<dl>
<dt><a href="#Index">Index</a></dt>
<dd><p>A dataset maintained by Lunastra and exposing its public facing API.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#init">init(config)</a> ⇒ <code><a href="#Index">Index</a></code></dt>
<dd><p>A helper method to initialize a Lunastra Index</p>
</dd>
</dl>

<a name="Index"></a>

## Index
A dataset maintained by Lunastra and exposing its public facing API.

**Kind**: global class  

* [Index](#Index)
    * [new exports.Index()](#new_Index_new)
    * [.getFields()](#Index+getFields) ⇒ <code>Array.&lt;String&gt;</code>
    * [.addField(fieldName)](#Index+addField)
    * [.setId(fieldName)](#Index+setId)
    * [.on(...events, f)](#Index+on)
    * [.off(event, f)](#Index+off)
    * [.saveDocument(save)](#Index+saveDocument) ⇒ <code>this</code>
    * [.addDoc(doc, emitEvent)](#Index+addDoc)
    * [.removeDocById(id, emitEvent)](#Index+removeDocById)
    * [.removeDoc(doc, emitEvent)](#Index+removeDoc)
    * [.updateDoc(doc, emitEvent)](#Index+updateDoc)
    * [.search(query, userConfig)](#Index+search) ⇒ <code>Object</code>
    * [.fieldSearch(queryTokens, fieldName, config)](#Index+fieldSearch) ⇒ <code>Object</code>
    * [.mergeScores(accumScores, scores, op)](#Index+mergeScores)
    * [.fieldSearchStats(docTokens, token, docs)](#Index+fieldSearchStats)
    * [.idf(term, field)](#Index+idf) ⇒ <code>Number</code>
    * [.coordNorm(scores, docTokens, n)](#Index+coordNorm) ⇒ <code>Object</code>

<a name="new_Index_new"></a>

### new exports.Index()
Initialize an index

<a name="Index+getFields"></a>

### index.getFields() ⇒ <code>Array.&lt;String&gt;</code>
Return the fields registered in the index

**Kind**: instance method of [<code>Index</code>](#Index)  
<a name="Index+addField"></a>

### index.addField(fieldName)
Register a field in the index

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| fieldName | <code>String</code> | 

<a name="Index+setId"></a>

### index.setId(fieldName)
Set the field used to uniquely identify a document (default is 'id')

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| fieldName | <code>String</code> | 

<a name="Index+on"></a>

### index.on(...events, f)
Bind a handler to the specified events

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| ...events | <code>String</code> | 
| f | <code>function</code> | 

<a name="Index+off"></a>

### index.off(event, f)
Unbind a handler from an event

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| event | <code>String</code> | 
| f | <code>function</code> | 

<a name="Index+saveDocument"></a>

### index.saveDocument(save) ⇒ <code>this</code>
Sets whether origin JSON documents are stored

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Description |
| --- | --- | --- |
| save | <code>Boolean</code> | default true |

<a name="Index+addDoc"></a>

### index.addDoc(doc, emitEvent)
Adds a document to the index

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| doc | <code>Object</code> |  |  |
| emitEvent | <code>Boolean</code> | <code>true</code> | whether an event should be triggered |

<a name="Index+removeDocById"></a>

### index.removeDocById(id, emitEvent)
Remove a document from the index by its unique id

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>String</code> \| <code>Number</code> |  |  |
| emitEvent | <code>Boolean</code> | <code>true</code> | whether an event should be triggered |

<a name="Index+removeDoc"></a>

### index.removeDoc(doc, emitEvent)
Remove a document from the index

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| doc | <code>Object</code> |  |  |
| emitEvent | <code>Boolean</code> | <code>true</code> | whether an event should be triggered |

<a name="Index+updateDoc"></a>

### index.updateDoc(doc, emitEvent)
Update a document in the index

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| doc | <code>Object</code> |  |  |
| emitEvent | <code>Boolean</code> | <code>true</code> | whether an event should be triggered |

<a name="Index+search"></a>

### index.search(query, userConfig) ⇒ <code>Object</code>
Searches the index using the passed query.Queries should be a String, multiple words are allowed.If config is null, will search all fields defaultly, and lead to OR based query.If config is specified, will search specified with query time boosting.All query tokens are passed through the same pipeline that document tokensare passed through, so any language processing involved will be run on everyquery term.Each query term is expanded, so that the term 'he' might be expanded to'hello' and 'help' if those terms were already included in the index.Matching documents are returned as an array of objects, each Object containsthe matching document id, as set for this index, and the similarity scorefor this document against the query.

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>String</code> | The query to search the index with. |
| userConfig | <code>JSON</code> | The user query config, JSON format. |

<a name="Index+fieldSearch"></a>

### index.fieldSearch(queryTokens, fieldName, config) ⇒ <code>Object</code>
Search a list of tokens within a field

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| queryTokens | <code>Array.&lt;String&gt;</code> | 
| fieldName | <code>String</code> | 
| config | <code>Configuration</code> | 

<a name="Index+mergeScores"></a>

### index.mergeScores(accumScores, scores, op)
Merge the scores from one set of tokens into an accumulated score table.Exact operation depends on the op parameter. If op is 'AND', then only theintersection of the two score lists is retained. Otherwise, the union ofthe two score lists is returned.

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Description |
| --- | --- | --- |
| accumScores | <code>Boolean</code> | should be null on first call |
| scores | <code>Object</code> | new scores to merge into accumScores |
| op | <code>String</code> | merge operation (should be 'AND' or 'OR') |

<a name="Index+fieldSearchStats"></a>

### index.fieldSearchStats(docTokens, token, docs)
Record query tokens of retrieved documents

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| docTokens | <code>Object</code> | 
| token | <code>String</code> | 
| docs | <code>Object</code> | 

<a name="Index+idf"></a>

### index.idf(term, field) ⇒ <code>Number</code>
Calculate the inverse document frequency of a term within a field

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| term | <code>String</code> | 
| field | <code>String</code> | 

<a name="Index+coordNorm"></a>

### index.coordNorm(scores, docTokens, n) ⇒ <code>Object</code>
Get the normalized coordination factor

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| scores | <code>Object</code> | 
| docTokens | <code>Object</code> | 
| n | <code>Number</code> | 

<a name="init"></a>

## init(config) ⇒ [<code>Index</code>](#Index)
A helper method to initialize a Lunastra Index

**Kind**: global function  

| Param | Type |
| --- | --- |
| config | <code>function</code> | 

