'use strict';


/**
 * Module dependencies
 */
var koa = require('koa');
var middlewares = require('koa-middlewares');
var path = require('path');
var config = require('./config');
var routes = require('./routes');

var app = module.exports = koa();

/**
 * router
 */
app.use(middlewares.router(app));
routes(app);

if (!module.parent) {
    app.listen(config.port);
    console.log('$ open http://127.0.0.1:' + config.port);
}
