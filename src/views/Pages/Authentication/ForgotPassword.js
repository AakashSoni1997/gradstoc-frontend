import React, { useState } from "react";
import Intro from "../../Components/TheIntroducation/Intro";
import "./Authentication.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { ResetPasswordAction } from "../../../redux/actions/authAction";
import {
  FieldText,
} from "../../Components/NewInputField/NewInputField";
import LoaderSpinner from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{5,15})/,
      "Password should be between 6 to 16 characters including 1 uppercase, 1 lowercase, 1 special character, and 1 digit."
    ),
  confirm_password: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const ForgotPassword = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const resetPasswordApiRes = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  let tokenValue =
    typeof window !== "undefined" ? window.location.href.split("=")[1] : "";
  const [submitClick, setSubmitClick] = useState(false);
  const [formValue, setFormValue] = useState({
    token: tokenValue,
    password: "",
    confirm_password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const formSubmit = () => {
    setSubmitClick(true)
    dispatch(ResetPasswordAction(formValue));
  };

  if (submitClick === true) {
    if (resetPasswordApiRes.reset_password !== undefined) {
      if (
        resetPasswordApiRes.reset_password.status === true &&
        resetPasswordApiRes.reset_password.status_code === 200
      ) {
        props.history.push("/login");
      }
    }
  }

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
                      <div className="login_title">New Password</div>
                      <div className="login_subtitle">
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum
                        dolor sit amet consectetur.
                      </div>
                    </div>
                    <div className="login_field">
                      <Formik
                        initialValues={{
                          password: "",
                          confirm_password: "",
                        }}
                        onSubmit={formSubmit}
                        validationSchema={validationSchema}
                      >
                        {(formik) => (
                          <Form onChange={onChange} className="login_form_field">
                            <div className="mt3">
                              <label htmlFor="" className="form-label">
                                New Password
                              </label>
                              <div className="input_box">
                                <div className="pass-eye-icon-con eye-icon">
                                  <div className="pass-eye-icon">
                                    {show ? (
                                      <FontAwesomeIcon
                                        icon={faEye}
                                        onClick={() => setShow(!show)}
                                        className="eye-icon"
                                      />
                                    ) : (
                                      <FontAwesomeIcon
                                        icon={faEyeSlash}
                                        onClick={() => setShow(!show)}
                                        className="eye-icon"
                                      />
                                    )}
                                  </div>
                                </div>
                                <FieldText
                                  placeholder="Password"
                                  type={show ? "text" : "password"}
                                  name="password"
                                  className="form-control-regitser"
                                  errors={formik.errors}
                                  onChange={formik.handleChange}
                                />
                                <div className="password_icon"></div>
                              </div>
                            </div>
                            <div className="mt_15">
                              <label htmlFor="" className="form-label">
                                Confirm Password
                              </label>
                              <div className="input_box">
                                <div className="pass-eye-icon-con eye-icon">
                                  <div className="pass-eye-icon">
                                    {show ? (
                                      <FontAwesomeIcon
                                        icon={faEye}
                                        onClick={() => setShow(!show)}
                                        className="eye-icon"
                                      />
                                    ) : (
                                      <FontAwesomeIcon
                                        icon={faEyeSlash}
                                        onClick={() => setShow(!show)}
                                        className="eye-icon"
                                      />
                                    )}
                                  </div>
                                </div>
                                <FieldText
                                  placeholder="Confirm Password"
                                  type={show ? "text" : "password"}
                                  name="confirm_password"
                                  className="form-control-regitser"
                                  errors={formik.errors}
                                  onChange={formik.handleChange}
                                />
                                <div className="password_icon"></div>
                              </div>
                            </div>
                            <div>
                              <div className="new-pass-word-btn">
                                <button
                                  type="submit"
                                  className="btn auth_green_btn w-100 m-0 mt-3"
                                >
                                  Change
                                  {isLoading && <LoaderSpinner />}
                                </button>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
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

export default ForgotPassword;
