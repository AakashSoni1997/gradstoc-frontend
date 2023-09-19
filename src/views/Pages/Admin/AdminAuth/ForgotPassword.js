import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Intro from "../../../Components/TheIntroducation/Intro";
import "./AdminLogin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import passIcon from "../../../../Assets/images/password.svg";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function ForgotPassword(props) {
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
                      <div className="login_title">Admin Forgot Password</div>
                      <div className="login_subtitle">
                        Welcome! Forgot Password to your Gradstoc Admin account
                      </div>
                    </div>
                    <div className="login_field">
                      <Form
                        autoComplete="off"
                        className="form-mt login_form_field"
                      >
                        <div className="mt3">
                          <label htmlFor="" className="form-label">
                            New Password
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
                                placeholder="Enter Your New Password"
                              />
                              <InputGroup.Text>
                                <FontAwesomeIcon icon={faEyeSlash} />
                              </InputGroup.Text>
                            </InputGroup>
                          </div>
                        </div>
                        <div className="mt_15">
                          <label htmlFor="" className="form-label">
                            Confirm Password
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
                                placeholder="Enter Your Confirmed Password"
                              />
                              <InputGroup.Text>
                                <FontAwesomeIcon icon={faEyeSlash} />
                              </InputGroup.Text>
                            </InputGroup>
                          </div>
                        </div>
                        <div className="mt-5">
                          <button
                            type="submit"
                            className="btn auth_green_btn w-100 m-0 mt-3"
                          >
                            Save Password
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
export default ForgotPassword;
