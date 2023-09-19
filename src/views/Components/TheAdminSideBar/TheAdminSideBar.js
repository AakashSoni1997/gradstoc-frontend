import React, { useEffect, useState } from "react";
import "./TheAdminSideBar.scss";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ProfilePic from "../../../Assets/images/admin-profile.png";
import whiteArrowUp from "../../../Assets/images/white_Up_Arrow.svg";
import whiteArrowDown from "../../../Assets/images/white_Down_Arrow.svg";

const AdminSideBar = () => {
  const [subNavbarSetting, setSubNavBarSetting] = useState(false);
  const [subNavbarJobs, setSubNavBarJobs] = useState(false);
  const [show, setShow] = useState(false);
  const [adminDashboardActiveLink, setAdminDashboardActiveLink] = useState("");
  const [adminUserActiveLink, setAdminUserActiveLink] = useState("");
  const [adminPendingJobsActiveLink, setAdminPendingJobsActiveLink] =
    useState("");
  const [adminCurrrntJobsActiveLink, setAdminCurrrntJobsActiveLink] =
    useState("");
  const [adminPastJobsActiveLink, setAdminPastJobsActiveLink] = useState("");
  const [adminClosedJobsActiveLink, setAdminClosedJobsActiveLink] =
    useState("");
  const [adminStudyResourcesActiveLink, setAdminStudyResourcesActiveLink] =
    useState("");
  const [adminPagesActiveLink, setAdminPagesActiveLink] = useState("");
  const [adminSubscriptionActiveLink, setAdminSubscriptionActiveLink] =
    useState("");
  const [adminOrdersActiveLink, setAdminOrdersActiveLink] = useState("");
  const [adminDisputesActiveLink, setAdminDisputeActiveLink] = useState("");
  const [adminReviewsActiveLink, setAdminReviewsActiveLink] = useState("");
  const [adminPayoutsActiveLink, setAdminPayoutsActiveLink] = useState("");
  const [adminReportsActiveLink, setAdminReportsActiveLink] = useState("");
  const [adminBlogsActiveLink, setAdminBlogsActiveLink] = useState("");
  const [adminCouponsActiveLink, setAdminCouponsActiveLink] = useState("");
  const [adminBannedWordsActiveLink, setAdminBannedWordsActiveLink] =
    useState("");
  const [adminEmailActiveLink, setAdminEmailActiveLink] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const subNavbarToggleSetting = () => {
    setSubNavBarSetting(!subNavbarSetting);
    setSubNavBarJobs(false);
  };
  const subNavbarToggleJobs = () => {
    setSubNavBarJobs(!subNavbarJobs);
    setSubNavBarSetting(false);
  };

  const currentUrl =
    typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    if (
      currentUrl === "/admin" ||
      currentUrl === "/admin/" ||
      currentUrl === "/Admin/" ||
      currentUrl === "/Admin"
    ) {
      setAdminDashboardActiveLink("active-class");
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (currentUrl === "/admin/users" || currentUrl === "/admin/users/") {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink("active-class");
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (
      currentUrl === "/admin/pending-jobs" ||
      currentUrl === "/admin/pending-jobs/"
    ) {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink("active-class");
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (
      currentUrl === "/admin/current-jobs" ||
      currentUrl === "/admin/current-jobs/"
    ) {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink("active-class");
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (
      currentUrl === "/admin/past-jobs" ||
      currentUrl === "/admin/past-jobs/"
    ) {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink("active-class");
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (
      currentUrl === "/admin/closed-jobs" ||
      currentUrl === "/admin/closed-jobs/"
    ) {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink("active-class");
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (
      currentUrl === "/admin/study-resources" ||
      currentUrl === "/admin/study-resources/"
    ) {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink("active-class");
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (currentUrl === "/admin/pages" || currentUrl === "/admin/pages/") {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink("active-class");
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (
      currentUrl === "/admin/subscriptions" ||
      currentUrl === "/admin/subscriptions/"
    ) {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink("active-class");
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (currentUrl === "/admin/orders" || currentUrl === "/admin/orders/") {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink("active-class");
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (currentUrl === "/admin/dispute" || currentUrl === "/admin/dispute/") {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink("active-class");
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (currentUrl === "/admin/reviews" || currentUrl === "/admin/reviews/") {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink("active-class");
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (currentUrl === "/admin/payouts" || currentUrl === "/admin/payouts/") {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink("active-class");
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (currentUrl === "/admin/reports" || currentUrl === "/admin/reports/") {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink("active-class");
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (currentUrl === "/admin/blogs" || currentUrl === "/admin/blogs/") {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink("active-class");
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (currentUrl === "/admin/coupons" || currentUrl === "/admin/coupons/") {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink("active-class");
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink();
    }
    if (
      currentUrl === "/admin/banned-words" ||
      currentUrl === "/admin/banned-words"
    ) {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink("active-class");
      setAdminEmailActiveLink();
    }
    if (
      currentUrl === "/admin/setting/email" ||
      currentUrl === "/admin/setting/email"
    ) {
      setAdminDashboardActiveLink();
      setAdminUserActiveLink();
      setAdminPendingJobsActiveLink();
      setAdminCurrrntJobsActiveLink();
      setAdminPastJobsActiveLink();
      setAdminClosedJobsActiveLink();
      setAdminStudyResourcesActiveLink();
      setAdminPagesActiveLink();
      setAdminSubscriptionActiveLink();
      setAdminOrdersActiveLink();
      setAdminDisputeActiveLink();
      setAdminReviewsActiveLink();
      setAdminPayoutsActiveLink();
      setAdminReportsActiveLink();
      setAdminBlogsActiveLink();
      setAdminCouponsActiveLink();
      setAdminBannedWordsActiveLink();
      setAdminEmailActiveLink("active-class");
    }
  }, [currentUrl]);

  return (
    <aside id="sidebar" className="sidebar">
      <div className="section-admin-profile">
        <div className="section-admin-profile__img-con">
          <img src={ProfilePic} alt="profile" />
        </div>
        <div className="section-admin-profile__details-con">
          <div className="section-admin-profile__details-con__name">
            <b>Luke Hobbs</b>
          </div>
        </div>
      </div>
      <hr className="section-admin-profile__hr" />
      <div className="sidebar-top">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            {/* <Link className="nav-link" to="/admin"> */}
            <Link className="nav-link">
              <span className={`no-active-class ${adminDashboardActiveLink}`}>
                <b>Dashboard</b>
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/users">
              <span className={`no-active-class ${adminUserActiveLink}`}>
                <b>Users</b>
              </span>
            </Link>
          </li>
          <li className="nav-item my-cursor">
            <div className="nav-link-dropdown" onClick={subNavbarToggleJobs}>
              <span
                className={`no-active-class ${adminPendingJobsActiveLink} ${adminPastJobsActiveLink} ${adminClosedJobsActiveLink} ${adminCurrrntJobsActiveLink}`}
              >
                <b>Jobs</b>
              </span>
              <div className="closed-icon-con">
                {subNavbarJobs ? (
                  <img src={whiteArrowUp} alt="open Icon" />
                ) : (
                  <img src={whiteArrowDown} alt="closed Icon" />
                )}
              </div>
            </div>
            {subNavbarJobs ? (
              <ul>
                <li className="nav-item">
                  <Link
                    className="nav-link sub-nav-link"
                    to="/admin/pending-jobs"
                  >
                    <span
                      className={`sub-no-active-class ${adminPendingJobsActiveLink}`}
                    >
                      <b>Pending</b>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link sub-nav-link"
                    to="/admin/current-jobs"
                  >
                    <span
                      className={`sub-no-active-class ${adminCurrrntJobsActiveLink}`}
                    >
                      <b>Current</b>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link sub-nav-link" to="/admin/past-jobs">
                    <span
                      className={`sub-no-active-class ${adminPastJobsActiveLink}`}
                    >
                      <b>Past</b>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link sub-nav-link"
                    to="/admin/closed-jobs"
                  >
                    <span
                      className={`sub-no-active-class ${adminClosedJobsActiveLink}`}
                    >
                      <b>Closed</b>
                    </span>
                  </Link>
                </li>
              </ul>
            ) : null}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/study-resources">
              <span
                className={`no-active-class ${adminStudyResourcesActiveLink}`}
              >
                <b>Study Resources</b>
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/pages">
              <span className={`no-active-class ${adminPagesActiveLink}`}>
                <b>Pages</b>
              </span>
            </Link>
          </li>

          <li className="nav-item">
            {/* <Link className="nav-link"
                            to="/admin/subscriptions"
                        > */}
            <Link className="nav-link">
              <span
                className={`no-active-class ${adminSubscriptionActiveLink}`}
              >
                <b>Subscriptions</b>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/orders">
              <span className={`no-active-class ${adminOrdersActiveLink}`}>
                <b>Orders</b>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/dispute">
              <span className={`no-active-class ${adminDisputesActiveLink}`}>
                <b>Disputes</b>
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/reviews">
              <span className={`no-active-class ${adminReviewsActiveLink}`}>
                <b>Reviews</b>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link"
                            to="/admin/payouts"
                        > */}
            <Link className="nav-link">
              <span className={`no-active-class ${adminPayoutsActiveLink}`}>
                <b>Payouts</b>
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/reports">
              <span className={`no-active-class ${adminReportsActiveLink}`}>
                <b>Reports</b>
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/blogs">
              <span className={`no-active-class ${adminBlogsActiveLink}`}>
                <b>Blogs</b>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link"
                            to="/admin/coupons"
                        > */}
            <Link className="nav-link">
              <span className={`no-active-class ${adminCouponsActiveLink}`}>
                <b>Coupons</b>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">
              {/* <Link className="nav-link"
                            to="/admin/banned-words"
                        > */}
              <span className={`no-active-class ${adminBannedWordsActiveLink}`}>
                <b>Banned Words</b>
              </span>
            </Link>
          </li>
          <li className="nav-item my-cursor">
            <div className="nav-link-dropdown" onClick={subNavbarToggleSetting}>
              <span className={`no-active-class ${adminEmailActiveLink}`}>
                <b>Settings</b>
              </span>
              <div className="closed-icon-con">
                {subNavbarSetting ? (
                  <img src={whiteArrowUp} alt="open Icon" />
                ) : (
                  <img src={whiteArrowDown} alt="closed Icon" />
                )}
              </div>
            </div>
            {subNavbarSetting ? (
              <ul>
                <li className="nav-item">
                  {/* <Link className="nav-link sub-nav-link"
                                    to="/admin/setting/email"
                                > */}
                  <Link className="nav-link sub-nav-link">
                    <span className={`no-active-class ${adminEmailActiveLink}`}>
                      <b>Email</b>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link sub-nav-link">
                    <span className="sub-no-active-class">
                      <b>Copyright</b>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link sub-nav-link">
                    <span className="sub-no-active-class">
                      <b>Membership</b>
                    </span>
                  </Link>
                </li>
              </ul>
            ) : null}
          </li>
          <li className="nav-item my-cursor">
            <div className="nav-link" onClick={handleShow}>
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
            {/* <div className='logout-con__btn-con'>
                            <ButtonNoColor
                                buttonText="Cancel"
                                onClick={handleClose}
                                className="btn-no-filled-margin"
                            />
                            <ButtonColor
                                buttonText="Logout"
                            />
                        </div> */}
          </div>
        </Modal.Body>
      </Modal>
    </aside>
  );
};

export default AdminSideBar;
