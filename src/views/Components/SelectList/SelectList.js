import React from "react";
import "./SelectList.scss";
import { Form } from "react-bootstrap";

export const SelectList = (props) => {
  return (
    <div className="select-list-sec">
      {props.labelText && (
        <label className="select-list-sec__label">
          <b>{props.labelText}</b>
          <span className="select-list-sec__label__spanText">
            {props.requiredText}
          </span>
        </label>
      )}
      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          className="timer-select-list common-scss-class"
        >
          <option value="1" className={`listofschool ${props.className}`}>
            {props.options ? props.options : " "}
          </option>
          <option value="1" className={`listofschool ${props.className}`}>
            {props.options ? props.options : " "}
          </option>
          <option value="1" className={`listofschool ${props.className}`}>
            {props.options ? props.options : " "}
          </option>
        </Form.Select>
      </Form.Group>
    </div>
  );
};

export const SelectListCoupan = (props) => {
  return (
    <div className="select-list-sec">
      {props.labelText && (
        <label className="select-list-sec__label">
          <b>{props.labelText}</b>
          <span className="select-list-sec__label__spanText">
            {props.requiredText}
          </span>
        </label>
      )}
      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          className="timer-select-list common-scss-class"
        >
          <option value="1" className="listofschool">
            Select Coupon Code
          </option>
          {/* <option value={props.value} className="listofschool"><b>{props.options ? props.options : " "}</b></option>
                    <option value="1" className="listofschool"><b>{props.options ? props.options : " "}</b></option> */}
        </Form.Select>
      </Form.Group>
    </div>
  );
};
