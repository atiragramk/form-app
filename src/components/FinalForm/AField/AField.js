import React, { Component } from "react";

import { Field } from "react-final-form";
import { Input, InputPassword } from "../";
import { StyledLabel, StyledWrapper } from "./styled";


export class AField extends Component {
  render() {
    const { type, id, label, placeholder, validate, view } = this.props;

    return (
      <StyledWrapper>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <Field
          name={id}
          id={id}
          inputType={type}
          label={label}
          view={view}
          placeholder={placeholder}
          validate={validate}
          component={type === "password" ? InputPassword : Input}
        ></Field>
      </StyledWrapper>
    );
  }
}
