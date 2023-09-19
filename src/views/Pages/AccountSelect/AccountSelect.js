import React from "react";
import { Link } from "react-router-dom";
import "./AccountSelect.scss";

const AccountSelect = () => {
  const hireExpert = () => {
    localStorage.setItem("userType", 2);
  };
  const becomeExpert = () => {
    localStorage.setItem("userType", 3);
  };
  return (
    <>
      <div className="account-select-main-con">
        <div className="account-select-main-con__outer-con">
          <div className="account-select-main-con__content-con">
            <div className="account-select-main-con__content-con__head-con">
              <div className="account-select-main-con__content-con__head-con__img-con">
                <img src="./images/gradstoc_logo.png" alt="logo" />
              </div>
            </div>
            <div className="account-select-main-con__content-con__head-text-con">
              <div className="account-select-main-con__content-con__head-text-con__head">
                <b>Select Account Type</b>
              </div>
              <div className="account-select-main-con__content-con__head-text-con__para">
                Don’t worry, this can be changed later.
              </div>
            </div>
            <div className="account-select-main-con__content-con__hire-an-export-con">
              <Link to="/register" onClick={hireExpert}>
                <div className="account-select-main-con__content-con__hire-an-export-con__hire">
                  <div className="account-select-main-con__content-con__hire-an-export-con__hire__img-con">
                    <img
                      className="account-select-main-con__content-con__hire-an-export-con__hire__img-con__img"
                      src="./images/hireAnExpert.png"
                      alt="hire an expert"
                    />
                  </div>

                  <div className="account-select-main-con__content-con__hire-an-export-con__hire__text">
                    <b>Hire an Expert</b>
                  </div>
                  <div className="account-select-main-con__content-con__hire-an-export-con__hire__arrow-img">
                    <img
                      className="account-select-main-con__content-con__hire-an-export-con__hire__arrow-img"
                      src="./images/expert_arrow.png"
                      alt="expert_arrow"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="account-select-main-con__content-con__become-an-export-con">
              <Link to="/register" onClick={becomeExpert}>
                <div className="account-select-main-con__content-con__become-an-export-con__become">
                  <div className="account-select-main-con__content-con__become-an-export-con__become__img-con">
                    <img
                      className="account-select-main-con__content-con__become-an-export-con__become__img-con__img"
                      src="./images/BecomeAnExpert.png"
                      alt="beome an expert"
                    />
                  </div>
                  <div className="account-select-main-con__content-con__become-an-export-con__become__text">
                    <b>Become an Expert</b>
                  </div>
                  <div className="account-select-main-con__content-con__become-an-export-con__become__arrow-img">
                    <img
                      className="account-select-main-con__content-con__become-an-export-con__become__arrow-img"
                      src="./images/expert_arrow.png"
                      alt="expert_arrow"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AccountSelect;
