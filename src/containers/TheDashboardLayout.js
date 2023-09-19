import React from "react";
import TheContent from "./TheContent";
import TheHeader from "../views/Components/TheHeader/Header";
import TheSidebar from "../views/Components/TheSidebar/Sidebar";
import TheFooter from "../views/Components/TheFooter/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

export default function TheDashboardLayout() {
  return (
    <>
      <TheHeader />
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item as={Link} to="/dashboard" active>
              Dashboard
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="row main_content">
          <div className="sidebar_part">
            <TheSidebar />
          </div>
          <div className="content_part">
            <TheContent />
          </div>
        </div>
      </div>

      <TheFooter />
    </>
  );
}
