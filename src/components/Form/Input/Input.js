import React, { Component } from "react";

import { StyledInput, StyledError, StyledLabel, StyledWrapper, StyledLink } from "./styled";


export class Input extends Component {
  render() {
    const {
      type,
      value,
      error,
      placeholder,
      required,
      id,
      title,
      label,
      passwordRef,
      confirmRef,
      onChange,
      onToggleView,
    } = this.props;
    return (
      <StyledWrapper >
        <StyledLabel htmlFor={id}>
          {label}
        </StyledLabel>
        <StyledInput
          className={error && "input-error"}
          value={value}
          placeholder={placeholder}
          name={id}
          type={type}
          id={id}
          onBlur={required ? onChange : null}
          onChange={onChange}
        />
        {title === "Password" && (
          <StyledLink
            href="#"
            className="password"
            ref={id === "confirm" ? confirmRef : passwordRef}
            onClick={(event) => onToggleView(event, id)}
          />
        )}
        {error && <StyledError>{error}</StyledError>}
      </StyledWrapper>
    );
  }
}
