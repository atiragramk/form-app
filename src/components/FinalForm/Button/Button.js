import React, { Component } from "react";

import { Input } from "./Button.styled";

export class Button extends Component {
  render() {

    const { type, children, disabled } = this.props;
    
    return (
      <Input
        className={disabled ? "disabled" : null}
        type={type}
        value={children}
        disabled={disabled}
      />
    );
  }
}
