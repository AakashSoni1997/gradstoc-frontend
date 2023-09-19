import React from "react";
import TheContent from "./TheContent";
import TheHeader from "../views/Components/TheHeader/Header";
// import TheInnerSidebar from '../views/Components/TheInnerSidebar/InnerSidebar';
import TheFooter from "../views/Components/TheFooter/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function TheInnerLayout() {
  return (
    <>
      <TheHeader />
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/studyresources">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active> Upload study resources</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="row main_content">
          <div className="content_section">
            <TheContent />
          </div>
        </div>
      </div>

      <TheFooter />
    </>
  );
}
