import React, { Component } from "react";
class ThirdTask extends Component {
  state = { age: null, ageError: "", borderColor: "" };
  handleAge = e => {
    let borderColor, errorMessage;
    if (e.target.value > 18) {
      borderColor = "green";
      errorMessage = "age is valid";
    }
    if (e.target.value < 18) {
      borderColor = "red";
      errorMessage = "age is not valid";
    }
    if (e.target.value === "") {
      borderColor = "";
      errorMessage = "";
    }
    this.setState({ ageError: errorMessage, age: e.target.value, borderColor });
  };
  render() {
    return (
      <div>
        <form noValidate>
          <label htmlFor='age'>Age</label>
          <input
            style={{
              borderColor: this.state.borderColor,
              marginTop: "10px"
            }}
            name='checkAge'
            type='number'
            onChange={this.handleAge}
            noValidate
          />
        </form>
        <span>
          {this.state.ageError !== "" && <span>{this.state.ageError}</span>}
        </span>
      </div>
    );
  }
}

export default ThirdTask;
