(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lunastra", [], factory);
	else if(typeof exports === 'object')
		exports["lunastra"] = factory();
	else
		root["lunastra"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lunastra.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/configuration.js":
/*!******************************!*\
  !*** ./src/configuration.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configuration = void 0;

var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A wrapper on a user search configuration.
 */
var Configuration =
/*#__PURE__*/
function () {
  /**
   * Initialize a configuration
   * @param  {string} config
   * @param  {string[]} fields
   */
  function Configuration(config, fields) {
    _classCallCheck(this, Configuration);

    config = config || '';

    if (fields === undefined || fields == null) {
      throw new Error('fields should not be null');
    }

    this.config = {};
    var userConfig;

    if (config.length === 0) {
      this.buildDefaultConfig(fields);
    } else {
      try {
        userConfig = JSON.parse(config);
        this.buildUserConfig(userConfig, fields);
      } catch (error) {
        (0, _utils.warn)('user configuration parse failed, will use default configuration');
        this.buildDefaultConfig(fields);
      }
    }
  }
  /**
   * Get current user config
   * @return {JSON}
   */


  _createClass(Configuration, [{
    key: "get",
    value: function get() {
      return this.config;
    }
    /**
     * Reset user search configuration
     */

  }, {
    key: "reset",
    value: function reset() {
      this.config = {};
    }
    /**
     * Build default search configuration
     * @private
     * @param  {string[]} fields
     */

  }, {
    key: "buildDefaultConfig",
    value: function buildDefaultConfig(fields) {
      this.reset();
      fields.forEach(function (field) {
        this.config[field] = {
          boost: 1,
          bool: "OR",
          expand: false
        };
      }, this);
    }
    /**
     * Build user search configuration
     * @private
     * @param  {JSON} config
     * @param  {string[]} fields
     */

  }, {
    key: "buildUserConfig",
    value: function buildUserConfig(config, fields) {
      var globalBool = "OR";
      var globalExpand = false;
      this.reset();

      if ('bool' in config) {
        globalBool = config['bool'] || globalBool;
      }

      if ('expand' in config) {
        globalExpand = config['expand'] || globalExpand;
      }

      if ('fields' in config) {
        for (var field in config['fields']) {
          if (fields.indexOf(field) > -1) {
            var fieldConfig = config['fields'][field];
            var fieldExpand = globalExpand;

            if (fieldConfig.expand != null) {
              fieldExpand = fieldConfig.expand;
            }

            this.config[field] = {
              boost: fieldConfig.boost || fieldConfig.boost === 0 ? fieldConfig.boost : 1,
              bool: fieldConfig.bool || globalBool,
              expand: fieldExpand
            };
          } else {
            (0, _utils.warn)('field name in user configuration not found in index instance fields');
          }
        }
      } else {
        this.addAllFieldsToUserConfig(globalBool, globalExpand, fields);
      }
    }
    /**
     * Add a fields to user search configuration
     * @param {string} bool   Boolean model
     * @param {string} expand Expand model
     * @param {string[]} fields fields of the index instance
     */

  }, {
    key: "addAllFieldsToUserConfig",
    value: function addAllFieldsToUserConfig(bool, expand, fields) {
      fields.forEach(function (field) {
        this.config[field] = {
          boost: 1,
          bool: bool,
          expand: expand
        };
      }, this);
    }
  }]);

  return Configuration;
}();

exports.Configuration = Configuration;

/***/ }),

/***/ "./src/document_store.js":
/*!*******************************!*\
  !*** ./src/document_store.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentStore = void 0;

var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A key-value document store used for storing sets of tokens for
 * documents stored in the index.
 */
var DocumentStore =
/*#__PURE__*/
function () {
  /**
   * Initialize a document store
   * @param  {boolean} save    whether to store original documents
   * @param  {boolean} deepcpy whether to deep copy the original documents
   */
  function DocumentStore() {
    var save = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var deepcpy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, DocumentStore);

    this._save = save !== false;
    this._deepcpy = deepcpy !== false;
    this.docs = {};
    this.docInfo = {};
    this.length = 0;
  }

  _createClass(DocumentStore, [{
    key: "isDocStored",
    value: function isDocStored() {
      return this._save;
    }
    /**
     * Check whether a given document ref is stored
     * @param  {string|number}  docRef
     * @return {boolean}
     */

  }, {
    key: "hasDoc",
    value: function hasDoc(docRef) {
      return docRef in this.docs;
    }
    /**
     * Get a document by its ref
     * @param  {string|number} docRef
     * @return {object}
     */

  }, {
    key: "getDoc",
    value: function getDoc(docRef) {
      if (this.hasDoc(docRef) === false) return null;
      return this.docs[docRef];
    }
    /**
     * Store a document or update it if it already exists
     * @param {string|number} docRef
     * @param {object} doc
     */

  }, {
    key: "addDoc",
    value: function addDoc(docRef, doc) {
      if (!this.hasDoc(docRef)) this.length++;
      this.docs[docRef] = this._save ? this.deepcpy ? (0, _utils.clone)(doc) : doc : null;
    }
    /**
     * Remove a document from the store by its ref
     * @param  {string|number} docRef
     */

  }, {
    key: "removeDoc",
    value: function removeDoc(docRef) {
      if (!this.hasDoc(docRef)) return;
      delete this.docs[docRef];
      delete this.docInfo[docRef];
      this.length--;
    }
    /**
     * Get the field length of a document by its ref
     *
     * @param {number|string} docRef document id or reference
     * @param {string} fieldName field name
     * @return {number} field length
     */

  }, {
    key: "getFieldLength",
    value: function getFieldLength(docRef, fieldName) {
      if (docRef === null || docRef === undefined) return 0;
      if (!(docRef in this.docs)) return 0;
      if (!(fieldName in this.docInfo[docRef])) return 0;
      return this.docInfo[docRef][fieldName];
    }
  }, {
    key: "addFieldLength",

    /**
     * Add field length of a document's field tokens from pipeline results.
     * The field length of a document is used to do field length normalization
     * even without the original JSON document stored.
     * @param {number|string} docRef document's id or reference
     * @param {string} fieldName field name
     * @param {number} length field length
     */
    value: function addFieldLength(docRef, fieldName, length) {
      if (docRef === null || docRef === undefined) return;
      if (!this.hasDoc(docRef)) return;
      if (!this.docInfo[docRef]) this.docInfo[docRef] = {};
      this.docInfo[docRef][fieldName] = length;
    }
    /**
     * Update field length of a document's field tokens from pipeline results.
     * The field length of a document is used to do field length normalization
     * even without the original JSON document stored.
     * @param {number|string} docRef document's id or reference
     * @param {string} fieldName field name
     * @param {number} length field length
     */

  }, {
    key: "updateFieldLength",
    value: function updateFieldLength(docRef, fieldName, length) {
      if (docRef === null || docRef === undefined) return;
      if (!this.hasDoc(docRef)) return;
      this.addFieldLength(docRef, fieldName, length);
    }
  }, {
    key: "deepcpy",
    get: function get() {
      return this._deepcpy;
    }
  }]);

  return DocumentStore;
}();

