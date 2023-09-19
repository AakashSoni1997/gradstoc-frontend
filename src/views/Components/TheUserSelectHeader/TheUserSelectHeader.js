import React from "react";
import "./TheUserSelectHeader.scss";
import { Link } from "react-router-dom";

const TheUserSelectHeader = () => {
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
          </div>
        </div>
      </nav>
    </>
  );
};
export default TheUserSelectHeader;
