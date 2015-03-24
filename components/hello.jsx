var React = require('react');

var Hello = React.createClass({
    render: function() {
        return <div>{this.props.question}</div>;
    }
});

module.exports = Hello;