exports.DocumentStore = DocumentStore;

/***/ }),

/***/ "./src/event_emitter.js":
/*!******************************!*\
  !*** ./src/event_emitter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventEmitter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * An event manager for Lunastra.
 */
var EventEmitter =
/*#__PURE__*/
function () {
  /**
   * Initialize an event emitter
   */
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }
  /**
   * Check whether an event is registered
   * @private
   * @param {string} event
   * @return {boolean}
   */


  _createClass(EventEmitter, [{
    key: "hasHandler",
    value: function hasHandler(event) {
      return event in this.events;
    }
  }, {
    key: "addListener",

    /**
     * Bind a handler function to a specific event(s).
     *
     * Can bind a single function to many different events in one call.
     *
     * @param {string} events the name(s) of events to bind this function to
     * @param {function} f the function to call when an event is fired
     */
    value: function addListener() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var f = args.pop();
      var events = args;
      if (typeof f !== "function") throw new TypeError("Last argument must be a function");
      events.forEach(function (event) {
        if (!this.hasHandler(event)) this.events[event] = [];
        this.events[event].push(f);
      }, this);
    }
    /**
     * Unbind a handler from an event
     * @param  {string} event
     * @param  {function} f
     */

  }, {
    key: "removeListener",
    value: function removeListener(event, f) {
      if (!this.hasHandler(event)) return;
      var fIndex = this.events[event].indexOf(f);
      if (fIndex === -1) return;
      this.events[event].splice(fIndex, 1);
      if (this.events[event].length === 0) delete this.events[event];
    }
    /**
     * Emit an event
     * @param  {string} event the event to emit
     * @param {...any} args additional data that the event should expose
     */

  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (!this.hasHandler(event)) return;
      this.events[event].forEach(function (f) {
        f.apply(undefined, args);
      }, this);
    }
  }]);

  return EventEmitter;
}();

exports.EventEmitter = EventEmitter;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Index = void 0;

var _pipeline = __webpack_require__(/*! ./pipeline.js */ "./src/pipeline.js");

var _document_store = __webpack_require__(/*! ./document_store.js */ "./src/document_store.js");

var _event_emitter = __webpack_require__(/*! ./event_emitter.js */ "./src/event_emitter.js");

var _inverted_index = __webpack_require__(/*! ./inverted_index.js */ "./src/inverted_index.js");

var _configuration = __webpack_require__(/*! ./configuration.js */ "./src/configuration.js");

