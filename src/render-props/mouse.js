import React from "react";

// pass the current state as a render prop

export default class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
        <p>
          x: {this.state.x}, y: {this.state.y}
        </p>
        {this.props.render(this.state)}
      </div>
    );
  }
}
