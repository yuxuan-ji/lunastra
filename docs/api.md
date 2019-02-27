## Classes

<dl>
<dt><a href="#Configuration">Configuration</a></dt>
<dd><p>A wrapper on a user search configuration.</p>
</dd>
<dt><a href="#DocumentStore">DocumentStore</a></dt>
<dd><p>A key-value document store used for storing sets of tokens for
documents stored in the index.</p>
</dd>
<dt><a href="#EventEmitter">EventEmitter</a></dt>
<dd><p>An event manager for Lunastra.</p>
</dd>
<dt><a href="#Index">Index</a></dt>
<dd><p>The public facing API for Lunastra and global Index.</p>
</dd>
<dt><a href="#InvertedIndex">InvertedIndex</a></dt>
<dd><p>The entity on which queries are executed upon.</p>
</dd>
<dt><a href="#Pipeline">Pipeline</a></dt>
<dd><p>An ordered list of functions applied to both document
tokens and query tokens.</p>
</dd>
<dt><a href="#Stemmer">Stemmer</a></dt>
<dd><p>Pipeline Extension: Stemmer</p>
</dd>
<dt><a href="#StopWordFilter">StopWordFilter</a></dt>
<dd><p>Pipeline Extension: StopWordFilter</p>
</dd>
<dt><a href="#Tokenizer">Tokenizer</a></dt>
<dd><p>A wrapper around how Lunastra tokenizes strings</p>
</dd>
<dt><a href="#Trimmer">Trimmer</a></dt>
<dd><p>Pipeline Extension: Trimmer</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#init">init(config)</a> ⇒ <code><a href="#Index">Index</a></code></dt>
<dd><p>A helper method to initialize a Lunastra Index</p>
</dd>
<dt><a href="#warn">warn(message)</a></dt>
<dd><p>Print a warning message to the console</p>
</dd>
<dt><a href="#toString">toString(obj)</a> ⇒ <code>string</code></dt>
<dd><p>Returns and empty string for null and undefined,
otherwise returns the result of the object&#39;s
&#39;.toString()&#39; method</p>
</dd>
<dt><a href="#clone">clone(obj)</a> ⇒ <code>object</code></dt>
<dd><p>Return a deep copy of the object</p>
</dd>
</dl>

<a name="Configuration"></a>

## Configuration
A wrapper on a user search configuration.

**Kind**: global class  

