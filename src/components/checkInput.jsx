import React, { Component } from "react";

class CheckInput extends Component {
  getGreenButtonColor() {
    let bgcolor = "white";
    if (this.props.colorName === "green") return (bgcolor = "green");

    return bgcolor;
  }
  getBlueButtonColor() {
    let bgcolor = "white";
    if (this.props.colorName === "blue") return (bgcolor = "blue");

    return bgcolor;
  }

  getRedButtonColor() {
    let bgcolor = "white";
    if (this.props.colorName === "red") return (bgcolor = "red");

    return bgcolor;
  }
  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: this.getGreenButtonColor(),
            width: "50px",
            height: "25px",
            marginLeft: "10px",
            marginTop: "50px",
            marginBottom: "10px",

            zIndex: 2
          }}
        >
          green
        </button>
        <button
          style={{
            backgroundColor: this.getRedButtonColor(),
            width: "50px",
            height: "25px",
            marginLeft: "10px",
            marginTop: "50px",
            marginBottom: "10px",

            zIndex: 2
          }}
        >
          red
        </button>
        <button
          style={{
            backgroundColor: this.getBlueButtonColor(),
            width: "50px",
            height: "25px",
            marginLeft: "10px",
            marginTop: "50px",
            marginBottom: "10px",
            zIndex: 2
          }}
        >
          blue
        </button>
        <form noValidate>
          <label htmlFor='age'>color</label>
          <input
            name='checkColor'
            type='text'
            onChange={this.props.onHandleChange}
            noValidate
          />
        </form>
      </div>
    );
  }
}

export default CheckInput;
