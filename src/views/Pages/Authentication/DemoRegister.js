import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Intro from "../../Components/TheIntroducation/Intro";
import "./Authentication.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { NewInputField } from "../../Components/NewInputField/NewInputField";
import { Link } from "react-router-dom";

const DemoRegister = (props) => {
  const [Password, SetPassword] = useState(false);
  const ShowPassword = () => SetPassword(!Password);

  const user = localStorage.getItem("user");

  return (
    <>
      <section className="section section_login">
        <div className="container index1">
          <div className="row">
            <div className="col-md-12">
              <div className="back_to_home">
                <Link to="/">
                  <img src="./images/back_to_home.png" alt="Back to home" />
                  Back to home screen
                </Link>
              </div>
              <div className="flex align_center">
                <div className="col-md-6">
                  <Intro />
                </div>
                <div className="col-md-6">
                  <div className="login_form">
                    <div className="login_header">
                      <div className="login_title">Sign Up</div>
                      <div className="login_subtitle">
                        Welcome! Sign up to create your Gradstoc account
                      </div>
                    </div>
                    <div className="login_field">
                      <Form
                        autoComplete="off"
                        className="form-mt login_form_field"
                      >
                        <div className="mt3">
                          <label htmlFor="" className="form-label">
                            Username
                          </label>
                          <div className="input_box">
                            <InputGroup>
                              <NewInputField
                                type="text"
                                name="user_name"
                                className="form-control-regitser"
                                placeholder="Enter Your Name"
                              />
                              <div className="username_icon"></div>
                            </InputGroup>
                          </div>
                        </div>
                        <div className="mt3">
                          <label htmlFor="" className="form-label">
                            Email
                          </label>
                          <div className="input_box">
                            <InputGroup>
                              <NewInputField
                                type="email"
                                name="email"
                                className="form-control-regitser"
                                placeholder="Enter Your Email"
                              />
                            </InputGroup>
                            <div className="email_icon"></div>
                          </div>
                        </div>
                        <div className="mt_15">
                          <label htmlFor="" className="form-label">
                            Password
                          </label>
                          <div className="input_box">
                            <InputGroup>
                              <NewInputField
                                type={Password ? "text" : "password"}
                                name="password"
                                className="form-control-regitser"
                                placeholder="Enter Your Password"
                              />
                              <div className="pass-eye-icon-con eye-icon">
                                <div className="pass-eye-icon">
                                  {Password ? (
                                    <FontAwesomeIcon
                                      icon={faEye}
                                      onClick={ShowPassword}
                                      className="eye-icon"
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      icon={faEyeSlash}
                                      onClick={ShowPassword}
                                      className="eye-icon"
                                    />
                                  )}
                                </div>
                              </div>
                            </InputGroup>
                            <div className="password_icon"></div>
                          </div>
                        </div>
                        <div className="new-pass-word-btn ">
                          {user ? (
                            <Link to="/home">
                              <button
                                type="submit"
                                className="btn auth_green_btn w-100 m-0 mt-3"
                              >
                                Sign Up
                              </button>
                            </Link>
                          ) : (
                            <Link to="/user-skill">
                              <button
                                type="submit"
                                className="btn auth_green_btn w-100 m-0 mt-3"
                              >
                                Sign Up
                              </button>
                            </Link>
                          )}
                        </div>
                        <div className="sign_in_option">
                          <span className="border_before"></span>
                          <span className="sign_in_text">Or sign in using</span>
                          <span className="border_after"></span>
                        </div>

                        <div className="social_media_login">
                          <button className="google_login">
                            <span>
                              <img
                                src="./images/google_icon.svg"
                                alt="google"
                              />
                            </span>
                            Connect with google
                          </button>
                          <button className="facebook_login">
                            <span>
                              <img
                                src="./images/facebook_icon.svg"
                                alt="facebook"
                              />
                            </span>
                            Connect with Facebook
                          </button>
                        </div>
                        <div className="do_not_have_account">
                          Do you have an account?
                          <a href="login">
                            <span>Sign In</span>
                          </a>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoRegister;
