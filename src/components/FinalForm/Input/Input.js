import React, { Component } from "react";

import { StyledInput, StyledError } from "./styled";

export class Input extends Component {

  render() {
    const { placeholder, inputType, input, meta } = this.props;
    const { touched, error } = meta;

    return (
      <>
        <StyledInput
          {...input}
          type={inputType}
          placeholder={placeholder}
          error={error && touched}
        />
        {error && touched && <StyledError>{error}</StyledError>}
      </>
    );
  }
}
