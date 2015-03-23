var fs = require("co-fs");
var path = require("path");

function Template(target) {
    this.target = target;
}

Template.prototype.render = function* (data) {
    var fullPath = path.resolve(__dirname, this.target);
    var template;
    var rendered;
    try {
        template = yield fs.readFile(fullPath, "utf8");
        rendered = template.replace(/\{\{yield:([a-z0-9_]+)\}\}/g, function(match, property) {
          return data[property];
        });

        return rendered;
    } catch(e) {
        console.error(e);
    }
};

module.exports = Template;
