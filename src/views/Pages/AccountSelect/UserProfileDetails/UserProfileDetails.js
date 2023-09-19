import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../UserSkill/UserSkill.scss";
import "./UserProfileDetails.scss";

const UserProfileDetails = () => {
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
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
          </div>
          <div className="user-skill-main-con__profile-pic-con">
            <div className="user-skill-main-con__profile-pic-con__big-img-con">
              <img src="./images/big-small-cam.png" alt="circle" />
              <img
                src="./images/back-small-cam.png"
                alt="circle"
                className="user-skill-main-con__profile-pic-con__big-img-con__small-img"
              />
              <img
                src="./images/user-profile-cam.png"
                alt="cam"
                className="user-skill-main-con__profile-pic-con__big-img-con__cam-img"
              />
            </div>
            <div className="user-skill-main-con__profile-pic-con__small-img-con"></div>
            <div className="user-skill-main-con__profile-pic-con__cam-con"></div>
          </div>
          <div className="user-skill-main-con__profile-detail-con">
            <div className="user-skill-main-con__profile-detail-con__head">
              <b>What is your name?</b>
            </div>
            <div className="user-skill-main-con__profile-detail-con__text">
              Please use your real name as this will be required for identity
              verification.
            </div>
          </div>
          <div className="user-skill-main-con__profile-detail-form-con">
            <Form>
              <div className="user-skill-main-con__profile-detail-form-con__input-text-con">
                <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                  <b>First Name</b>
                </span>
                <input
                  type="text"
                  className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text "
                />
              </div>
              <div className="user-skill-main-con__profile-detail-form-con__input-text-con input-last-name">
                <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                  <b>Last name</b>
                </span>
                <input
                  type="text"
                  className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text "
                />
              </div>
            </Form>
          </div>
          <div className="user-skill-main-con__profile-detail-btn-con">
            <Link to="/user-skill">
              <button className="user-skill-main-con__btn-con__back-btn">
                Back
              </button>
            </Link>
            <Link to="/user-about-details">
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
export default UserProfileDetails;