* [Configuration](#Configuration)
    * [new exports.Configuration(config, fields)](#new_Configuration_new)
    * [.get()](#Configuration+get) ⇒ <code>JSON</code>
    * [.reset()](#Configuration+reset)
    * [.addAllFieldsToUserConfig(bool, expand, fields)](#Configuration+addAllFieldsToUserConfig)

<a name="new_Configuration_new"></a>

### new exports.Configuration(config, fields)
Initialize a configuration


| Param | Type |
| --- | --- |
| config | <code>string</code> | 
| fields | <code>Array.&lt;string&gt;</code> | 

<a name="Configuration+get"></a>

### configuration.get() ⇒ <code>JSON</code>
Get current user config

**Kind**: instance method of [<code>Configuration</code>](#Configuration)  
<a name="Configuration+reset"></a>

### configuration.reset()
Reset user search configuration

**Kind**: instance method of [<code>Configuration</code>](#Configuration)  
<a name="Configuration+addAllFieldsToUserConfig"></a>

### configuration.addAllFieldsToUserConfig(bool, expand, fields)
Add a fields to user search configuration

**Kind**: instance method of [<code>Configuration</code>](#Configuration)  

| Param | Type | Description |
| --- | --- | --- |
| bool | <code>string</code> | Boolean model |
| expand | <code>string</code> | Expand model |
| fields | <code>Array.&lt;string&gt;</code> | fields of the index instance |

<a name="DocumentStore"></a>

## DocumentStore
A key-value document store used for storing sets of tokens fordocuments stored in the index.

**Kind**: global class  

* [DocumentStore](#DocumentStore)
    * [new exports.DocumentStore(save, deepcpy)](#new_DocumentStore_new)
    * [.hasDoc(docRef)](#DocumentStore+hasDoc) ⇒ <code>boolean</code>
    * [.getDoc(docRef)](#DocumentStore+getDoc) ⇒ <code>object</code>
    * [.addDoc(docRef, doc)](#DocumentStore+addDoc)
    * [.removeDoc(docRef)](#DocumentStore+removeDoc)
    * [.getFieldLength(docRef, fieldName)](#DocumentStore+getFieldLength) ⇒ <code>number</code>
    * [.addFieldLength(docRef, fieldName, length)](#DocumentStore+addFieldLength)
    * [.updateFieldLength(docRef, fieldName, length)](#DocumentStore+updateFieldLength)

<a name="new_DocumentStore_new"></a>

### new exports.DocumentStore(save, deepcpy)
Initialize a document store


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| save | <code>boolean</code> | <code>true</code> | whether to store original documents |
| deepcpy | <code>boolean</code> | <code>true</code> | whether to deep copy the original documents |

<a name="DocumentStore+hasDoc"></a>

### documentStore.hasDoc(docRef) ⇒ <code>boolean</code>
Check whether a given document ref is stored

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type |
| --- | --- |
| docRef | <code>string</code> \| <code>number</code> | 

<a name="DocumentStore+getDoc"></a>

### documentStore.getDoc(docRef) ⇒ <code>object</code>
Get a document by its ref

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type |
| --- | --- |
| docRef | <code>string</code> \| <code>number</code> | 

<a name="DocumentStore+addDoc"></a>

### documentStore.addDoc(docRef, doc)
Store a document or update it if it already exists

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type |
| --- | --- |
| docRef | <code>string</code> \| <code>number</code> | 
| doc | <code>object</code> | 

<a name="DocumentStore+removeDoc"></a>

### documentStore.removeDoc(docRef)
Remove a document from the store by its ref

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type |
| --- | --- |
| docRef | <code>string</code> \| <code>number</code> | 

<a name="DocumentStore+getFieldLength"></a>

### documentStore.getFieldLength(docRef, fieldName) ⇒ <code>number</code>
Get the field length of a document by its ref

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  
**Returns**: <code>number</code> - field length  

| Param | Type | Description |
| --- | --- | --- |
| docRef | <code>number</code> \| <code>string</code> | document id or reference |
| fieldName | <code>string</code> | field name |

<a name="DocumentStore+addFieldLength"></a>

### documentStore.addFieldLength(docRef, fieldName, length)
Add field length of a document's field tokens from pipeline results.The field length of a document is used to do field length normalizationeven without the original JSON document stored.

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type | Description |
| --- | --- | --- |
| docRef | <code>number</code> \| <code>string</code> | document's id or reference |
| fieldName | <code>string</code> | field name |
| length | <code>number</code> | field length |

<a name="DocumentStore+updateFieldLength"></a>

### documentStore.updateFieldLength(docRef, fieldName, length)
Update field length of a document's field tokens from pipeline results.The field length of a document is used to do field length normalizationeven without the original JSON document stored.

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type | Description |
| --- | --- | --- |
| docRef | <code>number</code> \| <code>string</code> | document's id or reference |
| fieldName | <code>string</code> | field name |
| length | <code>number</code> | field length |

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

<a name="Index"></a>

## Index
The public facing API for Lunastra and global Index.

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
Set the field used to unique indentify a document (default is 'id')

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

| Param | Type | Description |
| --- | --- | --- |
| doc | <code>object</code> |  |
| emitEvent | <code>boolean</code> | whether an event should be triggered |

<a name="Index+removeDocByRef"></a>

### index.removeDocByRef(docRef, emitEvent)
Remove a document from the index by its unique id

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Description |
| --- | --- | --- |
| docRef | <code>string</code> \| <code>number</code> |  |
| emitEvent | <code>boolean</code> | whether an event should be triggered |

<a name="Index+removeDoc"></a>

### index.removeDoc(doc, emitEvent)
Remove a document from the index

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Description |
| --- | --- | --- |
| doc | <code>object</code> |  |
| emitEvent | <code>boolean</code> | whether an event should be triggered |

<a name="Index+updateDoc"></a>

### index.updateDoc(doc, emitEvent)
Update a document in the index

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Description |
| --- | --- | --- |
| doc | <code>object</code> |  |
| emitEvent | <code>boolean</code> | whether an event should be triggered |

<a name="Index+search"></a>

### index.search(query, userConfig) ⇒ <code>object</code>
Searches the index using the passed query.Queries should be a string, multiple words are allowed.If config is null, will search all fields defaultly, and lead to OR based query.If config is specified, will search specified with query time boosting.All query tokens are passed through the same pipeline that document tokensare passed through, so any language processing involved will be run on everyquery term.Each query term is expanded, so that the term 'he' might be expanded to'hello' and 'help' if those terms were already included in the index.Matching documents are returned as an array of objects, each object containsthe matching document ref, as set for this index, and the similarity scorefor this document against the query.

**Kind**: instance method of [<code>Index</code>](#Index)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The query to search the index with. |
| userConfig | <code>JSON</code> | The user query config, JSON format. |

<a name="InvertedIndex"></a>

## InvertedIndex
The entity on which queries are executed upon.

**Kind**: global class  

* [InvertedIndex](#InvertedIndex)
    * [new exports.InvertedIndex()](#new_InvertedIndex_new)
    * [.addToken(token, tokenInfo, root)](#InvertedIndex+addToken)
    * [.hasToken(token)](#InvertedIndex+hasToken) ⇒ <code>boolean</code>
    * [.getNode(token)](#InvertedIndex+getNode) ⇒ <code>object</code>
    * [.getDocs(token)](#InvertedIndex+getDocs) ⇒ <code>object</code>
    * [.getTermFrequency(token, docRef)](#InvertedIndex+getTermFrequency) ⇒ <code>number</code>
    * [.getDocFreq(token)](#InvertedIndex+getDocFreq) ⇒ <code>object</code>
    * [.removeToken(token, ref)](#InvertedIndex+removeToken)
    * [.expandToken(token)](#InvertedIndex+expandToken) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_InvertedIndex_new"></a>

### new exports.InvertedIndex()
Initialize an inverted index

<a name="InvertedIndex+addToken"></a>

### invertedIndex.addToken(token, tokenInfo, root)
Adds a {token: tokenInfo} pair to the inverted index.If the token already exist, then update the tokenInfo.tokenInfo format: { ref: 1, tf: 2}tokenInfo should contains the document's ref and the tf(token frequency) of that token inthe document.By default this function starts at the root of the current inverted index, howeverit can start at any node of the inverted index if required.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> |  |
| tokenInfo | <code>object</code> | format: { ref: 1, tf: 2} |
| root | <code>object</code> | An optional node at which to start looking for the correct place to enter the doc, by default the root of this InvertedIndex is used. |

<a name="InvertedIndex+hasToken"></a>

### invertedIndex.hasToken(token) ⇒ <code>boolean</code>
Check whether the token is stored in this inverted index

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type |
| --- | --- |
| token | <code>string</code> | 

<a name="InvertedIndex+getNode"></a>

### invertedIndex.getNode(token) ⇒ <code>object</code>
Get a node from the inverted index for a given token.If token not found in this InvertedIndex, return null.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The token to get the node for. |

<a name="InvertedIndex+getDocs"></a>

### invertedIndex.getDocs(token) ⇒ <code>object</code>
Get the documents of a given token.If token not found, return {}.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The token to get the documents for. |

<a name="InvertedIndex+getTermFrequency"></a>

### invertedIndex.getTermFrequency(token, docRef) ⇒ <code>number</code>
Get term frequency of given token in given document unique id.If token or document id not found, return 0.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | the token to get the documents for |
| docRef | <code>string</code> \| <code>number</code> | the unique id of the document |

<a name="InvertedIndex+getDocFreq"></a>

### invertedIndex.getDocFreq(token) ⇒ <code>object</code>
Get the document frequency of given token.If token not found, return 0.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | the token to get the documents for |

<a name="InvertedIndex+removeToken"></a>

### invertedIndex.removeToken(token, ref)
Remove the document identified by document's ref from the token in the inverted index.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | remove the document from token |
| ref | <code>string</code> | the ref of the document to remove from given token |

<a name="InvertedIndex+expandToken"></a>

### invertedIndex.expandToken(token) ⇒ <code>Array.&lt;string&gt;</code>
Find all the possible suffixes of given token using tokens currently in the inverted index.If token not found, return empty Array.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | the token to expand |

<a name="Pipeline"></a>

## Pipeline
An ordered list of functions applied to both documenttokens and query tokens.

**Kind**: global class  

* [Pipeline](#Pipeline)
    * [new exports.Pipeline()](#new_Pipeline_new)
    * [.get()](#Pipeline+get) ⇒ <code>Array.&lt;function()&gt;</code>
    * [.add(...fs)](#Pipeline+add)
    * [.after(existingFct, newFct)](#Pipeline+after)
    * [.before(existingFct, newFct)](#Pipeline+before)
    * [.remove(f)](#Pipeline+remove)
    * [.pop()](#Pipeline+pop) ⇒ <code>function</code>
    * [.clear()](#Pipeline+clear)
    * [.run(tokens)](#Pipeline+run) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_Pipeline_new"></a>

### new exports.Pipeline()
Initialize a pipeline

<a name="Pipeline+get"></a>

### pipeline.get() ⇒ <code>Array.&lt;function()&gt;</code>
Return the stored list of functions

**Kind**: instance method of [<code>Pipeline</code>](#Pipeline)  
<a name="Pipeline+add"></a>

### pipeline.add(...fs)
Push functions to the end of the pipeline

**Kind**: instance method of [<code>Pipeline</code>](#Pipeline)  

| Param | Type |
| --- | --- |
| ...fs | <code>function</code> | 

<a name="Pipeline+after"></a>

### pipeline.after(existingFct, newFct)
Insert a function after a function present in the pipeline

**Kind**: instance method of [<code>Pipeline</code>](#Pipeline)  

| Param | Type |
| --- | --- |
| existingFct | <code>function</code> | 
| newFct | <code>function</code> | 

<a name="Pipeline+before"></a>

### pipeline.before(existingFct, newFct)
Insert a function before a function present in the pipeline

**Kind**: instance method of [<code>Pipeline</code>](#Pipeline)  

| Param | Type |
| --- | --- |
| existingFct | <code>function</code> | 
| newFct | <code>function</code> | 

<a name="Pipeline+remove"></a>

### pipeline.remove(f)
Remove a function from the pipeline

**Kind**: instance method of [<code>Pipeline</code>](#Pipeline)  

| Param | Type |
| --- | --- |
| f | <code>function</code> | 

<a name="Pipeline+pop"></a>

### pipeline.pop() ⇒ <code>function</code>
Remove and return the last function in the pipeline

**Kind**: instance method of [<code>Pipeline</code>](#Pipeline)  
<a name="Pipeline+clear"></a>

### pipeline.clear()
Empty the pipeline

**Kind**: instance method of [<code>Pipeline</code>](#Pipeline)  
<a name="Pipeline+run"></a>

### pipeline.run(tokens) ⇒ <code>Array.&lt;string&gt;</code>
Run each function stored in the pipeline on the input tokensin FIFO order and returns the result

**Kind**: instance method of [<code>Pipeline</code>](#Pipeline)  

| Param | Type |
| --- | --- |
| tokens | <code>Array.&lt;string&gt;</code> | 

<a name="Stemmer"></a>

## Stemmer
Pipeline Extension: Stemmer

**Kind**: global class  
<a name="Stemmer.stem"></a>

### Stemmer.stem(word) ⇒ <code>string</code>
Reduce a word to its root and return the result(implementation of the PorterStemmer taken from http://tartarus.org/~martin)

**Kind**: static method of [<code>Stemmer</code>](#Stemmer)  

| Param | Type |
| --- | --- |
| word | <code>string</code> | 

<a name="StopWordFilter"></a>

## StopWordFilter
Pipeline Extension: StopWordFilter

**Kind**: global class  

* [StopWordFilter](#StopWordFilter)
    * [.filter(token)](#StopWordFilter.filter) ⇒ <code>string</code>
    * [.clearStopWords()](#StopWordFilter.clearStopWords)
    * [.addStopWords(words)](#StopWordFilter.addStopWords)
    * [.resetStopWords()](#StopWordFilter.resetStopWords)

<a name="StopWordFilter.filter"></a>

### StopWordFilter.filter(token) ⇒ <code>string</code>
Strip out stop words from the token andreturn the result

**Kind**: static method of [<code>StopWordFilter</code>](#StopWordFilter)  

| Param | Type |
| --- | --- |
| token | <code>string</code> | 

<a name="StopWordFilter.clearStopWords"></a>

### StopWordFilter.clearStopWords()
Clears the inner list of stop words

**Kind**: static method of [<code>StopWordFilter</code>](#StopWordFilter)  
<a name="StopWordFilter.addStopWords"></a>

### StopWordFilter.addStopWords(words)
Register a list of stop words

**Kind**: static method of [<code>StopWordFilter</code>](#StopWordFilter)  

| Param | Type |
| --- | --- |
| words | <code>Array.&lt;string&gt;</code> | 

<a name="StopWordFilter.resetStopWords"></a>

### StopWordFilter.resetStopWords()
Reset to use default stop words

**Kind**: static method of [<code>StopWordFilter</code>](#StopWordFilter)  
<a name="Tokenizer"></a>

## Tokenizer
A wrapper around how Lunastra tokenizes strings

**Kind**: global class  

* [Tokenizer](#Tokenizer)
    * [.tokenize(str)](#Tokenizer.tokenize) ⇒ <code>Array.&lt;string&gt;</code>
    * [.getSeparator()](#Tokenizer.getSeparator) ⇒ <code>string</code> \| <code>regexp</code>
    * [.setSeparator(sep)](#Tokenizer.setSeparator)
    * [.resetSeparator()](#Tokenizer.resetSeparator)

<a name="Tokenizer.tokenize"></a>

### Tokenizer.tokenize(str) ⇒ <code>Array.&lt;string&gt;</code>
Split a string into a list of tokens

**Kind**: static method of [<code>Tokenizer</code>](#Tokenizer)  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

<a name="Tokenizer.getSeparator"></a>

### Tokenizer.getSeparator() ⇒ <code>string</code> \| <code>regexp</code>
Get the seperator

**Kind**: static method of [<code>Tokenizer</code>](#Tokenizer)  
<a name="Tokenizer.setSeparator"></a>

### Tokenizer.setSeparator(sep)
Set the seperator

**Kind**: static method of [<code>Tokenizer</code>](#Tokenizer)  

| Param | Type |
| --- | --- |
| sep | <code>string</code> \| <code>regexp</code> | 

<a name="Tokenizer.resetSeparator"></a>

### Tokenizer.resetSeparator()
Reset to the default seperator

**Kind**: static method of [<code>Tokenizer</code>](#Tokenizer)  
<a name="Trimmer"></a>

## Trimmer
Pipeline Extension: Trimmer

**Kind**: global class  
<a name="Trimmer.trim"></a>

### Trimmer.trim(token) ⇒ <code>string</code>
Trim non word characters from the begining and end of a stringand return the result

**Kind**: static method of [<code>Trimmer</code>](#Trimmer)  

| Param | Type |
| --- | --- |
| token | <code>string</code> | 

<a name="init"></a>

## init(config) ⇒ [<code>Index</code>](#Index)
A helper method to initialize a Lunastra Index

**Kind**: global function  

| Param | Type |
| --- | --- |
| config | <code>object</code> | 

<a name="warn"></a>

## warn(message)
Print a warning message to the console

**Kind**: global function  

| Param | Type |
| --- | --- |
| message | <code>string</code> | 

<a name="toString"></a>

## toString(obj) ⇒ <code>string</code>
Returns and empty string for null and undefined,otherwise returns the result of the object's'.toString()' method

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>object</code> | 

<a name="clone"></a>

## clone(obj) ⇒ <code>object</code>
Return a deep copy of the object

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>object</code> | 

