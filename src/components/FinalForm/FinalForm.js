import React, { Component } from "react";
import { Form } from "react-final-form";
import { Input, Button } from "./";
import { initialState, validate } from "./utils";

import { Wrapper, FormStyled } from "./Form.styled";

export class FinalForm extends Component {
  handleSubmit = async (values) => {
    alert(JSON.stringify(values));
  };

  render() {
    const { fields } = initialState;

    return (
      <Form
        onSubmit={this.handleSubmit}
        validate={(values) => validate(values)}
        render={({ handleSubmit, form: { restart }, errors }) => {
          const disabled = Object.values(errors).length;
          return (
            <FormStyled
              onSubmit={() => handleSubmit().then(restart)}
              onReset={restart}
            >
              <h2>Form</h2>
              {Object.entries(fields).map(([fieldName, state]) => {
                const { type, id, label, placeholder } = state;
                return (
                  <Input
                    key={fieldName}
                    id={id}
                    type={type}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              })}
              <Wrapper>
                <Button type="reset">Reset</Button>
                <Button type="submit" disabled={disabled}>
                  Submit
                </Button>
              </Wrapper>
            </FormStyled>
          );
        }}
      />
    );
  }
}
