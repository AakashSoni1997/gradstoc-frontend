import React from "react";
import "./InputField.scss";

export const InputField = (props) => {
  return (
    <>
      <div className="inputText-sec">
        {props.labelText && (
          <label className="inputText-sec__label">
            <b>{props.labelText}</b>
            <span className="inputText-sec__label__spanText">
              {props.requiredText}
            </span>
          </label>
        )}
        <div className="inputText-sec__inputField-con">
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            defaultValue={props.defaultValue}
            className={`form-control inputText-sec__inputField-con__inputText ${props.className}`}
            placeholder={props.placeholder}
            id={props.id}
            onChange={props.onChange}
            // onBlur={handleChange}
            hidden={props.isHidden}
            disabled={props.isDisabled}
            required={props.required}
            autoComplete="off"
            min={props.min}
            max={props.max}
            maxLength={props.maxLength}
            pattern={props.pattern}
            readOnly={props.readOnly}
          />
        </div>
      </div>
    </>
  );
};
