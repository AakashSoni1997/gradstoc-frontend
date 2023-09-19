import React, { useState, useEffect } from "react";
import "../TheSidebar/Sidebar.scss";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { LogoutAction } from "../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { ButtonNoColor, ButtonColor } from "../Button/Button";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logOutApiRes = useSelector((state) => state.auth);

  const acitveUser = logOutApiRes.isAuthenticated;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function logoutUser() {
    dispatch(LogoutAction());
    history.push("/");
  }
  useEffect(() => {
    if (!acitveUser) {
      handleClose();
    }
  }, [acitveUser]);

  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <div className="custom_header_menu">
            <div className="logo_part">
              <Link to="/">
                <img src="./images/gradstoc_logo.png" alt="home " />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <div className="menu_part">
                <ul>
                  <li className="navbar_center">
                    <div className="headerSearchBx">
                      <input
                        placeholder="Search By ..."
                        aria-label="Search"
                        type="search"
                        className="me-2 search_header form-control"
                      />
                      <div className="search_header_icon"></div>
                    </div>
                  </li>
                  <li className="main_menu active">
                    <Link to="/howitworks">How it works</Link>
                  </li>
                  <li className="main_menu">
                    <Link to="/browsejob">Browse Jobs</Link>
                  </li>
                  <li className="dropdown_li main_menu">
                    <Dropdown className="study_resource">
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        className="drop_arrow_none"
                      >
                        <div className="header_menu">
                          Study Resources
                          <img
                            src="./images/drop_icon_profile.svg"
                            alt="profile"
                          />
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="header profile_dropdown_menu">
                        <Dropdown.Item>
                          <Link to="#/blog">Study Guides</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="#/blog">Flashcards</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="#/blog">Proposals</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to="/purchase-study-resources">
                            Purchase Study Resources
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  <li className="li-border-cart">
                    <Link to="/cart">
                      <img src="./images/cart.png" alt=" cart" />
                    </Link>
                  </li>
                  {acitveUser ? (
                    <li className="dropdown_li li-border-noti-bell">
                      <Dropdown className="profile_icon">
                        <Dropdown.Toggle
                          variant=""
                          id="dropdown-basic"
                          className="drop_arrow_none"
                        >
                          <img
                            src="./images/notification-bell.png"
                            alt=" cart"
                          />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="profile_dropdown_menu_noti">
                          <div className="profile_dropdown_menu_noti__main-con">
                            <div className="profile_dropdown_menu_noti__main-con__inner-con">
                              <div className="profile_dropdown_menu_noti__main-con__inner-con__img-con">
                                <img
                                  src="./images/noti-icon.png "
                                  alt="noti"
                                  className="profile_dropdown_menu_noti__main-con__inner-con__img-con__img"
                                />
                              </div>
                              <div className="profile_dropdown_menu_noti__main-con__inner-con__text-con">
                                <div className="profile_dropdown_menu_noti__main-con__inner-con__text-con__head">
                                  <b>Lorem ipsum dolor sit amet consectetur.</b>
                                </div>
                                <div className="profile_dropdown_menu_noti__main-con__inner-con__text-con__text">
                                  Lorem ipsum dolor sit amet consectetur. Felis
                                  suspendisse pharetra neque dictum lacus
                                  faucibus. Bibendum ut dignissim lorem pulvinar
                                  eu nunc nisi vitae vitae. Quis pulvinar
                                  euismod magna.
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="profile_dropdown_menu_noti__main-con__inner-con">
                              <div className="profile_dropdown_menu_noti__main-con__inner-con__img-con">
                                <img
                                  src="./images/noti-icon.png "
                                  alt="noti"
                                  className="profile_dropdown_menu_noti__main-con__inner-con__img-con__img"
                                />
                              </div>
                              <div className="profile_dropdown_menu_noti__main-con__inner-con__text-con">
                                <div className="profile_dropdown_menu_noti__main-con__inner-con__text-con__head">
                                  <b>Lorem ipsum dolor sit amet consectetur.</b>
                                </div>
                                <div className="profile_dropdown_menu_noti__main-con__inner-con__text-con__text">
                                  Lorem ipsum dolor sit amet consectetur. Felis
                                  suspendisse pharetra neque dictum lacus
                                  faucibus. Bibendum ut dignissim lorem pulvinar
                                  eu nunc nisi vitae vitae. Quis pulvinar
                                  euismod magna.
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div className="profile_dropdown_menu_noti__main-con__see-all">
                              <Link to="/notifications" className="noti-color">
                                <b>See all Notifications</b>
                              </Link>
                            </div>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  ) : (
                    ""
                  )}

                  {/* After Login */}
                  {acitveUser ? (
                    <>
                      <li className="membership">
                        <img src="./images/crown.svg" alt="crown" />
                        Membership
                      </li>
                      <li className="dropdown_li">
                        <Dropdown className="profile_icon">
                          <Dropdown.Toggle
                            variant=""
                            id="dropdown-basic"
                            className="drop_arrow_none"
                          >
                            <div className="profile_dropdown">
                              <img
                                src="./images/profile.png"
                                className="profile-pic-img"
                                alt="profile"
                              />
                              <img
                                className="ml1"
                                src="./images/drop_icon_profile.svg"
                                alt="arrow"
                              />
                            </div>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="profile_dropdown_menu">
                            <div className="profile_owner_name">
                              <div className="owner_pic">
                                <img
                                  src="images/profile.png"
                                  className="profile-pic-img"
                                  alt="profile"
                                />
                              </div>
                              <div className="owner_name">Luke Hobbs</div>
                            </div>
                            <Dropdown.Item>
                              <Link
                                className="nav-link profile_dropdown"
                                to="/dashboard"
                              >
                                <img
                                  className="change_active"
                                  src="images/icon_dashboard.svg"
                                  alt="Dashboard"
                                />
                                <span>Dashboard</span>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="nav-link profile_dropdown"
                                to="/messages"
                              >
                                <img
                                  className="change_active"
                                  src="images/icon_message.svg"
                                  alt="message"
                                />
                                <span>Message</span>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="nav-link profile_dropdown"
                                to="#/blog"
                              >
                                <img
                                  className="change_active"
                                  src="images/icon_blog.svg"
                                  alt="blog"
                                />
                                <span>Blog</span>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="nav-link profile_dropdown"
                                to="/settings"
                              >
                                <img
                                  className="change_active"
                                  src="images/icon_profile.svg"
                                  alt="profile"
                                />
                                <span>Profile</span>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="nav-link profile_dropdown"
                                to="/payment-details"
                              >
                                <img
                                  className="change_active"
                                  src="images/icon_earning.svg"
                                  alt="earning"
                                />
                                <span>Payment Details</span>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="nav-link profile_dropdown"
                                to="/jobs"
                              >
                                <img
                                  className="change_active"
                                  src="images/icon_jobs.svg"
                                  alt="jobs"
                                />
                                <span>Jobs</span>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="nav-link profile_dropdown"
                                to="/dispute"
                              >
                                <img
                                  className="change_active"
                                  src="images/icon_dispute.svg"
                                  alt="Dispute"
                                />
                                <span>Dispute</span>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="nav-link profile_dropdown green_active border_up_down"
                                to="/membership"
                              >
                                <img
                                  className="change_active"
                                  src="images/crown.svg"
                                  alt="crown"
                                />
                                <span>Upgrade Now</span>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                className="nav-link profile_dropdown active"
                                to="/settings"
                              >
                                <img
                                  className="change_active"
                                  src="images/icon_setting.svg"
                                  alt="setting"
                                />
                                <span>Settings</span>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <div
                                className="nav-link profile_dropdown"
                                onClick={handleShow}
                              >
                                <img
                                  className="change_active"
                                  src="images/icon_logout.svg"
                                  alt="logout"
                                />
                                <span>Logout</span>
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="">
                        <Link to="/login">
                          <button className="login-btn-header">Log in</button>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/account-select">
                          <button className="sign-up-btn-header">
                            Sign up
                          </button>
                        </Link>
                      </li>
                    </>
                  )}
                  {/* <li className=""><img src="./images/profile_pic_header.png"/>Membership</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
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
              <ButtonColor buttonText="Logout" onClick={logoutUser} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
