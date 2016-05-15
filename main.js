var Editor = React.createClass({
  getInitialState: function() {
    return { content: "" };
  },
  updateText: function(text) {
    this.setState({content: text});
  },
  render: function() {
    return (
      <div>
        <EditArea onChange={this.updateText} />
        <Comp content={this.state.content} />
      </div>
    );
  }
});

var Comp = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.content, {sanitize: true});
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div id="result" className="col-md-6">
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

var EditArea = React.createClass({
  render: function() {
    return (
      <textarea id="edit" className="col-md-6" onChange={this.updateValue} />
    );
  },
  updateValue: function(e) {
    this.props.onChange(e.target.value);
  }
});

ReactDOM.render(
  <Editor />,
  document.getElementById('app')
);
