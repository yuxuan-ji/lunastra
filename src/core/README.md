## Classes

<dl>
<dt><a href="#Configuration">Configuration</a></dt>
<dd><p>A wrapper on a user search configuration.</p>
</dd>
<dt><a href="#DocumentProcessingManager">DocumentProcessingManager</a></dt>
<dd><p>The Document Processing Manager is a large pipeline
any document goes through before being stored in
the Document Store</p>
</dd>
<dt><a href="#DocumentStore">DocumentStore</a></dt>
<dd><p>A key-value document store used for storing sets of tokens for
documents stored in the index.</p>
</dd>
<dt><a href="#InvertedIndex">InvertedIndex</a></dt>
<dd><p>The entity on which queries are executed upon.</p>
</dd>
<dt><a href="#Pipeline">Pipeline</a></dt>
<dd><p>An ordered list of functions applied to both document
tokens and query tokens.</p>
</dd>
<dt><a href="#QueryParser">QueryParser</a></dt>
<dd><p>Utility class to convert a user query into a model understandable
by the Lunastra Index</p>
</dd>
<dt><a href="#Tokenizer">Tokenizer</a></dt>
<dd><p>A wrapper around how Lunastra tokenizes strings</p>
</dd>
</dl>

<a name="Configuration"></a>

## Configuration
A wrapper on a user search configuration.

**Kind**: global class  

