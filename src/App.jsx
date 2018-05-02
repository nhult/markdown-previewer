import React, { Component } from "react";
import "./App.css";

const marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <InputField
          onInputChange={this.onInputChange}
          value={this.state.input}
        />
        <Preview markdown={this.state.input} />
      </div>
    );
  }
}

const InputField = ({ onInputChange }, props) => {
  return (
    <textarea
      id="markdown-input"
      rows="4"
      cols="50"
      onChange={onInputChange}
      value={props.value}
    />
  );
};

const Preview = props => {
  const createMarkup = () => {
    return { __html: marked(props.markdown) };
  };

  return <div id="markdown-preview" dangerouslySetInnerHTML={createMarkup()} />;
};

export default App;
