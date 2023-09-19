import React from "react";
import { Form } from "react-bootstrap";
import "../UserSkill/UserSkill.scss";
import "../UserProfileDetails/UserProfileDetails.scss";
import "./UserAboutDetails.scss";
import { Link } from "react-router-dom";

const UserAboutDetails = () => {
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
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
          </div>
          <div className="user-skill-main-con__profile-detail-con">
            <div className="user-skill-main-con__profile-detail-con__head">
              <b>Tell us a bit about yourself</b>
            </div>
            <div className="user-skill-main-con__profile-detail-con__text">
              Fill out your profile for clients to better understand your
              services.
            </div>
            <div className="user-skill-main-con__profile-detail-con__head user-profile-about-head">
              <b>What do you do?</b>
            </div>
          </div>
          <div className="user-skill-main-con__profile-detail-form-con">
            <Form>
              <div className="user-skill-main-con__profile-detail-form-con__input-text-con">
                <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                  <b>Write a one line description about yourself.</b>
                </span>
                <input
                  type="text"
                  className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text "
                />
              </div>
              <div className="user-skill-main-con__profile-detail-form-con__input-text-con input-last-name">
                <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                  <b>Describe yourself</b>
                </span>
                <textarea
                  type="text"
                  className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text 
                                     user-profile-about-describe-yourself
                                    "
                />
              </div>
            </Form>
          </div>
          <div className="user-skill-main-con__profile-detail-btn-con">
            <Link to="/user-profile-details">
              <button className="user-skill-main-con__btn-con__back-btn">
                Back
              </button>
            </Link>
            <Link to="/user-profile-more-details">
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
export default UserAboutDetails;