var _tokenizer = __webpack_require__(/*! ./tokenizer.js */ "./src/tokenizer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The public facing API for Lunastra and global Index.
 */
var Index =
/*#__PURE__*/
function () {
  /**
   * Initialize an index
   */
  function Index() {
    _classCallCheck(this, Index);

    this._fields = [];
    this._ref = 'id';
    this._idfCache = {};
    this.index = {};
    this.pipeline = new _pipeline.Pipeline();
    this.documentStore = new _document_store.DocumentStore();
    this.eventEmitter = new _event_emitter.EventEmitter();
    this.on('add', 'remove', 'update', function () {
      this._idfCache = {};
    }.bind(this));
  }
  /**
   * Return the fields registered in the index
   * @return {string[]}
   */


  _createClass(Index, [{
    key: "getFields",
    value: function getFields() {
      return this._fields.slice();
    }
    /**
     * Register a field in the index
     * @param {string} fieldName
     */

  }, {
    key: "addField",
    value: function addField(fieldName) {
      this._fields.push(fieldName);

      this.index[fieldName] = new _inverted_index.InvertedIndex();
      return this;
    }
    /**
     * Set the field used to unique indentify a document (default is 'id')
     * @param {string} fieldName
     */

  }, {
    key: "setRef",
    value: function setRef(fieldName) {
      this._ref = fieldName;
      return this;
    }
    /**
     * Bind a handler to the specified events
     * @param  {...string} events
     * @param {function} f
     */

  }, {
    key: "on",
    value: function on() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.eventEmitter.addListener.apply(this.eventEmitter, args);
    }
    /**
     * Unbind a handler from an event
     * @param  {string} event
     * @param  {function} f
     */

  }, {
    key: "off",
    value: function off(event, fn) {
      return this.eventEmitter.removeListener(event, fn);
    }
    /**
     * Sets whether origin JSON documents are stored
     * @param  {boolean} save default true
     * @return {this}
     */

  }, {
    key: "saveDocument",
    value: function saveDocument(save) {
      this.documentStore = new _document_store.DocumentStore(save);
      return this;
    }
    /**
     * Adds a document to the index
     * @param {object} doc
     * @param {boolean} emitEvent whether an event should be triggered
     */

  }, {
    key: "addDoc",
    value: function addDoc(doc, emitEvent) {
      if (!doc) return;
      emitEvent = emitEvent === undefined ? true : emitEvent;
      var docRef = doc[this._ref];
      this.documentStore.addDoc(docRef, doc);

      this._fields.forEach(function (field) {
        var fieldTokens = this.pipeline.run(_tokenizer.Tokenizer.tokenize(doc[field]));
        this.documentStore.addFieldLength(docRef, field, fieldTokens.length);
        var tokenCount = {};
        fieldTokens.forEach(function (token) {
          if (token in tokenCount) tokenCount[token] += 1;else tokenCount[token] = 1;
        }, this);

        for (var token in tokenCount) {
          var termFrequency = tokenCount[token];
          termFrequency = Math.sqrt(termFrequency);
          this.index[field].addToken(token, {
            ref: docRef,
            tf: termFrequency
          });
        }
      }, this);

      if (emitEvent) this.eventEmitter.emit('add', doc, this);
    }
    /**
     * Remove a document from the index by its unique id
     * @param  {string|number} docRef
     * @param  {boolean} emitEvent whether an event should be triggered
     */

  }, {
    key: "removeDocByRef",
    value: function removeDocByRef(docRef, emitEvent) {
      if (!docRef) return;

      if (this.documentStore.isDocStored() === false) {
        return;
      }

      if (!this.documentStore.hasDoc(docRef)) return;
      var doc = this.documentStore.getDoc(docRef);
      this.removeDoc(doc, false);
    }
    /**
     * Remove a document from the index
     * @param  {object} doc
     * @param  {boolean} emitEvent whether an event should be triggered
     */

  }, {
    key: "removeDoc",
    value: function removeDoc(doc, emitEvent) {
      if (!doc) return;
      emitEvent = emitEvent === undefined ? true : emitEvent;
      var docRef = doc[this._ref];
      if (!this.documentStore.hasDoc(docRef)) return;
      this.documentStore.removeDoc(docRef);

      this._fields.forEach(function (field) {
        var fieldTokens = this.pipeline.run(_tokenizer.Tokenizer.tokenize(doc[field]));
        fieldTokens.forEach(function (token) {
          this.index[field].removeToken(token, docRef);
        }, this);
      }, this);

      if (emitEvent) this.eventEmitter.emit('remove', doc, this);
    }
    /**
     * Update a document in the index
     * @param  {object} doc
     * @param  {boolean} emitEvent whether an event should be triggered
     */

  }, {
    key: "updateDoc",
    value: function updateDoc(doc, emitEvent) {
      emitEvent = emitEvent === undefined ? true : emitEvent;
      this.removeDocByRef(doc[this._ref], false);
      this.addDoc(doc, false);
      if (emitEvent) this.eventEmitter.emit('update', doc, this);
    }
    /**
     * Searches the index using the passed query.
     * Queries should be a string, multiple words are allowed.
     *
     * If config is null, will search all fields defaultly, and lead to OR based query.
     * If config is specified, will search specified with query time boosting.
     *
     * All query tokens are passed through the same pipeline that document tokens
     * are passed through, so any language processing involved will be run on every
     * query term.
     *
     * Each query term is expanded, so that the term 'he' might be expanded to
     * 'hello' and 'help' if those terms were already included in the index.
     *
     * Matching documents are returned as an array of objects, each object contains
     * the matching document ref, as set for this index, and the similarity score
     * for this document against the query.
     *
     * @param {string} query The query to search the index with.
     * @param {JSON} userConfig The user query config, JSON format.
     * @return {object}
     */

  }, {
    key: "search",
    value: function search(query, userConfig) {
      if (!query) return [];

      if (typeof query === 'string') {
        query = {
          any: query
        };
      } else {
        query = JSON.parse(JSON.stringify(query));
      }

      var configStr = null;

      if (userConfig != null) {
        configStr = JSON.stringify(userConfig);
      }

      var config = new _configuration.Configuration(configStr, this.getFields()).get();
      var queryTokens = {};
      var queryFields = Object.keys(query);

      for (var i = 0; i < queryFields.length; i++) {
        var key = queryFields[i];
        queryTokens[key] = this.pipeline.run(_tokenizer.Tokenizer.tokenize(query[key]));
      }

      var queryResults = {};

      for (var field in config) {
        var tokens = queryTokens[field] || queryTokens.any;

        if (!tokens) {
          continue;
        }

        var fieldSearchResults = this.fieldSearch(tokens, field, config);
        var fieldBoost = config[field].boost;

        for (var _docRef in fieldSearchResults) {
          fieldSearchResults[_docRef] = fieldSearchResults[_docRef] * fieldBoost;
        }

        for (var _docRef2 in fieldSearchResults) {
          if (_docRef2 in queryResults) {
            queryResults[_docRef2] += fieldSearchResults[_docRef2];
          } else {
            queryResults[_docRef2] = fieldSearchResults[_docRef2];
          }
        }
      }

      var results = [];
      var result;

      for (var docRef in queryResults) {
        result = {
          ref: docRef,
          score: queryResults[docRef]
        };

        if (this.documentStore.hasDoc(docRef)) {
          result.doc = this.documentStore.getDoc(docRef);
        }

        results.push(result);
      }

      results.sort(function (a, b) {
        return b.score - a.score;
      });
      return results;
    }
    /**
     * Search a list of tokens within a field
     * @private
     * @param  {string[]} queryTokens
     * @param  {string} fieldName
     * @param  {Configuration} config
     * @return {object}
     */

  }, {
    key: "fieldSearch",
    value: function fieldSearch(queryTokens, fieldName, config) {
      var booleanType = config[fieldName].bool;
      var expand = config[fieldName].expand;
      var boost = config[fieldName].boost;
      var scores = null;
      var docTokens = {}; // Do nothing if the boost is 0

      if (boost === 0) {
        return undefined;
      }

      queryTokens.forEach(function (token) {
        var tokens = [token];

        if (expand) {
          tokens = this.index[fieldName].expandToken(token);
        }

        var queryTokenScores = {};
        tokens.forEach(function (key) {
          var docs = this.index[fieldName].getDocs(key);
          var idf = this.idf(key, fieldName);

          if (scores && booleanType === 'AND') {
            // special case, we can rule out documents that have been
            // already been filtered out because they weren't scored
            // by previous query token passes.
            var filteredDocs = {};

            for (var _docRef3 in scores) {
              if (_docRef3 in docs) {
                filteredDocs[_docRef3] = docs[_docRef3];
              }
            }

            docs = filteredDocs;
          }

          if (key === token) {
            this.fieldSearchStats(docTokens, key, docs);
          }

          for (var docRef in docs) {
            var tf = this.index[fieldName].getTermFrequency(key, docRef);
            var fieldLength = this.documentStore.getFieldLength(docRef, fieldName);
            var fieldLengthNorm = 1;

            if (fieldLength !== 0) {
              fieldLengthNorm = 1 / Math.sqrt(fieldLength);
            }

            var penality = 1;

            if (key !== token) {
              penality = (1 - (key.length - token.length) / key.length) * 0.15;
            }

            var score = tf * idf * fieldLengthNorm * penality;

            if (docRef in queryTokenScores) {
              queryTokenScores[docRef] += score;
            } else {
              queryTokenScores[docRef] = score;
            }
          }
        }, this);
        scores = this.mergeScores(scores, queryTokenScores, booleanType);
      }, this);
      scores = this.coordNorm(scores, docTokens, queryTokens.length);
      return scores;
    }
    /**
     * Merge the scores from one set of tokens into an accumulated score table.
     * Exact operation depends on the op parameter. If op is 'AND', then only the
     * intersection of the two score lists is retained. Otherwise, the union of
     * the two score lists is returned.
     * @private
     * @param {boolean} accumScores should be null on first call
     * @param {object} scores new scores to merge into accumScores
     * @param {string} op merge operation (should be 'AND' or 'OR')
     */

  }, {
    key: "mergeScores",
    value: function mergeScores(accumScores, scores, op) {
      if (!accumScores) {
        return scores;
      }

      if (op === 'AND') {
        var intersection = {};

        for (var _docRef4 in scores) {
          if (_docRef4 in accumScores) {
            intersection[_docRef4] = accumScores[_docRef4] + scores[_docRef4];
          }
        }

        return intersection;
      }

      for (var docRef in scores) {
        if (docRef in accumScores) {
          accumScores[docRef] += scores[docRef];
        } else {
          accumScores[docRef] = scores[docRef];
        }
      }

      return accumScores;
    }
    /**
     * Record query tokens of retrieved documents
     * @private
     * @param  {object} docTokens
     * @param  {string} token
     * @param  {object} docs
     */

  }, {
    key: "fieldSearchStats",
    value: function fieldSearchStats(docTokens, token, docs) {
      for (var doc in docs) {
        if (doc in docTokens) {
          docTokens[doc].push(token);
        } else {
          docTokens[doc] = [token];
        }
      }
    }
    /**
     * Calculate the inverse document frequency of a term within a field
     * @private
     * @param  {string} term
     * @param  {string} field
     * @return {number}
     */

  }, {
    key: "idf",
    value: function idf(term, field) {
      var cacheKey = "@" + field + '/' + term;
      if (Object.prototype.hasOwnProperty.call(this._idfCache, cacheKey)) return this._idfCache[cacheKey];
      var df = this.index[field].getDocFreq(term);
      var idf = 1 + Math.log(this.documentStore.length / (df + 1));
      this._idfCache[cacheKey] = idf;
      return idf;
    }
    /**
     * Get the normalized coordination factor
     * @private
     * @param  {object} scores
     * @param  {oobject} docTokens
     * @param  {number} n
     * @return {object}
     */

  }, {
    key: "coordNorm",
    value: function coordNorm(scores, docTokens, n) {
      for (var doc in scores) {
        if (!(doc in docTokens)) continue;
        var tokens = docTokens[doc].length;
        scores[doc] = scores[doc] * tokens / n;
      }

      return scores;
    }
  }]);

  return Index;
}();

