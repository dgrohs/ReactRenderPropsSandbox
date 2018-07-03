import React from "react";

/**
 * create a controlled component using the input the right way
 * to make it alert the value of the input
 */

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // TODO code something
  }

  handleChange(event) {
    // TODO code something
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            // TODO code something
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
