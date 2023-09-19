import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./Dashboard.scss";
import "./Favorites.scss";
import Job from "./Favorite/Job/Job";
import Courses from "./Favorite/Courses/Courses";

const favorites = () => {
  return (
    <section className="favorites">
      <div className="row">
        <div className="col-md">
          <div className="favorites__head-con">
            <b>Favorites</b>
          </div>
          <div className="favorites-tab">
            <div className="content_box mt1">
              <div className="tabs_menu">
                <Tabs
                  defaultActiveKey="Job"
                  id="uncontrolled-tab-example"
                  className="green_tab"
                >
                  <Tab eventKey="Job" title="Job">
                    <Job />
                  </Tab>
                  <Tab eventKey="courses" title="Courses">
                    <Courses />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default favorites;
