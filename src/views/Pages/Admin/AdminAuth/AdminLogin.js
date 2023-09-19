import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Intro from "../../../Components/TheIntroducation/Intro";
import "./AdminLogin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import userIcon from "../../../../Assets/images/user_icon.svg";
import passIcon from "../../../../Assets/images/password.svg";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <>
      <section className="section_login">
        <div className="container index1">
          <div className="row">
            <div className="col-md-12">
              <div className="flex align_center">
                <div className="col-md-6">
                  <Intro />
                </div>
                <div className="col-md-6">
                  <div className="login_form">
                    <div className="login_header">
                      <div className="login_title">Admin Sign In</div>
                      <div className="login_subtitle">
                        Welcome! Sign in to your Gradstoc Admin account
                      </div>
                    </div>
                    <div className="login_field">
                      <Form
                        autoComplete="off"
                        className="form-mt login_form_field"
                      >
                        <div className="mt3">
                          <label htmlFor="" className="form-label">
                            Email
                          </label>
                          <div className="input_box">
                            <InputGroup>
                              <InputGroup.Text>
                                <img src={userIcon} alt="userIcon" />
                              </InputGroup.Text>
                              <Form.Control
                                type="email"
                                // name={props.name}
                                // value={props.value}
                                // defaultValue={props.defaultValue}
                                className="form-control"
                                placeholder="Enter Your Email"
                              />
                            </InputGroup>
                          </div>
                        </div>
                        <div className="mt_15">
                          <label htmlFor="" className="form-label">
                            Password
                          </label>
                          <div className="input_box">
                            <InputGroup>
                              <InputGroup.Text>
                                <img src={passIcon} alt="passIcon" />
                              </InputGroup.Text>
                              <Form.Control
                                type="password"
                                // name={props.name}
                                // value={props.value}
                                // defaultValue={props.defaultValue}
                                className="form-control"
                                placeholder="Enter Your Email"
                              />
                              <InputGroup.Text>
                                <FontAwesomeIcon icon={faEyeSlash} />
                              </InputGroup.Text>
                            </InputGroup>
                          </div>
                        </div>
                        <div className="form-check remind_password mb-3 ">
                          <Link to="/admin/forgot-password">
                            <button type="button" className="forgot_password">
                              Forgot Password?
                            </button>
                          </Link>
                        </div>
                        <div className="">
                          <button
                            type="submit"
                            className="btn auth_green_btn w-100 m-0 mt-3"
                          >
                            Sign In
                          </button>
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
}
export default Login;
