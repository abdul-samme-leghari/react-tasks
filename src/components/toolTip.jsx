import React, { Component } from "react";
import "./toolTip.css";
class ToolTip extends Component {
  state = {
    link: "",
    linkVisible: "block",
    addLinkVisible: "none"
  };
  handleClick = e => {
    e.preventDefault();
    this.setState({ addLinkVisible: "block", linkVisible: "none" });
  };
  handleAddlink = e => {
    e.preventDefault();
    this.setState({
      addLinkVisible: "none",
      linkVisible: "block",
      link: this.inputLink.value
    });
    this.inputLink.value = "";
  };
  render() {
    return (
      <div>
        <a
          style={{
            display: this.state.linkVisible,
            textDecoration: "none"
          }}
          href={this.state.link}
          className='button'
          onClick={this.handleClick}
        >
          Add link{" "}
        </a>
        <div
          style={{
            display: this.state.addLinkVisible
          }}
        >
          <form noValidate>
            <input
              name='addLink'
              type='text'
              ref={input => (this.inputLink = input)}
              noValidate
            />
            <button type='submit' onClick={this.handleAddlink}>
              +
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ToolTip;
