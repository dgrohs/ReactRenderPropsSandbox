import React, { Component } from "react";
import Toolbar from "./Toolbar";
//import { ThemeContext, themes } from "./ThemeConte

// create a state named theme which has the light theme as default
// implement a method which toggles the state

// implement the Provider API and pass the value as theme

class Context extends Component {
  state = {
    // TODO code something
  };

  toggleTheme = () => {
    // TODO code something
  };

  render() {
    return (
      // TODO code something
      <Toolbar changeTheme={this.toggleTheme} />
      // TODO code something
    );
  }
}

export default Context;
