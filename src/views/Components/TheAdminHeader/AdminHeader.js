import React from "react";
import "./AdminHeader.scss";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Logo from "../../../Assets/images/gradstoc_logo.png";
import userProfile from "../../../Assets/images/profile.png";
import dropDownIcon from "../../../Assets/images/drop_icon_profile.svg";
import logoutIcon from "../../../Assets/images/icon_logout.svg";

const AdminHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="admin-header-con">
          <div className="custom_header_menu">
            <div className="logo_part">
              <Link to="/admin">
                <img src={Logo} alt="home " />
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
                        className="me-2 search_header form-control search_header-admin"
                      />
                      <div className="search_header_icon"></div>
                    </div>
                  </li>
                  {/* After Login */}
                  <li className="dropdown_li">
                    <Dropdown className="profile_icon">
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        className="drop_arrow_none"
                      >
                        <div className="profile_dropdown">
                          <img
                            src={userProfile}
                            className="profile-pic-img"
                            alt="profile"
                          />
                          <img className="ml1" src={dropDownIcon} alt="arrow" />
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="profile_dropdown_menu">
                        <div className="profile_owner_name">
                          <div className="owner_pic">
                            <img
                              src={userProfile}
                              className="profile-pic-img"
                              alt="profile"
                            />
                          </div>
                          <div className="owner_name">Luke Hobbs</div>
                        </div>
                        <Dropdown.Item>
                          <Link
                            className="nav-link profile_dropdown"
                            to="#/logout"
                          >
                            <img
                              className="change_active"
                              src={logoutIcon}
                              alt="logout"
                            />
                            <span>Logout</span>
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  {/* Before Login */}
                  {/* <li className=""> <Link to="/login">
                  <button className="btn btn_green_outline">Log in</button>
                </Link>
                </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminHeader;
