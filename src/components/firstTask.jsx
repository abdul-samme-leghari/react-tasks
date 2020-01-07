import React, { Component } from "react";

class FirstTask extends Component {
  /*  getSelectedButtonBootstrap() {
    let classes = "m-5 ";
    classes +=
      this.props.selected.value === true ? "btn-secondry" : "btn-primary";
    return classes;
  } */

  getSelectedButtonCss() {
    let backgroundcolor = this.props.selected.value === true ? "white" : "blue";
    return backgroundcolor;
  }

  render() {
    //  let backgroundcolor = this.getSelectedButtonCss();
    const { selected } = this.props;
    return (
      <button
        style={{
          backgroundColor: this.getSelectedButtonCss(),
          width: "50px",
          height: "25px",
          marginLeft: "10px",
          marginTop: "50px",
          zIndex: 2,
          border: "1px solid #000"
        }}
        // className={this.getSelectedButtonBootstrap()}
        onClick={() => this.props.onHandleClick(selected)}
      >
        {selected.id}
      </button>
    );
  }
}

export default FirstTask;
