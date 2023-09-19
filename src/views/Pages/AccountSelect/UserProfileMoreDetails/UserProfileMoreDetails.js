import React from "react";
import { Form } from "react-bootstrap";
import "../UserSkill/UserSkill.scss";
import "../UserProfileDetails/UserProfileDetails.scss";
import "./UserProfileMoreDetails.scss";
import { Link } from "react-router-dom";

const UserProfileMoreDetails = () => {
  return (
    <>
      <div className="user-skill-main-con">
        <div className="user-skill-main-con-inner">
          <div className="user-skill-main-con__text-con">
            <div className="user-skill-main-con__text-con__text">
              <b>Profile Details</b>
            </div>
          </div>
          <div className="user-skill-main-con__progress-bar-con">
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
          </div>
          <div className="user-skill-main-con__profile-detail-con">
            <div className="user-skill-main-con__profile-detail-con__head">
              <b>What languages do you speak?</b>
            </div>
          </div>
          <div className="user-skill-main-con__profile-detail-form-con">
            <Form>
              <div className="user-skill-main-con__profile-detail-form-con__input-text-con">
                <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                  <b>
                    We will use this to help match you with emplovers who are
                    fluent in these languages.
                  </b>
                </span>
                <input
                  type="text"
                  className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text "
                />
              </div>
              <div className="user-skill-main-con__profile-detail-con">
                <div className="user-skill-main-con__profile-detail-con__head">
                  <b>When were you born ?</b>
                </div>
              </div>
              <div className="user-skill-main-con__profile-detail-form-con__input-text-con input-last-name date-icon-con-outer">
                <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                  <b>
                    You need to be at least 16 years old to use the website.
                    This information will be used for verification and will be
                    kept confidential.
                  </b>
                </span>
                <input
                  type="text"
                  className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text
                                     date-input-con 
                                    "
                  placeholder="MM/DD/YYYY"
                />
                <div className="date-icon-con">
                  <img src="./images/date-icon.svg" alt="date-icon" />
                </div>
              </div>
            </Form>
          </div>
          <div className="user-skill-main-con__profile-detail-btn-con">
            <Link to="/user-about-details">
              <button className="user-skill-main-con__btn-con__back-btn">
                Back
              </button>
            </Link>
            <Link to="/user-address">
              <button className="user-skill-main-con__profile-detail-btn-con__next-btn">
                Next
              </button>
            </Link>
          </div>
        </div>
        <hr className="user-skill-hr" />
      </div>
    </>
  );
};
export default UserProfileMoreDetails;
