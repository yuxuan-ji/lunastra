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
    * [.getFields()](#Index+getFields) ⇒ <code>Array.&lt;string&gt;</code>
    * [.addField(fieldName)](#Index+addField)
    * [.setRef(fieldName)](#Index+setRef)
    * [.on(...events, f)](#Index+on)
    * [.off(event, f)](#Index+off)
    * [.saveDocument(save)](#Index+saveDocument) ⇒ <code>this</code>
    * [.addDoc(doc, emitEvent)](#Index+addDoc)
    * [.removeDocByRef(docRef, emitEvent)](#Index+removeDocByRef)
    * [.removeDoc(doc, emitEvent)](#Index+removeDoc)
    * [.updateDoc(doc, emitEvent)](#Index+updateDoc)
    * [.search(query, userConfig)](#Index+search) ⇒ <code>object</code>
    * [.fieldSearch(queryTokens, fieldName, config)](#Index+fieldSearch) ⇒ <code>object</code>
    * [.mergeScores(accumScores, scores, op)](#Index+mergeScores)
    * [.fieldSearchStats(docTokens, token, docs)](#Index+fieldSearchStats)
    * [.idf(term, field)](#Index+idf) ⇒ <code>number</code>
    * [.coordNorm(scores, docTokens, n)](#Index+coordNorm) ⇒ <code>object</code>

<a name="new_Index_new"></a>

### new exports.Index()
Initialize an index

<a name="Index+getFields"></a>

### index.getFields() ⇒ <code>Array.&lt;string&gt;</code>
Return the fields registered in the index

**Kind**: instance method of [<code>Index</code>](#Index)  
<a name="Index+addField"></a>

### index.addField(fieldName)
Register a field in the index

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| fieldName | <code>string</code> | 

<a name="Index+setRef"></a>

### index.setRef(fieldName)
Set the field used to uniquely identify a document (default is 'id')

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| fieldName | <code>string</code> | 

<a name="Index+on"></a>

### index.on(...events, f)
Bind a handler to the specified events

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| ...events | <code>string</code> | 
| f | <code>function</code> | 

<a name="Index+off"></a>

### index.off(event, f)
Unbind a handler from an event

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| f | <code>function</code> | 

<a name="Index+saveDocument"></a>

### index.saveDocument(save) ⇒ <code>this</code>
Sets whether origin JSON documents are stored

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Description |
| --- | --- | --- |
| save | <code>boolean</code> | default true |

<a name="Index+addDoc"></a>

### index.addDoc(doc, emitEvent)
Adds a document to the index

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| doc | <code>object</code> |  |  |
| emitEvent | <code>boolean</code> | <code>true</code> | whether an event should be triggered |

<a name="Index+removeDocByRef"></a>

### index.removeDocByRef(docRef, emitEvent)
Remove a document from the index by its unique id

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| docRef | <code>string</code> \| <code>number</code> |  |  |
| emitEvent | <code>boolean</code> | <code>true</code> | whether an event should be triggered |

<a name="Index+removeDoc"></a>

### index.removeDoc(doc, emitEvent)
Remove a document from the index

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| doc | <code>object</code> |  |  |
| emitEvent | <code>boolean</code> | <code>true</code> | whether an event should be triggered |

<a name="Index+updateDoc"></a>

### index.updateDoc(doc, emitEvent)
Update a document in the index

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| doc | <code>object</code> |  |  |
| emitEvent | <code>boolean</code> | <code>true</code> | whether an event should be triggered |

<a name="Index+search"></a>

### index.search(query, userConfig) ⇒ <code>object</code>
Searches the index using the passed query.

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The query to search the index with. |
| userConfig | <code>JSON</code> | The user query config, JSON format. |

<a name="Index+fieldSearch"></a>

### index.fieldSearch(queryTokens, fieldName, config) ⇒ <code>object</code>
Search a list of tokens within a field

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| queryTokens | <code>Array.&lt;string&gt;</code> | 
| fieldName | <code>string</code> | 
| config | <code>Configuration</code> | 

<a name="Index+mergeScores"></a>

### index.mergeScores(accumScores, scores, op)
Merge the scores from one set of tokens into an accumulated score table.

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Description |
| --- | --- | --- |
| accumScores | <code>boolean</code> | should be null on first call |
| scores | <code>object</code> | new scores to merge into accumScores |
| op | <code>string</code> | merge operation (should be 'AND' or 'OR') |

<a name="Index+fieldSearchStats"></a>

### index.fieldSearchStats(docTokens, token, docs)
Record query tokens of retrieved documents

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| docTokens | <code>object</code> | 
| token | <code>string</code> | 
| docs | <code>object</code> | 

<a name="Index+idf"></a>

### index.idf(term, field) ⇒ <code>number</code>
Calculate the inverse document frequency of a term within a field

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| term | <code>string</code> | 
| field | <code>string</code> | 

<a name="Index+coordNorm"></a>

### index.coordNorm(scores, docTokens, n) ⇒ <code>object</code>
Get the normalized coordination factor

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type |
| --- | --- |
| scores | <code>object</code> | 
| docTokens | <code>oobject</code> | 
| n | <code>number</code> | 

<a name="init"></a>

## init(config) ⇒ [<code>Index</code>](#Index)
A helper method to initialize a Lunastra Index

**Kind**: global function  

| Param | Type |
| --- | --- |
| config | <code>object</code> | 
