'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');
var version = require('./package.json').version;

var quiz_local = process.env.MONGOLAB_URI || "mongodb://localhost:27017/quiz_local";
var quiz_staging = process.env.MONGOLAB_URI || "mongodb://localhost:27017/quiz_staging";
var quiz_prod = process.env.MONGOLAB_URI || "mongodb://localhost:27017/quiz_prod";

var config = {
    general: {
        version: version
    },
    local: {
        mode: 'local',
        port: 3000,
        mongoUrl: quiz_local
    },
    staging: {
        mode: 'staging',
        port: 3005,
        mongoUrl: quiz_staging
    },
    prod: {
        mode: 'prod',
        port: process.env.PORT || 3010,
        mongoUrl: quiz_prod
    }
};

module.exports = function (mode) {
    var cfg = _.assign({}, config[mode || process.env.NODE_ENV || process.argv[2] || 'local'] || config.local, config.general);
    return cfg;
};
