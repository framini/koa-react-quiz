require("node-jsx").install({ extension: ".jsx" });
var React = require("react");
var Hello = require("../components/hello.jsx");
var Template = require("./template");

function Bootstrap(data) {
    this.data = data;
}

Bootstrap.prototype.pepe = function *() {
    var staticHtml = React.renderToString(<Hello name="Frannnk" />);
    var tmp = new Template("../views/index.html");
    return yield tmp.render({ app: staticHtml });
};

module.exports = Bootstrap;
