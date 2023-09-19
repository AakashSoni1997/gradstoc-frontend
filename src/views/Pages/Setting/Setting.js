import React from "react";
import "./Setting.scss";
import { Tab, Tabs } from "react-bootstrap";
import ProfileSetting from "./ProfileSetting";
import ChangePassword from "./changePassword";

const Setting = () => {
  return (
    <>
      <section>
        <div className="setting-main-con">
          <div className="setting-main-con__inner-con">
            <div className="setting-main-con__inner-con__head-con">
              <div className="setting-main-con__inner-con__head-con__head">
                <b>Setting</b>
              </div>
            </div>
            <div className="profile-tab-menu">
              <Tabs
                defaultActiveKey="profileSetting"
                id="uncontrolled-tab-example"
                className="green_tab"
              >
                <Tab eventKey="profileSetting" title="Profile setting">
                  <ProfileSetting />
                </Tab>
                <Tab eventKey="changePassword" title="Change Password">
                  <ChangePassword />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Setting;
