import React from "react";

export default class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="https://uploads.codesandbox.io/uploads/user/000ca664-e10d-44d0-9f41-fdbe2a606ffc/M_UY-placeimg_640_480_animals.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}