exports.Index = Index;

/***/ }),

/***/ "./src/inverted_index.js":
/*!*******************************!*\
  !*** ./src/inverted_index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvertedIndex = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The entity on which queries are executed upon.
 */
var InvertedIndex =
/*#__PURE__*/
function () {
  /**
   * Initialize an inverted index
   */
  function InvertedIndex() {
    _classCallCheck(this, InvertedIndex);

    this.root = {
      docs: {},
      df: 0
    };
  }
  /**
     * Adds a {token: tokenInfo} pair to the inverted index.
     * If the token already exist, then update the tokenInfo.
     *
     * tokenInfo format: { ref: 1, tf: 2}
     * tokenInfo should contains the document's ref and the tf(token frequency) of that token in
     * the document.
     *
     * By default this function starts at the root of the current inverted index, however
     * it can start at any node of the inverted index if required.
     *
     * @param {string} token
     * @param {object} tokenInfo format: { ref: 1, tf: 2}
     * @param {object} root An optional node at which to start looking for the
     * correct place to enter the doc, by default the root of this InvertedIndex
     * is used.
   */


  _createClass(InvertedIndex, [{
    key: "addToken",
    value: function addToken(token, tokenInfo, root) {
      root = root || this.root;

      for (var i = 0; i < token.length; ++i) {
        var key = token[i];
        if (!(key in root)) root[key] = {
          docs: {},
          df: 0
        };
        root = root[key];
      }

      var docRef = tokenInfo.ref;

      if (!root.docs[docRef]) {
        // if this doc not exist, then add this doc
        root.docs[docRef] = {
          tf: tokenInfo.tf
        };
        root.df += 1;
      } else {
        // if this doc already exist, then update tokenInfo
        root.docs[docRef] = {
          tf: tokenInfo.tf
        };
      }
    }
    /**
     * Check whether the token is stored in this inverted index
     * @param  {string}  token
     * @return {boolean}
     */

  }, {
    key: "hasToken",
    value: function hasToken(token) {
      if (!token) return false;
      var node = this.root;

      for (var i = 0; i < token.length; i++) {
        if (!node[token[i]]) return false;
        node = node[token[i]];
      }

      return true;
    }
    /**
     * Get a node from the inverted index for a given token.
     * If token not found in this InvertedIndex, return null.
     * @param {string} token The token to get the node for.
     * @return {object}
     */

  }, {
    key: "getNode",
    value: function getNode(token) {
      if (!token) return null;
      var node = this.root;

      for (var i = 0; i < token.length; i++) {
        if (!node[token[i]]) return null;
        node = node[token[i]];
      }

      return node;
    }
    /**
     * Get the documents of a given token.
     * If token not found, return {}.
     * @param {string} token The token to get the documents for.
     * @return {object}
     */

  }, {
    key: "getDocs",
    value: function getDocs(token) {
      var node = this.getNode(token);

      if (node == null) {
        return {};
      }

      return node.docs;
    }
    /**
     * Get term frequency of given token in given document unique id.
     * If token or document id not found, return 0.
     * @param {string} token the token to get the documents for
     * @param {string|number} docRef the unique id of the document
     * @return {number}
     */

  }, {
    key: "getTermFrequency",
    value: function getTermFrequency(token, docRef) {
      var node = this.getNode(token);

      if (node == null) {
        return 0;
      }

      if (!(docRef in node.docs)) {
        return 0;
      }

      return node.docs[docRef].tf;
    }
    /**
     * Get the document frequency of given token.
     * If token not found, return 0.
     * @param {string} token the token to get the documents for
     * @return {object}
     */

  }, {
    key: "getDocFreq",
    value: function getDocFreq(token) {
      var node = this.getNode(token);

      if (node == null) {
        return 0;
      }

      return node.df;
    }
    /**
     * Remove the document identified by document's ref from the token in the inverted index.
     * @param {string} token remove the document from token
     * @param {string} ref the ref of the document to remove from given token
     */

  }, {
    key: "removeToken",
    value: function removeToken(token, ref) {
      if (!token) return;
      var node = this.getNode(token);
      if (node == null) return;

      if (ref in node.docs) {
        delete node.docs[ref];
        node.df -= 1;
      }
    }
    /**
     * Find all the possible suffixes of given token using tokens currently in the inverted index.
     * If token not found, return empty Array.
     * @param {string} token the token to expand
     * @return {string[]}
     */

  }, {
    key: "expandToken",
    value: function expandToken(token, memo, root) {
      if (token == null || token === '') return [];
      memo = memo || [];

      if (root == null) {
        root = this.getNode(token);
        if (root == null) return memo;
      }

      if (root.df > 0) memo.push(token);

      for (var key in root) {
        if (key === 'docs') continue;
        if (key === 'df') continue;
        this.expandToken(token + key, memo, root[key]);
      }

      return memo;
    }
  }]);

  return InvertedIndex;
}();

