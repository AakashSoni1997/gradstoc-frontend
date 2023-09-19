import React from "react";
import "./Button.scss";

export const ButtonColor = (props) => {
  return (
    <>
      <a href={props.link}>
        <button
          className={`btn-filled ${props.className}`}
          onClick={props.onClick}
          type
        >
          {props.buttonText}
        </button>
      </a>
    </>
  );
};
export const ButtonNoColor = (props) => {
  return (
    <>
      <button
        className={`btn-no-filled ${props.className}`}
        onClick={props.onClick}
      >
        {props.buttonText}
      </button>
    </>
  );
};
