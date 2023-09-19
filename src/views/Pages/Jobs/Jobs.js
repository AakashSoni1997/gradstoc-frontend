import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MyPostingJob from "../../Components/Jobs/MyPostingJob";
import CurrentWork from "../../Components/Jobs/CurrentWork";
import PastWork from "../../Components/Jobs/PastWork";
import "./Jobs.scss";

const Jobs = () => {
  return (
    <>
      <section>
        <div className="contanier">
          <div className="job-head-con">
            <h1 className="job-head">Jobs</h1>
          </div>
          <div className="job-type-con">
            <div className="tabs_menu">
              <Tabs
                defaultActiveKey="mypostingjob"
                id="uncontrolled-tab-example"
                className="green_tab"
              >
                <Tab
                  eventKey="mypostingjob"
                  title="My Postings"
                  className="title-style-in-job"
                >
                  <MyPostingJob />
                </Tab>
                <Tab eventKey="currentjob" title="Current Work">
                  <CurrentWork />
                </Tab>
                <Tab eventKey="pastjob" title="Past Work">
                  <PastWork />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
