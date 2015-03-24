'use strict';
require("node-jsx").install({ extension: ".jsx" });
var config = require('../config')();
var wrap = require('co-monk');
var monk = require('monk');
var db = monk(config.mongoUrl);
var Bootstrap = require("../server/bootstrap.jsx");
var sampleData = require('../data/sample.data.json');

module.exports = function* home(next) {
    var bt = new Bootstrap();
    var quiz = wrap(db.get('quiz'));
    var res = yield quiz.findOne({});
    var temp = yield bt.load(res);

    // TODO: For now we'll handle the DB population from here
    // but it should be removed
    if (res.length === 0) {
        quiz.insert(sampleData, function() {
            console.log("Data inserted");
        });
    } else {
        console.log("DB already populated");
    }

    this.body = temp;
};
