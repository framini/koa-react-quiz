'use strict';
require("node-jsx").install({ extension: ".jsx" });

var Bootstrap = require("../server/bootstrap.jsx");

module.exports = function* home(next) {
    var html = new Bootstrap();
    var temp = yield html.pepe();
    this.body = temp;
};
