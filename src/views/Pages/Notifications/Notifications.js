import React from "react";
import "./Notifications.scss";
import { Title } from "../../Components/Title/Title";

const Notifications = () => {
  return (
    <>
      <div className="notifications-main-con">
        <Title headtitle="Notifications" />
        <div className="notifications-main-con__content-con">
          <div className="notifications-main-con__content-con__img-con">
            <img
              src="./images/noti-icon.png"
              alt="noti"
              className="notifications-main-con__content-con__img-con__img"
            />
          </div>
          <div className="notifications-main-con__content-con__text-con">
            <div className="notifications-main-con__content-con__text-con__head">
              <b>Lorem ipsum dolor sit amet consectetur.</b>
            </div>
            <div className="notifications-main-con__content-con__text-con__date">
              Feb 23 - 01:30 PM
            </div>
            <div className="notifications-main-con__content-con__text-con__text">
              <b>
                Lorem ipsum dolor sit amet consectetur. Felis suspendisse
                pharetra neque dictum lacus faucibus. Bibendum ut dignissim
                lorem pulvinar eu nunc nisi vitae vitae. Quis pulvinar euismod
                magna.
              </b>
            </div>
          </div>
          <div className="notifications-main-con__content-con__cross-con">
            <img
              src="./images/noti-cross.png"
              alt="cross"
              className="notifications-main-con__content-con__cross-con__img"
            />
          </div>
        </div>
        <hr className="noti-hr" />
        <div className="notifications-main-con__content-con__btn-con">
          <button className="notifications-main-con__content-con__btn-con__btn">
            View More
          </button>
        </div>
      </div>
    </>
  );
};
export default Notifications;