exports.InvertedIndex = InvertedIndex;

/***/ }),

/***/ "./src/lunastra.js":
/*!*************************!*\
  !*** ./src/lunastra.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  init: true
};
exports.init = init;

var _index = __webpack_require__(/*! ./index.js */ "./src/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

var _trimmer = __webpack_require__(/*! ./trimmer.js */ "./src/trimmer.js");

Object.keys(_trimmer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _trimmer[key];
    }
  });
});

var _stop_word_filters = __webpack_require__(/*! ./stop_word_filters.js */ "./src/stop_word_filters.js");

Object.keys(_stop_word_filters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stop_word_filters[key];
    }
  });
});

var _stemmer = __webpack_require__(/*! ./stemmer.js */ "./src/stemmer.js");

Object.keys(_stemmer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stemmer[key];
    }
  });
});

var _configuration = __webpack_require__(/*! ./configuration.js */ "./src/configuration.js");

Object.keys(_configuration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _configuration[key];
    }
  });
});

var _document_store = __webpack_require__(/*! ./document_store.js */ "./src/document_store.js");

Object.keys(_document_store).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _document_store[key];
    }
  });
});

var _event_emitter = __webpack_require__(/*! ./event_emitter.js */ "./src/event_emitter.js");

Object.keys(_event_emitter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _event_emitter[key];
    }
  });
});

var _inverted_index = __webpack_require__(/*! ./inverted_index.js */ "./src/inverted_index.js");

Object.keys(_inverted_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inverted_index[key];
    }
  });
});

var _pipeline = __webpack_require__(/*! ./pipeline.js */ "./src/pipeline.js");

