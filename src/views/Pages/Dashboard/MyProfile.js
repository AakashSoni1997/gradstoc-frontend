import React from "react";
import "./MyProfile.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Profile from "../../Components/Myprofile/Profile";
import Completedjob from "../../Components/Myprofile/Completedjob";
import Studyresource from "../../Components/Myprofile/Studyresource";

const MyProfile = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md">
            <div className="profile-head-con">
              <h1 className="profile-head">Profile</h1>
            </div>
            <hr />
            <div className="profile-person-content-con">
              <div className="profile-person-content-profile-pic">
                <img
                  src="./images/profile.png"
                  alt=" profile pic"
                  className="profile-person-content-profile-pic-img"
                />
              </div>
              <div className="profile-person-content-profile-content-con">
                <div className="profile-person-content-profile-content">
                  <div className="profile-person-content-profile-name">
                    Luke Hobbs
                  </div>
                  <div className="profile-person-content-profile-contury">
                    USA
                  </div>
                  <div className="profile-person-content-profile-rating">
                    <div className="profile-rate">
                      <input type="radio" id="star5" name="rate" value="5" />
                      <label htmlFor="star5" title="text">
                        5 stars
                      </label>
                      <input type="radio" id="star4" name="rate" value="4" />
                      <label htmlFor="star4" title="text">
                        4 stars
                      </label>
                      <input type="radio" id="star3" name="rate" value="3" />
                      <label htmlFor="star3" title="text">
                        3 stars
                      </label>
                      <input type="radio" id="star2" name="rate" value="2" />
                      <label htmlFor="star2" title="text">
                        2 stars
                      </label>
                      <input type="radio" id="star1" name="rate" value="1" />
                      <label htmlFor="star1" title="text">
                        1 star
                      </label>
                    </div>
                    <div className="rate_value">(4.5)</div>
                  </div>
                  <div className="profile-person-content-profile-other-info">
                    <div className="profile-person-content-profile-job-complete">
                      <p className="profile-person-content-profile-job-complete-head">
                        <b>Jobs complete</b>
                      </p>
                      <p className="profile-person-content-profile-job-complete-head-ans">
                        <b>95</b>
                      </p>
                    </div>
                    <div className="profile-person-content-member-since">
                      <p className="profile-person-content-member-since-head">
                        <b>Member since</b>
                      </p>
                      <p className="profile-person-content-member-since-head-ans">
                        <b>October 2020</b>
                      </p>
                    </div>
                    <div className="profile-person-content-level">
                      <p className="profile-person-content-level-head">
                        <b>Level</b>
                      </p>
                      <p className="profile-person-content-level-head-ans">
                        Expert
                      </p>
                    </div>
                  </div>
                </div>
                <div className="profile-person-content-profile-hire-me-con">
                  <a href="/messages">
                    <button className="btn btn-content-me  btn-outline-success ">
                      Contact Me
                    </button>
                  </a>
                  <a href="/messages">
                    <button className="btn btn_green_field btn btn-outline-success hire-me-btn">
                      Hire Me
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className="my-profile-tab-menu">
              <div className="profile-tab-menu">
                <Tabs
                  defaultActiveKey="profileTab"
                  id="uncontrolled-tab-example"
                  className="green_tab"
                >
                  <Tab eventKey="profileTab" title="Profile">
                    <Profile />
                  </Tab>
                  <Tab eventKey="studayResourceTab" title="Study Resources">
                    <Studyresource />
                  </Tab>
                  <Tab eventKey="completedWorkTab" title="Completed Jobs">
                    <Completedjob />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MyProfile;
