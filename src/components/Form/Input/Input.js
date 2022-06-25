import React, { Component } from "react";

import "./input.scss";

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
      <div className="wrapper">
        <label className="label" htmlFor={id}>
          {label}
        </label>
        <input
          className={error ? `input input-errors` : "input"}
          value={value}
          placeholder={placeholder}
          name={id}
          type={type}
          id={id}
          onBlur={required ? onChange : null}
          onChange={onChange}
        />
        {title === "Password" && (
          <a
            href="#"
            className="password"
            ref={id === "confirm" ? confirmRef : passwordRef}
            onClick={(event) => onToggleView(event, id)}
          ></a>
        )}
        {error && <div className="error">{error}</div>}
      </div>
    );
  }
}