Object.keys(_pipeline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pipeline[key];
    }
  });
});

var _tokenizer = __webpack_require__(/*! ./tokenizer.js */ "./src/tokenizer.js");

Object.keys(_tokenizer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tokenizer[key];
    }
  });
});

var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

/**
 * A helper method to initialize a Lunastra Index
 * @param  {object} config
 * @return {Index}
 */
function init(config) {
  var index = new _index.Index();
  index.pipeline.add(_trimmer.Trimmer.trim, _stop_word_filters.StopWordFilter.filter, _stemmer.Stemmer.stem);
  if (config) config.call(index, index);
  return index;
}

/***/ }),

/***/ "./src/pipeline.js":
/*!*************************!*\
  !*** ./src/pipeline.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pipeline = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * An ordered list of functions applied to both document
 * tokens and query tokens.
 */
var Pipeline =
/*#__PURE__*/
function () {
  /**
   * Initialize a pipeline
   */
  function Pipeline() {
    _classCallCheck(this, Pipeline);

    this._queue = [];
  }
  /**
   * Return the stored list of functions
   * @return {function[]}
   */


  _createClass(Pipeline, [{
    key: "get",
    value: function get() {
      return this._queue;
    }
    /**
     * Push functions to the end of the pipeline
     * @param {...function} fs
     */

  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, fs = new Array(_len), _key = 0; _key < _len; _key++) {
        fs[_key] = arguments[_key];
      }

      fs.forEach(function (f) {
        this._queue.push(f);
      }, this);
    }
    /**
     * Insert a function after a function present in the pipeline
     * @param  {function} existingFct
     * @param  {function} newFct
     */

  }, {
    key: "after",
    value: function after(existingFct, newFct) {
      var pos = this._queue.indexOf(existingFct);

      if (pos === -1) throw new Error('Cannot find the the requested function to insert after');

      this._queue.splice(pos + 1, 0, newFct);
    }
  }, {
    key: "before",

    /**
     * Insert a function before a function present in the pipeline
     * @param  {function} existingFct
     * @param  {function} newFct
     */
    value: function before(existingFct, newFct) {
      var pos = this._queue.indexOf(existingFct);

      if (pos === -1) throw new Error('Cannot find the the requested function to insert after');

      this._queue.splice(pos, 0, newFct);
    }
  }, {
    key: "remove",

    /**
     * Remove a function from the pipeline
     * @param  {function} f
     */
    value: function remove(f) {
      var pos = this._queue.indexOf(f);

      if (pos === -1) return;

      this._queue.splice(pos, 1);
    }
  }, {
    key: "pop",

    /**
     * Remove and return the last function in the pipeline
     * @return {function}
     */
    value: function pop() {
      return this._queue.pop();
    }
    /**
     * Empty the pipeline
     */

  }, {
    key: "clear",
    value: function clear() {
      this._queue = [];
    }
    /**
     * Run each function stored in the pipeline on the input tokens
     * in FIFO order and returns the result
     * @param  {string[]} tokens
     * @return {string[]}
     */

  }, {
    key: "run",
    value: function run(tokens) {
      var out = tokens;
      var queueLength = this._queue.length;

      for (var i = 0; i < queueLength; i++) {
        var pipelineOutput = [];

        for (var _j = 0; _j < out.length; _j++) {
          var output = this._queue[i](out[_j], _j, out);

          if (!Array.isArray(output)) output = [output];

          for (var k = 0; k < output.length; k++) {
            if (output[k] !== null && output[k] !== void 0) {
              pipelineOutput.push(output[k]);
            }
          }
        }

        for (var j = pipelineOutput.length - 1; j >= 0; j--) {
          if (pipelineOutput[j] === "") pipelineOutput.splice(j, 1);
        }

        out = pipelineOutput;
      }

      return out;
    }
  }]);

  return Pipeline;
}();

exports.Pipeline = Pipeline;

/***/ }),

/***/ "./src/stemmer.js":
/*!************************!*\
  !*** ./src/stemmer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stemmer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint camelcase: 0 */

/* eslint max-len: 0 */

/* eslint brace-style: 0 */

/**
 * Pipeline Extension: Stemmer
 */
