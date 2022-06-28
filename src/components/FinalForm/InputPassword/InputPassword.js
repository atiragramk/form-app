import React, { Component } from "react";

import { StyledInput, StyledError, StyledLink } from "./styled";

export class InputPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.inputType,
      view: this.props.view,
    };
  }

  handleToggleView = () => {
    const { view } = this.state;
    if (view) {
      this.setState({ type: "password", view: !view });
    } else {
      this.setState({ type: "text", view: !view });
    }
  };

  render() {
    const { placeholder, meta, input } = this.props;
    const { touched, error } = meta;
    const { type, view } = this.state;
    
    return (
      <>
        <StyledInput
          {...input}
          type={type}
          placeholder={placeholder}
          error={error && touched}
        />
        {error && touched && <StyledError>{error}</StyledError>}
        <StyledLink
          href="#"
          view={view}
          onClick={(event) => this.handleToggleView(event)}
        />
      </>
    );
  }
}
