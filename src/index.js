import React, { Component } from "react";
import ReactDOM from "react-dom";
//import Context from "./context/Context";
//import Form from "./controlled-components/Form";
import MouseTracker from "./render-props/mouse-tracker";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MouseTracker />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