var Stemmer =
/*#__PURE__*/
function () {
  function Stemmer() {
    _classCallCheck(this, Stemmer);
  }

  _createClass(Stemmer, null, [{
    key: "stem",

    /**
     * Reduce a word to its root and return the result
     * (implementation of the PorterStemmer taken from http://tartarus.org/~martin)
     * @param  {string} word
     * @return {string}
     */
    value: function stem(word) {
      var step2list = {
        "ational": "ate",
        "tional": "tion",
        "enci": "ence",
        "anci": "ance",
        "izer": "ize",
        "bli": "ble",
        "alli": "al",
        "entli": "ent",
        "eli": "e",
        "ousli": "ous",
        "ization": "ize",
        "ation": "ate",
        "ator": "ate",
        "alism": "al",
        "iveness": "ive",
        "fulness": "ful",
        "ousness": "ous",
        "aliti": "al",
        "iviti": "ive",
        "biliti": "ble",
        "logi": "log"
      },
          step3list = {
        "icate": "ic",
        "ative": "",
        "alize": "al",
        "iciti": "ic",
        "ical": "ic",
        "ful": "",
        "ness": ""
      },
          c = "[^aeiou]",
          // consonant
      v = "[aeiouy]",
          // vowel
      C = c + "[^aeiouy]*",
          // consonant sequence
      V = v + "[aeiou]*",
          // vowel sequence
      mgr0 = "^(" + C + ")?" + V + C,
          // [C]VC... is m>0
      meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",
          // [C]VC[V] is m=1
      mgr1 = "^(" + C + ")?" + V + C + V + C,
          // [C]VCVC... is m>1
      s_v = "^(" + C + ")?" + v; // vowel in stem

      var re_mgr0 = new RegExp(mgr0);
      var re_mgr1 = new RegExp(mgr1);
      var re_meq1 = new RegExp(meq1);
      var re_s_v = new RegExp(s_v);
      var re_1a = /^(.+?)(ss|i)es$/;
      var re2_1a = /^(.+?)([^s])s$/;
      var re_1b = /^(.+?)eed$/;
      var re2_1b = /^(.+?)(ed|ing)$/;
      var re_1b_2 = /.$/;
      var re2_1b_2 = /(at|bl|iz)$/;
      var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
      var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");
      var re_1c = /^(.+?[^aeiou])y$/;
      var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
      var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
      var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
      var re2_4 = /^(.+?)(s|t)(ion)$/;
      var re_5 = /^(.+?)e$/;
      var re_5_1 = /ll$/;
      var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

      function porterStemmer(w) {
        var stem, suffix, firstch, re, re2, re3, re4, fp;

        if (w.length < 3) {
          return w;
        }

        firstch = w.substr(0, 1);

        if (firstch === "y") {
          w = firstch.toUpperCase() + w.substr(1);
        } // Step 1a


        re = re_1a;
        re2 = re2_1a;

        if (re.test(w)) {
          w = w.replace(re, "$1$2");
        } else if (re2.test(w)) {
          w = w.replace(re2, "$1$2");
        } // Step 1b


        re = re_1b;
        re2 = re2_1b;

        if (re.test(w)) {
          fp = re.exec(w);
          re = re_mgr0;

          if (re.test(fp[1])) {
            re = re_1b_2;
            w = w.replace(re, "");
          }
        } else if (re2.test(w)) {
          fp = re2.exec(w);
          stem = fp[1];
          re2 = re_s_v;

          if (re2.test(stem)) {
            w = stem;
            re2 = re2_1b_2;
            re3 = re3_1b_2;
            re4 = re4_1b_2;

            if (re2.test(w)) {
              w = w + "e";
            } else if (re3.test(w)) {
              re = re_1b_2;
              w = w.replace(re, "");
            } else if (re4.test(w)) {
              w = w + "e";
            }
          }
        } // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is
        // not the first letter of the word (so cry -> cri, by -> by, say -> say)


        re = re_1c;

        if (re.test(w)) {
          fp = re.exec(w);
          stem = fp[1];
          w = stem + "i";
        } // Step 2


        re = re_2;

        if (re.test(w)) {
          fp = re.exec(w);
          stem = fp[1];
          suffix = fp[2];
          re = re_mgr0;

          if (re.test(stem)) {
            w = stem + step2list[suffix];
          }
        } // Step 3


        re = re_3;

        if (re.test(w)) {
          fp = re.exec(w);
          stem = fp[1];
          suffix = fp[2];
          re = re_mgr0;

          if (re.test(stem)) {
            w = stem + step3list[suffix];
          }
        } // Step 4


        re = re_4;
        re2 = re2_4;

        if (re.test(w)) {
          fp = re.exec(w);
          stem = fp[1];
          re = re_mgr1;

          if (re.test(stem)) {
            w = stem;
          }
        } else if (re2.test(w)) {
          fp = re2.exec(w);
          stem = fp[1] + fp[2];
          re2 = re_mgr1;

          if (re2.test(stem)) {
            w = stem;
          }
        } // Step 5


        re = re_5;

        if (re.test(w)) {
          fp = re.exec(w);
          stem = fp[1];
          re = re_mgr1;
          re2 = re_meq1;
          re3 = re3_5;

          if (re.test(stem) || re2.test(stem) && !re3.test(stem)) {
            w = stem;
          }
        }

        re = re_5_1;
        re2 = re_mgr1;

        if (re.test(w) && re2.test(w)) {
          re = re_1b_2;
          w = w.replace(re, "");
        } // and turn initial Y back to y


        if (firstch === "y") {
          w = firstch.toLowerCase() + w.substr(1);
        }

        return w;
      }

      ;
      return porterStemmer(word);
    }
  }]);

  return Stemmer;
}();

exports.Stemmer = Stemmer;

/***/ }),

/***/ "./src/stop_word_filters.js":
/*!**********************************!*\
  !*** ./src/stop_word_filters.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StopWordFilter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Pipeline Extension: StopWordFilter
 */
var StopWordFilter =
/*#__PURE__*/
function () {
  function StopWordFilter() {
    _classCallCheck(this, StopWordFilter);
  }

  _createClass(StopWordFilter, null, [{
    key: "filter",

    /**
     * Strip out stop words from the token and
     * return the result
     * @param  {string} token
     * @return {string}
     */
    value: function filter(token) {
      if (token && StopWordFilter.stopWords[token] !== true) {
        return token;
      }

      return undefined;
    }
    /**
     * Clears the inner list of stop words
     */

  }, {
    key: "clearStopWords",
    value: function clearStopWords() {
      StopWordFilter.stopWords = {};
    }
    /**
     * Register a list of stop words
     * @param {string[]} words
     */

  }, {
    key: "addStopWords",
    value: function addStopWords(words) {
      if (words == null || Array.isArray(words) === false) return;
      words.forEach(function (word) {
        StopWordFilter.stopWords[word] = true;
      }, this);
    }
    /**
     * Reset to use default stop words
     */

  }, {
    key: "resetStopWords",
    value: function resetStopWords() {
      StopWordFilter.stopWords = StopWordFilter.defaultStopWords;
    }
  }]);

  return StopWordFilter;
}();

