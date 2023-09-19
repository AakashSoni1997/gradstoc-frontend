import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../Components/TheHeader/Header.scss";
import "./UserSkill.scss";

const UserSkill = () => {
  const [businessCate, setBusinessCate] = useState(false);
  const [medicineCate, setMedicineCate] = useState(false);

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
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
          </div>
          <div className="user-skill-main-con__head-con">
            <div className="user-skill-main-con__head-con__text-con">
              <div className="user-skill-main-con__head-con__text-con__head">
                <b>Tell us your top skills</b>
              </div>
              <div className="user-skill-main-con__head-con__text-con__text">
                This helps us recommend jobs for you.
              </div>
            </div>
            <div className="user-skill-main-con__head-con__search-con">
              <div className="headerSearchBx">
                <input
                  placeholder="Search By ..."
                  aria-label="Search"
                  type="search"
                  class="me-2 user-skill-search_header form-control"
                />
                <div className="search_header_icon"></div>
              </div>
            </div>
          </div>
          <hr className="user-skill-hr" />
          <div className="user-skill-main-con__category-con">
            <div className="row">
              <div className="col-md-4">
                <div className="user-skill-main-con__category-con__select-category-con">
                  <div className="user-skill-main-con__category-con__select-category-con__head">
                    <b>Select a category</b>
                  </div>
                  <hr className="user-skill-hr" />
                  {/* <div className="user-skill-main-con__category-con__select-category-con__head--con">
                                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                                            Business
                                        </div>
                                        <img
                                            src="./images/user-skill-arrow.svg"
                                            alt="arrow"
                                            className="user-skill-main-con__category-con__select-category-con__head--con__arrow" />
                                    </div>
                                    <hr className="user-skill-hr" />
                                    <div className="user-skill-main-con__category-con__select-category-con__head--con">
                                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">

                                            Medicine & Health
                                        </div>
                                        <img
                                            src="./images/user-skill-arrow.svg"
                                            alt="arrow"
                                            className="user-skill-main-con__category-con__select-category-con__head--con__arrow" />
                                    </div>
                                    <hr className="user-skill-hr" />
                                    <div className="user-skill-main-con__category-con__select-category-con__head--con">
                                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">

                                            Math
                                        </div>
                                        <img
                                            src="./images/user-skill-arrow.svg"
                                            alt="arrow"
                                            className="user-skill-main-con__category-con__select-category-con__head--con__arrow" />
                                    </div>
                                    <hr className="user-skill-hr" />
                                    <div className="user-skill-main-con__category-con__select-category-con__head--con">
                                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                                            Accounting
                                        </div>
                                        <img
                                            src="./images/user-skill-arrow.svg"
                                            alt="arrow"
                                            className="user-skill-main-con__category-con__select-category-con__head--con__arrow" />
                                    </div>
                                    <hr className="user-skill-hr" />
                                    <div className="user-skill-main-con__category-con__select-category-con__head--con">
                                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                                            Computer Science
                                        </div>
                                        <img
                                            src="./images/user-skill-arrow.svg"
                                            alt="arrow"
                                            className="user-skill-main-con__category-con__select-category-con__head--con__arrow" />
                                    </div>
                                    <hr className="user-skill-hr" />
                                    <div className="user-skill-main-con__category-con__select-category-con__head--con">
                                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">

                                            Engineering
                                        </div>
                                        <img
                                            src="./images/user-skill-arrow.svg"
                                            alt="arrow"
                                            className="user-skill-main-con__category-con__select-category-con__head--con__arrow" />
                                    </div>
                                    <hr className="user-skill-hr" />
                                    <div className="user-skill-main-con__category-con__select-category-con__head--con">
                                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">


                                            Education
                                        </div>
                                        <img
                                            src="./images/user-skill-arrow.svg"
                                            alt="arrow"
                                            className="user-skill-main-con__category-con__select-category-con__head--con__arrow" />
                                    </div>
                                    <hr className="user-skill-hr" />
                                    <div className="user-skill-main-con__category-con__select-category-con__head--con">
                                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                                            Psychology
                                        </div>
                                        <img
                                            src="./images/user-skill-arrow.svg"
                                            alt="arrow"
                                            className="user-skill-main-con__category-con__select-category-con__head--con__arrow" />
                                    </div>
                                    <hr className="user-skill-hr" />
                                    <div className="user-skill-main-con__category-con__select-category-con__head--con">
                                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                                            Biology
                                        </div>
                                        <img
                                            src="./images/user-skill-arrow.svg"
                                            alt="arrow"
                                            className="user-skill-main-con__category-con__select-category-con__head--con__arrow" />
                                    </div>
                                    <hr className="user-skill-hr" />
                                    <div className="user-skill-main-con__category-con__select-category-con__head--con">
                                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                                            Economics
                                        </div>
                                        <img
                                            src="./images/user-skill-arrow.svg"
                                            alt="arrow"
                                            className="user-skill-main-con__category-con__select-category-con__head--con__arrow" />
                                    </div> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-skill-main-con__category-con__no-select-category-con">
                  <div className="user-skill-main-con__category-con__no-select-category-con__head">
                    <b>No category selected</b>
                  </div>
                  <hr className="user-skill-hr" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-skill-main-con__category-con__select-skill-con">
                  <div className="user-skill-main-con__category-con__select-skill-con__head">
                    <b>0 skills selected</b>
                  </div>
                  <hr className="user-skill-hr" />
                </div>
              </div>
            </div>
          </div>
          <div className="user-skill-main-con__btn-con">
            <Link to="/account-select">
              <button className="user-skill-main-con__btn-con__back-btn">
                Back
              </button>
            </Link>
            <Link to="/user-profile-details">
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
export default UserSkill;
