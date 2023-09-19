import React from "react";
import "./CheckBox.scss";
import { Link } from "react-router-dom";

export const CheckBox = (props) => {
  return (
    <div className="check-box-sec">
      <label className="check-box-sec__checkbox-lable">
        <input type="checkbox" className="check-box-sec__checkbox" />
        {props.checkboxlable}
        <b>
          <Link className={props.className}>{props.linklable} </Link>
        </b>
        and
        <b>
          <Link className={props.className}> {props.linklable2}</Link>
        </b>
      </label>
    </div>
  );
};
