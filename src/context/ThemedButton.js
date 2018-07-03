import React, { Component } from "react";
import withTheme from "./../hoc/withTheme";
import Button from "./../Button";

// this is a higher order component
const EnhancedButton = withTheme(Button);

class ThemedButton extends Component {
  render() {
    return <EnhancedButton {...this.props} />;
  }
}

export default ThemedButton;
