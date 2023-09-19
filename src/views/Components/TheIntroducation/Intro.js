import React from "react";
import "../../Pages/Authentication/Authentication.scss";
import loginImg from "../../../Assets/images/login_vector.png";

const Intro = () => {
  return (
    <>
      <div className="auth-introBx">
        <div className="auth-introslide">
          <div className="intro_title">Master any subject</div>
          <div className="intro_para">
            As a member, you get access to the best collection of study
            resources and verified experts that are ready to help 24/7. You have
            questions, we have answers.
          </div>
          <div className="">
            <img src={loginImg} alt="login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
