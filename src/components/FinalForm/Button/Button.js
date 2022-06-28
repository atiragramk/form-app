import React, { Component } from "react";

import { StyledInput } from "./styled";

export class Button extends Component {
  render() {

    const { type, children, disabled } = this.props;
    
    return (
      <StyledInput
        type={type}
        value={children}
        disabled={disabled}
      />
    );
  }
}
