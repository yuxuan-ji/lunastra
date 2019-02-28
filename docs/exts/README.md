## Classes

<dl>
<dt><a href="#Stemmer">Stemmer</a></dt>
<dd><p>Pipeline Extension: Stemmer</p>
</dd>
<dt><a href="#StopWordFilter">StopWordFilter</a></dt>
<dd><p>Pipeline Extension: StopWordFilter</p>
</dd>
<dt><a href="#Trimmer">Trimmer</a></dt>
<dd><p>Pipeline Extension: Trimmer</p>
</dd>
</dl>

<a name="Stemmer"></a>

## Stemmer
Pipeline Extension: Stemmer

**Kind**: global class  
<a name="Stemmer.run"></a>

### Stemmer.run(word) ⇒ <code>string</code>
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
    * [.run(token)](#StopWordFilter.run) ⇒ <code>string</code>
    * [.clearStopWords()](#StopWordFilter.clearStopWords)
    * [.addStopWords(words)](#StopWordFilter.addStopWords)
    * [.resetStopWords()](#StopWordFilter.resetStopWords)

<a name="StopWordFilter.run"></a>

### StopWordFilter.run(token) ⇒ <code>string</code>
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
<a name="Trimmer"></a>

## Trimmer
Pipeline Extension: Trimmer

**Kind**: global class  
<a name="Trimmer.run"></a>

### Trimmer.run(token) ⇒ <code>string</code>
Trim non word characters from the begining and end of a stringand return the result

**Kind**: static method of [<code>Trimmer</code>](#Trimmer)  

| Param | Type |
| --- | --- |
| token | <code>string</code> | 

