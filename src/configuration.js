import {warn} from './utils.js';

export class Configuration {

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

  get config() {
    return this.config;
  }

  reset() {
    this.config = {};
  }

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
