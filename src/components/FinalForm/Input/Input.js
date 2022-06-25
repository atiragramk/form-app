import { Field } from "react-final-form";
import React, { Component } from "react";

import { InputField, Error, Label, Wrapper, Link } from "./Input.styled";

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
    const { label, placeholder, id, type, value } = this.props;
    return (
      <Field name={id}>
        {({ input, meta }) => {
          const { error, touched } = meta;
          return (
            <Wrapper className="wrapper">
              <Label>{label}</Label>
              <InputField
                {...input}
                className={error && touched && "input-error"}
                type={type}
                placeholder={placeholder}
                ref={this.inputRef}
              />
              {error && touched && <Error>{error}</Error>}
              {type === "password" && (
                <Link
                  href="#"
                  ref={this.passwordRef}
                  onClick={this.handleToggleView}
                />
              )}
            </Wrapper>
          );
        }}
      </Field>
    );
  }
}
