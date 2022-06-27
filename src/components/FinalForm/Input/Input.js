import { Field } from "react-final-form";
import React, { Component } from "react";

import { StyledInput, StyledError, StyledLabel, StyledWrapper, StyledLink } from "./styled";

export class Input extends Component {
  constructor() {
    super();
    this.passwordRef = React.createRef();
    this.inputRef = React.createRef();
  }

  handleToggleView = () => {
    const type = this.inputRef.current.type;
    if (type === "password") {
      this.passwordRef.current.classList.toggle("view");
      this.inputRef.current.type = "text";
    } else {
      this.passwordRef.current.classList.toggle("view");
      this.inputRef.current.type = "password";
    }
  };

  render() {
    const { label, placeholder, id, type} = this.props;
    return (
      <Field name={id}>
        {({ input, meta }) => {
          const { error, touched } = meta;
          return (
            <StyledWrapper className="wrapper">
              <StyledLabel htmlFor={id}>{label}</StyledLabel>
              <StyledInput
                {...input}
                className={error && touched && "input-error"}
                type={type}
                placeholder={placeholder}
                ref={this.inputRef}
              />
              {error && touched && <StyledError>{error}</StyledError>}
              {type === "password" && (
                <StyledLink
                  href="#"
                  ref={this.passwordRef}
                  onClick={this.handleToggleView}
                />
              )}
            </StyledWrapper>
          );
        }}
      </Field>
    );
  }
}
