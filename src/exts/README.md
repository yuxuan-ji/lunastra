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
<a name="Stemmer.stemmer"></a>

### Stemmer.stemmer(word) ⇒ <code>String</code>
Reduce a word to its root and return the result(implementation of the PorterStemmer taken from http://tartarus.org/~martin)

**Kind**: static method of [<code>Stemmer</code>](#Stemmer)  

| Param | Type |
| --- | --- |
| word | <code>String</code> | 

<a name="StopWordFilter"></a>

## StopWordFilter
Pipeline Extension: StopWordFilter

**Kind**: global class  

* [StopWordFilter](#StopWordFilter)
    * [.stopWordFilter(token)](#StopWordFilter.stopWordFilter) ⇒ <code>String</code>
    * [.clearStopWords()](#StopWordFilter.clearStopWords)
    * [.addStopWords(words)](#StopWordFilter.addStopWords)
    * [.resetStopWords()](#StopWordFilter.resetStopWords)

<a name="StopWordFilter.stopWordFilter"></a>

### StopWordFilter.stopWordFilter(token) ⇒ <code>String</code>
Strip out stop words from the token andreturn the result

**Kind**: static method of [<code>StopWordFilter</code>](#StopWordFilter)  

| Param | Type |
| --- | --- |
| token | <code>String</code> | 

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
| words | <code>Array.&lt;String&gt;</code> | 

<a name="StopWordFilter.resetStopWords"></a>

### StopWordFilter.resetStopWords()
Reset to use default stop words

**Kind**: static method of [<code>StopWordFilter</code>](#StopWordFilter)  
<a name="Trimmer"></a>

## Trimmer
Pipeline Extension: Trimmer

**Kind**: global class  
<a name="Trimmer.trimmer"></a>

### Trimmer.trimmer(token) ⇒ <code>String</code>
Trim non word characters from the begining and end of a Stringand return the result

**Kind**: static method of [<code>Trimmer</code>](#Trimmer)  

| Param | Type |
| --- | --- |
| token | <code>String</code> | 

