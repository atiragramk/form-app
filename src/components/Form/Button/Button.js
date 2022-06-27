import React, { Component } from "react";

import { StyledInput } from "./styled";


export class Button extends Component {
  render() {
    const {
      type: { type, value },
      disabled,
    } = this.props;
    return (
      <StyledInput
        className={disabled ? "btn btn-disabled" : "btn"}
        type={type}
        value={value}
        disabled={disabled}
      />
    );
  }
}
