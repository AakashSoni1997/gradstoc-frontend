import React from "react";
import { Link } from "react-router-dom";
import "./InnerSidebar.scss";

const InnerSidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <div className="sidebar-top">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link ">
              <img src="images/icon_earning.svg" alt="earning" />
              <span>Earnings</span>
            </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link">
              <img src="images/icon_study.svg" alt="study" />
              <span>Study resources</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link">
              <img
                src="images/icon_favorite_course.svg"
                alt="favorite course"
              />
              <span>Favorite course</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link">
              <img src="images/icon_jobs.svg" alt="jobs" />
              <span>Jobs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ">
              <img src="images/icon_order.svg" alt="orders" />
              <span>Orders</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link">
              <img src="images/icon_profile.svg" alt="profile" />
              <span>Profile</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link">
              <img src="images/icon_become_an_expert.svg" alt="expert" />
              <span>Become an expert</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link">
              <img src="images/icon_account.svg" alt="account" />
              <span>Account</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link">
              <img src="images/icon_setting.svg" alt="setting" />
              <span>Settings</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link">
              <img src="images/icon_logout.svg" alt="logout" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom"></div>
    </aside>
  );
};

export default InnerSidebar;
