var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return <h2>Hello world</h2>;
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('content'));
