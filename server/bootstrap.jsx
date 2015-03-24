require("node-jsx").install({ extension: ".jsx" });
var React = require("react");
var Hello = require("../components/hello.jsx");
var Template = require("./template");

function Bootstrap(data) {
    this.data = data;
}

Bootstrap.prototype.load = function *(data) {
    var staticHtml = React.renderToString(<Hello question={data.question} />);
    var tmp = new Template("../views/index.html");
    return yield tmp.render({ app: staticHtml });
};

module.exports = Bootstrap;
