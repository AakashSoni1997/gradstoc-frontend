import React from "react";
import TheContent from "./TheContent";
import TheHeader from "../views/Components/TheHeader/Header";
import TheFooter from "../views/Components/TheFooter/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function AskQuestionLayout() {
  return (
    <>
      <TheHeader />
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/jobs">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>Posting a Job</Breadcrumb.Item>
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
