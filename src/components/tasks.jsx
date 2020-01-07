import React, { Component } from "react";
import FirstTask from "./firstTask";
import CheckInput from "./checkInput";
import ThirdTask from "./thirdTask";
import ToolTip from "./toolTip";

class Tasks extends Component {
  state = {
    selected: [
      { id: 1, value: false },
      { id: 2, value: false },
      { id: 3, value: false }
    ],
    colorName: ""
  };

  handleClick = selection => {
    let newSelected = [...this.state.selected];
    newSelected.forEach(ns => {
      ns.value = ns.id === selection.id ? true : false;
    });
    this.setState({ selected: newSelected });
  };
  handleChange = e => {
    // console.log(typeof e.target.value);
    // let colorName = e.target.value;
    this.setState({ colorName: e.target.value });
  };
  render() {
    return (
      <center>
        <ToolTip />
        {this.state.selected.map(s => (
          <FirstTask onHandleClick={this.handleClick} key={s.id} selected={s} />
        ))}
        <CheckInput
          onHandleChange={this.handleChange}
          colorName={this.state.colorName}
        />
        <ThirdTask />
      </center>
    );
  }
}

export default Tasks;
