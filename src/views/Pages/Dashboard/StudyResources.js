import React from "react";
import "./Dashboard.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Document from "../../Components/StudyResource/Document";
import Flashcard from "../../Components/StudyResource/Flashcard";

const StudyResources = () => {
  return (
    <>
      <div className="content_section">
        <div className="content_header">
          <div className="content_title">Study Resources</div>
        </div>
        <div className="content_box mt1">
          <div className="tabs_menu">
            <Tabs
              defaultActiveKey="documents"
              id="uncontrolled-tab-example"
              className="green_tab"
            >
              <Tab eventKey="documents" title="Documents">
                <Document />
              </Tab>
              <Tab eventKey="flashcards" title="Flashcards">
                <Flashcard />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
export default StudyResources;
