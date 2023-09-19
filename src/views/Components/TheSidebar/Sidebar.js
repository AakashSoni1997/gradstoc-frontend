import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { ButtonColor, ButtonNoColor } from "../Button/Button";

const SideBar = () => {
  const [dashboardactiveLink, setDashboardActiveLink] = useState("");
  const [studyresourcesactiveLink, setStudyresourcesActiveLink] = useState("");
  const [favoritesactiveLink, setFavoritesActiveLink] = useState("");
  const [jobsactiveLink, setJobsActiveLink] = useState("");
  const [ordersactiveLink, setOrdersActiveLink] = useState("");
  const [myprofileactiveLink, setMyprofileActiveLink] = useState("");
  const [expertsactiveLink, setExpertsActiveLink] = useState("");
  const [membershipactiveLink, setMembershipActiveLink] = useState("");
  const [billingInfoactiveLink, setBillingInfoActiveLink] = useState("");
  const [emailAndNotiactiveLink, setEmailAndNotiActiveLink] = useState("");
  const [profileSettingsactiveLink, setProfileSettingsActiveLink] =
    useState("");
  const [changePasswordactiveLink, setChangePasswordActiveLink] = useState("");
  const [purchaseCourseLink, setPurchaseCourseLink] = useState("");
  const [subNavbarSetting, setSubNavBarSetting] = useState(false);
  const [subNavbarAccount, setSubNavBarAccount] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const subNavbarToggleSetting = () => {
    setSubNavBarSetting(!subNavbarSetting);
    setSubNavBarAccount(false);
  };
  const subNavbarToggleAccount = () => {
    setSubNavBarAccount(!subNavbarAccount);
    setSubNavBarSetting(false);
  };

  const currentUrl =
    typeof window !== "undefined" ? window.location.pathname : "";
  let urlArray = currentUrl.split("/");
  useEffect(() => {
    if (urlArray[1] === "dashboard") {
      setDashboardActiveLink("active-class");
      setStudyresourcesActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
  }, [currentUrl, urlArray]);

  useEffect(() => {
    if (urlArray[1] === "studyresources") {
      setStudyresourcesActiveLink("active-class");
      setDashboardActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
    if (urlArray[1] === "favorites") {
      setFavoritesActiveLink("active-class");
      setStudyresourcesActiveLink();
      setDashboardActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
    if (urlArray[1] === "purchase-course") {
      setPurchaseCourseLink("active-class");
      setStudyresourcesActiveLink();
      setDashboardActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
    }
    if (urlArray[1] === "jobs") {
      setJobsActiveLink("active-class");
      setStudyresourcesActiveLink();
      setDashboardActiveLink();
      setFavoritesActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
    if (urlArray[1] === "orders") {
      setOrdersActiveLink("active-class");
      setStudyresourcesActiveLink();
      setDashboardActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
    if (urlArray[1] === "myprofile") {
      setMyprofileActiveLink("active-class");
      setDashboardActiveLink();
      setStudyresourcesActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
    if (urlArray[1] === "experts") {
      setExpertsActiveLink("active-class");
      setDashboardActiveLink();
      setStudyresourcesActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
    if (urlArray[1] === "membership") {
      setMembershipActiveLink("active-class");
      setDashboardActiveLink();
      setStudyresourcesActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
    if (urlArray[1] === "billing-info") {
      setBillingInfoActiveLink("active-class");
      setDashboardActiveLink();
      setStudyresourcesActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
    if (urlArray[1] === "emailandnotification") {
      setEmailAndNotiActiveLink("active-class");
      setDashboardActiveLink();
      setStudyresourcesActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setProfileSettingsActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
    if (urlArray[1] === "profile-setting") {
      setProfileSettingsActiveLink("active-class");
      setDashboardActiveLink();
      setStudyresourcesActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setChangePasswordActiveLink();
      setPurchaseCourseLink();
    }
    if (urlArray[1] === "change-password") {
      setChangePasswordActiveLink("active-class");
      setDashboardActiveLink();
      setStudyresourcesActiveLink();
      setFavoritesActiveLink();
      setJobsActiveLink();
      setOrdersActiveLink();
      setMyprofileActiveLink();
      setExpertsActiveLink();
      setMembershipActiveLink();
      setBillingInfoActiveLink();
      setEmailAndNotiActiveLink();
      setProfileSettingsActiveLink();
      setPurchaseCourseLink();
    }
  }, [currentUrl, urlArray]);

  return (
    <aside id="sidebar" className="sidebar">
      <div className="sidebar-top">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item  ">
            <Link className="nav-link " to="/dashboard">
              {dashboardactiveLink ? (
                <img src="images/icon_earning-color.svg" alt="earning" />
              ) : (
                <img src="images/icon_earning.svg" alt="earning" />
              )}
              <span
                className={[`no-active-class`, dashboardactiveLink].join(" ")}
              >
                <b>Earnings</b>
              </span>
            </Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link" to="/studyresources">
              {studyresourcesactiveLink ? (
                <img src="images/icon_study-color.svg" alt="study resource" />
              ) : (
                <img src="images/icon_study.svg" alt="study resource" />
              )}

              <span
                className={[`no-active-class`, studyresourcesactiveLink].join(
                  " "
                )}
              >
                <b>Study Resources</b>
              </span>
            </Link>
          </li>

          <li className="nav-item ">
            <Link className="expert-nav-link" to="/purchase-course">
              {purchaseCourseLink ? (
                <img
                  src="images/purchasecourse-color.png"
                  alt="Purchase Course"
                  className="purchase-course-img-width"
                />
              ) : (
                <img
                  src="images/purchasecourse-no-colors.svg"
                  alt="Purchase Course"
                />
              )}

              <span
                className={[`no-active-class`, purchaseCourseLink].join(" ")}
              >
                <b>Purchase Course</b>
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/favorites">
              {favoritesactiveLink ? (
                <img
                  src="images/icon_favorite_course-color.svg"
                  alt="favorite"
                />
              ) : (
                <img src="images/icon_favorite_course.svg" alt="favorite" />
              )}

              <span
                className={[`no-active-class`, favoritesactiveLink].join(" ")}
              >
                <b>Favorite Course</b>
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/jobs">
              {jobsactiveLink ? (
                <img src="images/icon_jobs-color.svg" alt="jobs" />
              ) : (
                <img src="images/icon_jobs.svg" alt="jobs" />
              )}

              <span className={[`no-active-class`, jobsactiveLink].join(" ")}>
                <b>Jobs</b>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/orders">
              {ordersactiveLink ? (
                <img src="images/icon_order-color.svg" alt="orders" />
              ) : (
                <img src="images/icon_order.svg" alt="orders" />
              )}

              <span className={[`no-active-class`, ordersactiveLink].join(" ")}>
                <b>Orders</b>
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/myprofile">
              {myprofileactiveLink ? (
                <img src="images/icon_profile-color.svg" alt="profile" />
              ) : (
                <img src="images/icon_profile.svg" alt="profile" />
              )}

              <span
                className={[`no-active-class`, myprofileactiveLink].join(" ")}
              >
                <b>Profile</b>
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="expert-nav-link" to="/experts">
              {expertsactiveLink ? (
                <img
                  src="images/icon_become_an_expert-color.svg"
                  alt="expert"
                />
              ) : (
                <img src="images/icon_become_an_expert.svg" alt="expert" />
              )}

              <span
                className={[`expert-no-active-class`, expertsactiveLink].join(
                  " "
                )}
              >
                <b>Become An Expert</b>
              </span>
            </Link>
          </li>

          <li className="nav-item my-cursor">
            <div className="nav-link" onClick={subNavbarToggleAccount}>
              {membershipactiveLink ||
              billingInfoactiveLink ||
              emailAndNotiactiveLink ? (
                <img src="images/icon_account-color.svg" alt="account" />
              ) : (
                <img src="images/icon_account.svg" alt="account" />
              )}

              <span
                className={[
                  `no-active-class `,
                  membershipactiveLink ||
                    billingInfoactiveLink ||
                    emailAndNotiactiveLink,
                ].join(" ")}
              >
                <b>Account</b>
              </span>
              <div className="closed-icon-con">
                {subNavbarAccount ? (
                  <img src="./images/openIcon.svg" alt="open Icon" />
                ) : (
                  <img src="./images/closedIcon.svg" alt="closed Icon" />
                )}
              </div>
            </div>
            {subNavbarAccount ? (
              <ul>
                <li className="nav-item">
                  <Link className="nav-link sub-nav-link" to="/membership">
                    <span
                      className={[
                        `sub-no-active-class`,
                        membershipactiveLink,
                      ].join(" ")}
                    >
                      <b>Membership</b>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link sub-nav-link" to="/billing-info">
                    <span
                      className={[
                        `sub-no-active-class`,
                        billingInfoactiveLink,
                      ].join(" ")}
                    >
                      <b>Billing information</b>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link sub-nav-link"
                    to="/emailandnotification"
                  >
                    <span
                      className={[
                        `sub-no-active-class`,
                        emailAndNotiactiveLink,
                      ].join(" ")}
                    >
                      <b>Email & Notifications</b>
                    </span>
                  </Link>
                </li>
              </ul>
            ) : null}
          </li>

          <li className="nav-item my-cursor">
            <div className="nav-link" onClick={subNavbarToggleSetting}>
              {profileSettingsactiveLink || changePasswordactiveLink ? (
                <img src="images/icon_setting-color.svg" alt="settings" />
              ) : (
                <img src="images/icon_setting.svg" alt="settings" />
              )}

              <span
                className={[
                  `no-active-class`,
                  changePasswordactiveLink || profileSettingsactiveLink,
                ].join(" ")}
              >
                <b>Settings</b>
              </span>
              <div className="closed-icon-con">
                {subNavbarSetting ? (
                  <img src="./images/openIcon.svg" alt="open Icon" />
                ) : (
                  <img src="./images/closedIcon.svg" alt="closed Icon" />
                )}
              </div>
            </div>
            {subNavbarSetting ? (
              <ul>
                <li className="nav-item">
                  <Link className="nav-link sub-nav-link" to="/profile-setting">
                    <span
                      className={[
                        `sub-no-active-class`,
                        profileSettingsactiveLink,
                      ].join(" ")}
                    >
                      <b>Profile Setting</b>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link sub-nav-link" to="/change-password">
                    <span
                      className={[
                        `sub-no-active-class`,
                        changePasswordactiveLink,
                      ].join(" ")}
                    >
                      <b>Change Password</b>
                    </span>
                  </Link>
                </li>
              </ul>
            ) : null}
          </li>
          <li className="nav-item my-cursor">
            <div className="nav-link" onClick={handleShow}>
              <img src="images/icon_logout.svg" alt="logout" />
              <span className="no-active-class">
                <b>Logout</b>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="logout-model-con"
      >
        <Modal.Body>
          <div className="logout-con">
            <div className="logout-con__text-con">
              <div className="logout-con__text-con__head">
                <b>Logout </b>
              </div>
              <div className="logout-con__text-con__img-con">
                <img
                  src="./images/Crossbtn.svg"
                  alt="Cross btn"
                  onClick={handleClose}
                />
              </div>
            </div>
            <div className="logout-con__congo-con">
              <div className="logout-con__congo-con__text">
                <b>Logout Confirmation</b>
              </div>
            </div>
            <div className="logout-con__congo-con-text">
              Are you sure you want to logout Gradstoc
            </div>
            <div className="logout-con__btn-con">
              <ButtonNoColor
                buttonText="Cancel"
                onClick={handleClose}
                className="btn-no-filled-margin"
              />
              <ButtonColor buttonText="Logout" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </aside>
  );
};

export default SideBar;
