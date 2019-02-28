import {warn} from '../utils/utils.js';

/**
 * A wrapper on a user search configuration.
 */
export class Configuration {

  /**
   * Initialize a configuration
   * @param  {string} config
   * @param  {string[]} fields
   */
  constructor(config, fields) {
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
        warn('user configuration parse failed, will use default configuration');
        this.buildDefaultConfig(fields);
      }
    }
  }

  /**
   * Get current user config
   * @return {JSON}
   */
  get() {
    return this.config;
  }

  /**
   * Reset user search configuration
   */
  reset() {
    this.config = {};
  }

  /**
   * Build default search configuration
   * @private
   * @param  {string[]} fields
   */
  buildDefaultConfig(fields) {
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
  buildUserConfig(config, fields) {
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
            boost: (fieldConfig.boost || fieldConfig.boost === 0) ? fieldConfig.boost : 1,
            bool: fieldConfig.bool || globalBool,
            expand: fieldExpand
          };
        } else {
          warn('field name in user configuration not found in index instance fields');
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
  addAllFieldsToUserConfig(bool, expand, fields) {
    fields.forEach(function (field) {
      this.config[field] = {
        boost: 1,
        bool: bool,
        expand: expand
      };
    }, this);
  }

}
