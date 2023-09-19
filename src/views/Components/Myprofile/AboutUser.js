import React from "react";
import "./Profile.scss";

const AboutUser = () => {
  return (
    <>
      <div className="profile-about-con">
        <h1 className="profile-about-us-head">About me</h1>
        <p className="profile-about-us-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh vitae
          sit magna nec suspendisse id lectus. Velit adipiscing id magna pretium
          in in. Dictum ac diam id adipiscing donec dictum et, eu cras.
        </p>
      </div>
      <div className="profile-certifiaction-con">
        <h1 className="profile-certifiaction-head">Certifications</h1>
        <p className="profile-certifiaction-text">Math, English</p>
      </div>
      <div className="profile-earning-job-con">
        <div className="profile-total-earning-con">
          <h1 className="profile-total-earning-head">Total Earnings </h1>
          <p className="profile-total-earning-text">$10K</p>
        </div>
        <div className="profile-total-job-con">
          <h1 className="profile-total-job-head">Total Jobs</h1>
          <p className="profile-total-job-text">110</p>
        </div>
      </div>
    </>
  );
};
export default AboutUser;
