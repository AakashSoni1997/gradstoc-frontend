import React, { useState } from "react";
import "../InputField/InputField.scss";
import "./PasswordInput.scss";

export const PasswordInput = (props) => {
  const [focused, setFocused] = useState(false);
  const handleChange = (e) => {
    setFocused(true);
  };
  return (
    <>
      <div className="inputText-sec input-text-sec-pass">
        {props.labelText && (
          <label className="inputText-sec__label">
            <b>{props.labelText}</b>
            <span className="inputText-sec__label__spanText">
              {props.requiredText}
            </span>
          </label>
        )}
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          defaultValue={props.defaultValue}
          className={props.className}
          placeholder={props.placeholder}
          id={props.id}
          onChange={props.onChange}
          onFocus={() => props.CPassword === true && setFocused(true)}
          onBlur={handleChange}
          hidden={props.isHidden}
          disabled={props.isDisabled}
          required={props.required}
          autoComplete="off"
          min={props.min}
          max={props.max}
          maxLength={props.maxLength}
          pattern={props.pattern}
          focused={focused.toString()}
          readOnly={props.readOnly}
        />
        {props.error && (
          <div className="error-text">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="#e74c3c">
              <path d="M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"></path>
            </svg>
            <span> {props.error} </span>
          </div>
        )}
      </div>
    </>
  );
};
