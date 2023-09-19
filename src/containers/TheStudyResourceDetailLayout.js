import React from "react";
import TheContent from "./TheContent";
import TheHeader from "../views/Components/TheHeader/Header";
import TheFooter from "../views/Components/TheFooter/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const currentUrl =
  typeof window !== "undefined" ? window.location.pathname : "";
export default function TheStudyResourceDetailLayout() {
  return (
    <>
      <TheHeader />
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/studyresources">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>
              {currentUrl === "/studyresourcesdetail" ||
              currentUrl === "studyresourcesdetail"
                ? "Resources Detail Page"
                : "Flashcard Detail Page"}
            </Breadcrumb.Item>
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
