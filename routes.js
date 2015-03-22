'use strict';

/**
 * Module dependencies.
 */

var home = require('./controllers/home');

module.exports = function routes(app) {
    app.get('/', home);
};
