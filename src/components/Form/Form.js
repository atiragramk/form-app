import React, { Component } from "react";
import { Input, Button } from "./";
import { initialState } from "./utils";

import { StyledWrapper, StyledForm } from "./styled";

export class Form extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.passwordRef = React.createRef();
    this.confirmRef = React.createRef();
  }

  handleChange = (event) => {
    const property = event.target.name;
    const targetValue = event.target.value;
    const { fields } = this.state;
    const {
      [property]: { validator },
      password,
      confirm,
    } = fields;
    const error = validator(targetValue, password.value);
    if (property === "password") {
      const error = validator(targetValue);
      const confirmError = confirm.validator(confirm.value, targetValue);
      this.setState({
        fields: {
          ...fields,
          password: {
            ...password,
            value: targetValue,
            error: error,
            disabled: Boolean(error),
          },
          confirm: {
            ...confirm,
            error: confirmError,
            disabled: Boolean(confirmError),
          },
        },
      });
    } else {
      this.setState({
        fields: {
          ...fields,
          [property]: {
            ...fields[property],
            value: targetValue,
            error: error,
            disabled: Boolean(error),
          },
        },
      });
    }
  };

  handleDisable = () => {
    const { fields } = this.state;

    return Object.values(fields).some((field) => field.disabled);
  };

  handleToggleView = (event, id) => {
    event.preventDefault();
    const { fields } = this.state;
    const target = event.target;

    if (target.classList.contains("password-view")) {
      target.classList.toggle("password-view");
      this.setState({
        fields: {
          ...fields,
          [id]: { ...fields[id], type: "password" },
        },
      });
    } else {
      target.classList.toggle("password-view");
      this.setState({
        fields: {
          ...fields,
          [id]: { ...fields[id], type: "text" },
        },
      });
    }
  };

  handleReset = () => {
    this.setState({ fields: initialState.fields });
    this.passwordRef.current.classList.remove("password-view");
    this.confirmRef.current.classList.remove("password-view");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { fields } = this.state;
    const error = Object.values(fields).some((field) => field.error);
    if (error) {
      const updatedState = {};
      Object.entries(fields).forEach(([label, state]) => {
        const error = state.validator(state.value, state.password);
        updatedState[label] = { ...state, error };
      });

      this.setState({ fields: updatedState });
    } else {
      alert("Form is submitted");
      this.handleReset();
    }
  };

  render() {
    const { fields, reset, submit } = this.state;
    const disabled = this.handleDisable();

    return (
      <StyledForm onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <h2>Form</h2>
        {Object.entries(fields).map(([fieldName, state]) => {
          const {
            type,
            value,
            error,
            id,
            title,
            disabled,
            placeholder,
            label,
          } = state;
          return (
            <Input
              key={fieldName}
              label={label}
              type={type}
              value={value}
              error={error}
              id={id}
              title={title}
              required={disabled}
              placeholder={placeholder}
              onChange={this.handleChange}
              onBlur={this.handleChange}
              onToggleView={this.handleToggleView}
              passwordRef={this.passwordRef}
              confirmRef={this.confirmRef}
            />
          );
        })}
        <StyledWrapper>
          <Button type={reset} />
          <Button type={submit} disabled={disabled} />
        </StyledWrapper>
      </StyledForm>
    );
  }
}
