import React, { useState } from "react";
import "../UserSkill/UserSkill.scss";
import "../UserProfileDetails/UserProfileDetails.scss";
import "../UserPaymentDetails/UserPaymentDetails.scss";
import { Link } from "react-router-dom";

const UserMembership = () => {
  const [hideBtn, setHideBtn] = useState(false);
  const handleHideBtn = () => setHideBtn(false);


  console.warn(handleHideBtn,"handleHideBtn");
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
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
          </div>
          <div className="user-skill-main-con__profile-detail-con">
            <div className="user-skill-main-con__profile-detail-con__head user-payment-align">
              <b>Get Plus Membership today</b>
            </div>
            <div className="user-skill-main-con__profile-detail-con__text user-payment-align">
              Freelancers with Plus Membership are 227% more likely to win
              projects.*
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
              <Link>
                <button className="user-skill-main-con__profile-payment-btn-con__btn">
                  Start your free month
                </button>
              </Link>
            )}
          </div>
          <div className="user-skill-main-con__profile-detail-btn-con">
            <Link to="/user-payment-details">
              <button className="user-skill-main-con__btn-con__back-btn">
                Back
              </button>
            </Link>
            {hideBtn ? (
              <button className="user-skill-main-con__profile-detail-btn-con__next-btn">
                Next
              </button>
            ) : (
              <Link to="/">
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
export default UserMembership;
