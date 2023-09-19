import React from "react";
import "./Title.scss";

export const Title = (props) => {
  return (
    <>
      <div className="title-sec">
        <div className="title-sec__head-con">
          <div className="title-sec__head-con__head">
            <b>{props.headtitle}</b>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
