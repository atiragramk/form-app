import React, { Component } from "react";
import { Form } from "react-final-form";
import { Button, AField } from "./";
import { validators } from "./utils";
import { initialState } from "./constants";

import { StyledWrapper, StyledForm } from "./styled";

export class FinalForm extends Component {
  handleSubmit = (values) => {
    console.log(JSON.stringify(values));
  };

  render() {
    const { fields } = initialState;

    return (
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit, form: { reset, restart }, errors }) => {
          const disabled = Object.values(errors).length;
          return (
            <StyledForm
              onSubmit={() => {
                handleSubmit();
                reset();
              }}
              onReset={reset}
            >
              <h2>Final Form</h2>
              {Object.entries(fields).map(([fieldName, state]) => {
                const { type, id, label, placeholder, view } = state;
                return (
                  <AField
                    key={fieldName}
                    id={id}
                    type={type}
                    label={label}
                    placeholder={placeholder}
                    validate={validators[id]}
                    view={view}
                  />
                );
              })}
              <StyledWrapper>
                <Button type="reset">Reset</Button>
                <Button type="submit" disabled={disabled}>
                  Submit
                </Button>
              </StyledWrapper>
            </StyledForm>
          );
        }}
      />
    );
  }
}
