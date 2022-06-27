import React, { Component } from "react";
import { Form } from "react-final-form";
import { Input, Button } from "./";
import { initialState, validate } from "./utils";

import { StyledDiv, StyledForm } from "./styled";

export class FinalForm extends Component {
  
  handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };


  render() {
    const { fields } = initialState;

    return (
      <Form
        onSubmit={this.handleSubmit}
        validate={(values) => validate(values)}
        render={({ handleSubmit, form: { reset, restart }, errors }) => {
          const disabled = Object.values(errors).length;
          return (
            <StyledForm
              onSubmit={() => {handleSubmit(); restart()}}
              onReset={reset}
            >
              <h2>Final Form</h2>
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
              <StyledDiv>
                <Button type="reset">Reset</Button>
                <Button type="submit" disabled={disabled}>Submit</Button>
              </StyledDiv>
            </StyledForm>
          );
        }}
      />
    );
  }
}