exports.StopWordFilter = StopWordFilter;
StopWordFilter.defaultStopWords = {
  "": true,
  "a": true,
  "able": true,
  "about": true,
  "across": true,
  "after": true,
  "all": true,
  "almost": true,
  "also": true,
  "am": true,
  "among": true,
  "an": true,
  "and": true,
  "any": true,
  "are": true,
  "as": true,
  "at": true,
  "be": true,
  "because": true,
  "been": true,
  "but": true,
  "by": true,
  "can": true,
  "cannot": true,
  "could": true,
  "dear": true,
  "did": true,
  "do": true,
  "does": true,
  "either": true,
  "else": true,
  "ever": true,
  "every": true,
  "for": true,
  "from": true,
  "get": true,
  "got": true,
  "had": true,
  "has": true,
  "have": true,
  "he": true,
  "her": true,
  "hers": true,
  "him": true,
  "his": true,
  "how": true,
  "however": true,
  "i": true,
  "if": true,
  "in": true,
  "into": true,
  "is": true,
  "it": true,
  "its": true,
  "just": true,
  "least": true,
  "let": true,
  "like": true,
  "likely": true,
  "may": true,
  "me": true,
  "might": true,
  "most": true,
  "must": true,
  "my": true,
  "neither": true,
  "no": true,
  "nor": true,
  "not": true,
  "of": true,
  "off": true,
  "often": true,
  "on": true,
  "only": true,
  "or": true,
  "other": true,
  "our": true,
  "own": true,
  "rather": true,
  "said": true,
  "say": true,
  "says": true,
  "she": true,
  "should": true,
  "since": true,
  "so": true,
  "some": true,
  "than": true,
  "that": true,
  "the": true,
  "their": true,
  "them": true,
  "then": true,
  "there": true,
  "these": true,
  "they": true,
  "this": true,
  "tis": true,
  "to": true,
  "too": true,
  "twas": true,
  "us": true,
  "wants": true,
  "was": true,
  "we": true,
  "were": true,
  "what": true,
  "when": true,
  "where": true,
  "which": true,
  "while": true,
  "who": true,
  "whom": true,
  "why": true,
  "will": true,
  "with": true,
  "would": true,
  "yet": true,
  "you": true,
  "your": true
};
StopWordFilter.stopWords = StopWordFilter.defaultStopWords;

/***/ }),

/***/ "./src/tokenizer.js":
/*!**************************!*\
  !*** ./src/tokenizer.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tokenizer = void 0;

var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * A wrapper around how Lunastra tokenizes strings
 */
var Tokenizer =
/*#__PURE__*/
function () {
  function Tokenizer() {
    _classCallCheck(this, Tokenizer);
  }

  _createClass(Tokenizer, null, [{
    key: "tokenize",

    /**
     * Split a string into a list of tokens
     * @param  {string} str
     * @return {string[]}
     */
    value: function tokenize(str) {
      if (!arguments.length || str === null || str === undefined) return [];

      if (Array.isArray(str)) {
        var arr = str.filter(function (token) {
          if (token === null || token === undefined) {
            return false;
          }

          return true;
        });
        arr = arr.map(function (t) {
          return (0, _utils.toString)(t).toLowerCase();
        });
        var out = [];
        arr.forEach(function (item) {
          var tokens = item.split(Tokenizer.separator);
          out = out.concat(tokens);
        }, this);
        return out;
      }

      return str.toString().trim().toLowerCase().split(Tokenizer.separator);
    }
    /**
     * Get the seperator
     * @return {string|regexp}
     */

  }, {
    key: "getSeparator",
    value: function getSeparator() {
      return Tokenizer.separator;
    }
    /**
     * Set the seperator
     * @param {string|regexp} sep
     */

  }, {
    key: "setSeparator",
    value: function setSeparator(sep) {
      Tokenizer.separator = sep;
    }
    /**
     * Reset to the default seperator
     */

  }, {
    key: "resetSeparator",
    value: function resetSeparator() {
      Tokenizer.separator = Tokenizer.defaultSeparator;
    }
  }]);

  return Tokenizer;
}();

exports.Tokenizer = Tokenizer;
Tokenizer.defaultSeparator = /[\s\-]+/;
Tokenizer.separator = Tokenizer.defaultSeparator;

/***/ }),

/***/ "./src/trimmer.js":
/*!************************!*\
  !*** ./src/trimmer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trimmer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Pipeline Extension: Trimmer
 */
var Trimmer =
/*#__PURE__*/
function () {
  function Trimmer() {
    _classCallCheck(this, Trimmer);
  }

  _createClass(Trimmer, null, [{
    key: "trim",

    /**
     * Trim non word characters from the begining and end of a string
     * and return the result
     * @param  {string} token
     * @return {string}
     */
    value: function trim(token) {
      if (token === null || token === undefined) {
        throw new Error('token should not be undefined');
      }

      return token.replace(/^\W+/, '').replace(/\W+$/, '');
    }
  }]);

  return Trimmer;
}();

exports.Trimmer = Trimmer;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.toString = toString;
exports.clone = clone;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Print a warning message to the console
 * @param  {string} message
 */
function warn(global) {
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message);
    }
  };
}
/**
 * Returns and empty string for null and undefined,
 * otherwise returns the result of the object's
 * '.toString()' method
 * @param  {object} obj
 * @return {string}
 */


function toString(obj) {
  if (obj === undefined || obj === null) return "";
  return obj.toString();
}
/**
 * Return a deep copy of the object
 * @param  {object} obj
 * @return {object}
 */


function clone(obj) {
  if (obj === null || _typeof(obj) !== "object") return obj;
  var copy = obj.constructor();

  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }

  return copy;
}

/***/ })

/******/ });
});
//# sourceMappingURL=lunastra.js.map