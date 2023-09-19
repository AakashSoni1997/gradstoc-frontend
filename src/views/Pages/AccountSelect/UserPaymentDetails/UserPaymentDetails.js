import React, { useState } from "react";
import "../UserSkill/UserSkill.scss";
import "../UserProfileDetails/UserProfileDetails.scss";
import "./UserPaymentDetails.scss";
import { Link } from "react-router-dom";

const UserPaymentDetails = () => {
  const [hideBtn, setHideBtn] = useState(false);
  const handleHideBtn = () => setHideBtn(false);
  return (
    <>
      <div className="user-skill-main-con">
        <div className="user-skill-main-con-inner">
          <div className="user-skill-main-con__text-con">
            <div className="user-skill-main-con__text-con__text">
              <b>Skills</b>
            </div>
          </div>
          <div className="user-skill-main-con__progress-bar-con">
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
          </div>
          <div className="user-skill-main-con__profile-detail-con">
            <div className="user-skill-main-con__profile-detail-con__head user-payment-align">
              <b>Verify payment method</b>
            </div>
            <div className="user-skill-main-con__profile-detail-con__text user-payment-align">
              Your payment method is used to verify your identity and helps
              build trust.
            </div>
          </div>
          <div className="user-skill-main-con__profile-payment-btn-con">
            {hideBtn ? (
              <Link to="/user-payment-method">
                <button className="user-skill-main-con__profile-payment-btn-con__btn">
                  Edit payment method
                </button>
              </Link>
            ) : (
              <Link to="/user-payment-method">
                <button
                  className="user-skill-main-con__profile-payment-btn-con__btn"
                  onClick={handleHideBtn}
                >
                  Verify payment method
                </button>
              </Link>
            )}
          </div>
          <div className="user-skill-main-con__profile-detail-btn-con">
            <Link to="/user-email-verification">
              <button className="user-skill-main-con__btn-con__back-btn">
                Back
              </button>
            </Link>
            {hideBtn ? (
              <button className="user-skill-main-con__profile-detail-btn-con__next-btn">
                Next
              </button>
            ) : (
              <Link to="/user-membership">
                <button className="user-skill-main-con__btn-con__next-btn payment-btn-text-color ">
                  Skip
                </button>
              </Link>
            )}
          </div>
        </div>
        <hr className="user-skill-hr" />
      </div>
    </>
  );
};
export default UserPaymentDetails;
