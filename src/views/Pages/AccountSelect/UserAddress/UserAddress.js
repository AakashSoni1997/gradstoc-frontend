import React from "react";
import { Form } from "react-bootstrap";
import "../UserSkill/UserSkill.scss";
import "../UserProfileDetails/UserProfileDetails.scss";
import "./UserAddress.scss";
import { Link } from "react-router-dom";

const UserAddress = () => {
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
            <div className="user-skill-main-con__progress-bar-con__pro-bar  pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
          </div>
          <div className="user-skill-main-con__profile-detail-con">
            <div className="user-skill-main-con__profile-detail-con__head">
              <b>Where are you located?</b>
            </div>
            <div className="user-skill-main-con__profile-detail-con__text">
              Please use your real address as this will be used for identity
              verification. Only your city and country will be shown publicly.
            </div>
          </div>
          <div className="user-skill-main-con__profile-detail-form-con">
            <Form>
              <div className="row">
                <div className="col-md">
                  <div className="user-skill-main-con__profile-detail-form-con__input-text-con">
                    <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                      <b>Location</b>
                    </span>
                    <input
                      type="text"
                      className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text "
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md">
                  <div className="user-skill-main-con__profile-detail-form-con__input-text-con user-address-input-con">
                    <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                      <b>City</b>
                    </span>
                    <input
                      type="text"
                      className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text "
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="user-skill-main-con__profile-detail-form-con__input-text-con user-address-input-con">
                    <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                      <b>State / Province</b>
                    </span>
                    <input
                      type="text"
                      className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text "
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="user-skill-main-con__profile-detail-form-con__input-text-con user-address-input-con">
                    <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                      <b>ZIP / Post Code</b>
                    </span>
                    <input
                      type="text"
                      className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text "
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md">
                  <div className="user-skill-main-con__profile-detail-form-con__input-text-con user-address-input-con">
                    <span className="user-skill-main-con__profile-detail-form-con__input-text-con__lable">
                      <b>Country</b>
                    </span>
                    <input
                      type="text"
                      className=" form-control user-skill-main-con__profile-detail-form-con__input-text-con__user-profile-input-text "
                    />
                  </div>
                </div>
              </div>
            </Form>
          </div>
          <div className="user-skill-main-con__profile-detail-btn-con">
            <Link to="/user-profile-more-details">
              <button className="user-skill-main-con__btn-con__back-btn">
                Back
              </button>
            </Link>
            <Link to="/user-email-verification">
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
export default UserAddress;