* [Configuration](#Configuration)
    * [new exports.Configuration(config, fields)](#new_Configuration_new)
    * [.get()](#Configuration+get) ⇒ <code>Object</code>
    * [.reset()](#Configuration+reset)
    * [.addAllFieldsToUserConfig(bool, expand, fields)](#Configuration+addAllFieldsToUserConfig)

<a name="new_Configuration_new"></a>

### new exports.Configuration(config, fields)
Initialize a configuration


| Param | Type |
| --- | --- |
| config | <code>String</code> | 
| fields | <code>Array.&lt;String&gt;</code> | 

<a name="Configuration+get"></a>

### configuration.get() ⇒ <code>Object</code>
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
| bool | <code>String</code> | Boolean model |
| expand | <code>String</code> | Expand model |
| fields | <code>Array.&lt;String&gt;</code> | fields of the index instance |

<a name="DocumentProcessingManager"></a>

## DocumentProcessingManager
The Document Processing Manager is a large pipelineany document goes through before being stored inthe Document Store

**Kind**: global class  
<a name="new_DocumentProcessingManager_new"></a>

### new exports.DocumentProcessingManager()
Initialize a DPM

<a name="DocumentStore"></a>

## DocumentStore
A key-value document store used for storing sets of tokens fordocuments stored in the index.

**Kind**: global class  

* [DocumentStore](#DocumentStore)
    * [new exports.DocumentStore(save, deepcpy)](#new_DocumentStore_new)
    * [.hasDoc(id)](#DocumentStore+hasDoc) ⇒ <code>Boolean</code>
    * [.getDoc(id)](#DocumentStore+getDoc) ⇒ <code>Object</code>
    * [.addDoc(id, doc)](#DocumentStore+addDoc)
    * [.removeDoc(id)](#DocumentStore+removeDoc)
    * [.getFieldLength(id, fieldName)](#DocumentStore+getFieldLength) ⇒ <code>Number</code>
    * [.addFieldLength(id, fieldName, length)](#DocumentStore+addFieldLength)
    * [.updateFieldLength(id, fieldName, length)](#DocumentStore+updateFieldLength)

<a name="new_DocumentStore_new"></a>

### new exports.DocumentStore(save, deepcpy)
Initialize a document store


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| save | <code>Boolean</code> | <code>true</code> | whether to store original documents |
| deepcpy | <code>Boolean</code> | <code>true</code> | whether to deep copy the original documents |

<a name="DocumentStore+hasDoc"></a>

### documentStore.hasDoc(id) ⇒ <code>Boolean</code>
Check whether a given document id is stored

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type |
| --- | --- |
| id | <code>String</code> \| <code>Number</code> | 

<a name="DocumentStore+getDoc"></a>

### documentStore.getDoc(id) ⇒ <code>Object</code>
Get a document by its id

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type |
| --- | --- |
| id | <code>String</code> \| <code>Number</code> | 

<a name="DocumentStore+addDoc"></a>

### documentStore.addDoc(id, doc)
Store a document or update it if it already exists

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type |
| --- | --- |
| id | <code>String</code> \| <code>Number</code> | 
| doc | <code>Object</code> | 

<a name="DocumentStore+removeDoc"></a>

### documentStore.removeDoc(id)
Remove a document from the store by its id

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type |
| --- | --- |
| id | <code>String</code> \| <code>Number</code> | 

<a name="DocumentStore+getFieldLength"></a>

### documentStore.getFieldLength(id, fieldName) ⇒ <code>Number</code>
Get the field length of a document by its id

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  
**Returns**: <code>Number</code> - field length  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> \| <code>String</code> |  |
| fieldName | <code>String</code> | field name |

<a name="DocumentStore+addFieldLength"></a>

### documentStore.addFieldLength(id, fieldName, length)
Add field length of a document's field tokens from pipeline results.The field length of a document is used to do field length normalizationeven without the original JSON document stored.

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> \| <code>String</code> |  |
| fieldName | <code>String</code> | field name |
| length | <code>Number</code> | field length |

<a name="DocumentStore+updateFieldLength"></a>

### documentStore.updateFieldLength(id, fieldName, length)
Update field length of a document's field tokens from pipeline results.The field length of a document is used to do field length normalizationeven without the original JSON document stored.

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> \| <code>String</code> |  |
| fieldName | <code>String</code> | field name |
| length | <code>Number</code> | field length |

<a name="InvertedIndex"></a>

## InvertedIndex
The entity on which queries are executed upon.

**Kind**: global class  

* [InvertedIndex](#InvertedIndex)
    * [new exports.InvertedIndex()](#new_InvertedIndex_new)
    * [.addToken(token, tokenInfo, root)](#InvertedIndex+addToken)
    * [.hasToken(token)](#InvertedIndex+hasToken) ⇒ <code>Boolean</code>
    * [.getNode(token)](#InvertedIndex+getNode) ⇒ <code>Object</code>
    * [.getDocs(token)](#InvertedIndex+getDocs) ⇒ <code>Object</code>
    * [.getTermFrequency(token, id)](#InvertedIndex+getTermFrequency) ⇒ <code>number</code>
    * [.getDocFreq(token)](#InvertedIndex+getDocFreq) ⇒ <code>Object</code>
    * [.removeToken(token, id)](#InvertedIndex+removeToken)
    * [.expandToken(token)](#InvertedIndex+expandToken) ⇒ <code>Array.&lt;String&gt;</code>

<a name="new_InvertedIndex_new"></a>

### new exports.InvertedIndex()
Initialize an inverted index

<a name="InvertedIndex+addToken"></a>

### invertedIndex.addToken(token, tokenInfo, root)
Adds a {token: tokenInfo} pair to the inverted index.If the token already exist, then update the tokenInfo.tokenInfo format: { id: 1, tf: 2}tokenInfo should contains the document's id and the tf(token frequency) of that token inthe document.By default this function starts at the root of the current inverted index, howeverit can start at any node of the inverted index if required.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> |  |
| tokenInfo | <code>Object</code> | format: { id: 1, tf: 2} |
| root | <code>Object</code> | An optional node at which to start looking for the correct place to enter the doc, by default the root of this InvertedIndex is used. |

<a name="InvertedIndex+hasToken"></a>

### invertedIndex.hasToken(token) ⇒ <code>Boolean</code>
Check whether the token is stored in this inverted index

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type |
| --- | --- |
| token | <code>String</code> | 

<a name="InvertedIndex+getNode"></a>

### invertedIndex.getNode(token) ⇒ <code>Object</code>
Get a node from the inverted index for a given token.If token not found in this InvertedIndex, return null.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | The token to get the node for. |

<a name="InvertedIndex+getDocs"></a>

### invertedIndex.getDocs(token) ⇒ <code>Object</code>
Get the documents of a given token.If token not found, return {}.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | The token to get the documents for. |

<a name="InvertedIndex+getTermFrequency"></a>

### invertedIndex.getTermFrequency(token, id) ⇒ <code>number</code>
Get term frequency of given token in given document unique id.If token or document id not found, return 0.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | the token to get the documents for |
| id | <code>String</code> \| <code>number</code> | the unique id of the document |

<a name="InvertedIndex+getDocFreq"></a>

### invertedIndex.getDocFreq(token) ⇒ <code>Object</code>
Get the document frequency of given token.If token not found, return 0.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | the token to get the documents for |

<a name="InvertedIndex+removeToken"></a>

### invertedIndex.removeToken(token, id)
Remove the document identified by document's id from the token in the inverted index.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | remove the document from token |
| id | <code>String</code> | the id of the document to remove from given token |

<a name="InvertedIndex+expandToken"></a>

### invertedIndex.expandToken(token) ⇒ <code>Array.&lt;String&gt;</code>
Find all the possible suffixes of given token using tokens currently in the inverted index.If token not found, return empty Array.

**Kind**: instance method of [<code>InvertedIndex</code>](#InvertedIndex)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | the token to expand |

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
    * [.run(input)](#Pipeline+run) ⇒ <code>Array.&lt;Any&gt;</code>

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

### pipeline.run(input) ⇒ <code>Array.&lt;Any&gt;</code>
Run each function stored in the pipeline on some inputin FIFO order and returns the result in a list

**Kind**: instance method of [<code>Pipeline</code>](#Pipeline)  

| Param | Type |
| --- | --- |
| input | <code>Any</code> \| <code>Array.&lt;Any&gt;</code> | 

<a name="QueryParser"></a>

## QueryParser
Utility class to convert a user query into a model understandableby the Lunastra Index

**Kind**: global class  
<a name="QueryParser.build"></a>

### QueryParser.build(query) ⇒ <code>Object</code>
Build the query into a model understandable by the Lunastra Index

**Kind**: static method of [<code>QueryParser</code>](#QueryParser)  
**Returns**: <code>Object</code> - model  

| Param | Type |
| --- | --- |
| query | <code>String</code> | 

<a name="Tokenizer"></a>

## Tokenizer
A wrapper around how Lunastra tokenizes strings

**Kind**: global class  

* [Tokenizer](#Tokenizer)
    * [.tokenize(str)](#Tokenizer.tokenize) ⇒ <code>Array.&lt;String&gt;</code>
    * [.getSeparator()](#Tokenizer.getSeparator) ⇒ <code>String</code> \| <code>RegExp</code>
    * [.setSeparator(sep)](#Tokenizer.setSeparator)
    * [.resetSeparator()](#Tokenizer.resetSeparator)

<a name="Tokenizer.tokenize"></a>

### Tokenizer.tokenize(str) ⇒ <code>Array.&lt;String&gt;</code>
Split a String into a list of tokens

**Kind**: static method of [<code>Tokenizer</code>](#Tokenizer)  

| Param | Type |
| --- | --- |
| str | <code>String</code> | 

<a name="Tokenizer.getSeparator"></a>

### Tokenizer.getSeparator() ⇒ <code>String</code> \| <code>RegExp</code>
Get the seperator

**Kind**: static method of [<code>Tokenizer</code>](#Tokenizer)  
<a name="Tokenizer.setSeparator"></a>

### Tokenizer.setSeparator(sep)
Set the seperator

**Kind**: static method of [<code>Tokenizer</code>](#Tokenizer)  

| Param | Type |
| --- | --- |
| sep | <code>String</code> \| <code>RegExp</code> | 

<a name="Tokenizer.resetSeparator"></a>

### Tokenizer.resetSeparator()
Reset to the default seperator

**Kind**: static method of [<code>Tokenizer</code>](#Tokenizer)  
