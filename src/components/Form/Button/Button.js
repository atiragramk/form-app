import React, { Component } from "react";
import "./button.scss";

export class Button extends Component {
  render() {
    const {
      type: { type, value },
      disabled,
    } = this.props;
    return (
      <input
        className={disabled ? "btn btn-disabled" : "btn"}
        type={type}
        value={value}
        disabled={disabled}
      ></input>
    );
  }
}
