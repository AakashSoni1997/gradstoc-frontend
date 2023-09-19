import React from "react";
import "../UserSkill/UserSkill.scss";
import "../UserProfileDetails/UserProfileDetails.scss";
import "./UserEmailVerification.scss";
import { Link } from "react-router-dom";

const UserEmailVerification = () => {
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
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
          </div>
          <div className="user-skill-main-con__profile-detail-con">
            <div className="user-skill-main-con__profile-detail-con__head">
              <b>
                Almost there, lorem. Check your email to verify your account.
              </b>
            </div>
          </div>
          <div className="user-skill-main-con__profile-email-con">
            <div className="user-skill-main-con__profile-email-con__head">
              <b>loremipsum2038@gmail.com</b>
            </div>
            <div className="user-skill-main-con__profile-email-con__re-send">
              Resend email
            </div>
            <div className="user-skill-main-con__profile-email-con__change">
              Change email
            </div>
          </div>
          <div className="user-skill-main-con__profile-detail-btn-con">
            <Link to="/user-address">
              <button className="user-skill-main-con__btn-con__back-btn">
                Back
              </button>
            </Link>
            <Link to="/user-payment-details">
              <button className="user-skill-main-con__btn-con__next-btn">
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
export default UserEmailVerification;
