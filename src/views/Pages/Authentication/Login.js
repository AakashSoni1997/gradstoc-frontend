import React, { useEffect, useState } from "react";
import Intro from "../../Components/TheIntroducation/Intro";
import "./Authentication.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { FieldText } from "../../Components/NewInputField/NewInputField";
import { LoginAction } from "../../../redux/actions/authAction";
import LoaderSpinner from "../../Components/Loader/Loader";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CryptoJS from "crypto-js";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Username or Email is required."),
  password: Yup.string()
    .required("Password is Required")
});

export default function Login(props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const forgotPasswordApiResponse = useSelector((state) => state.auth);
  const logInApiResponse = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loginSubmitClick, setLoginSubmitClick] = useState(false);
  const [encyptedText, setEncyptedText] = useState("");
  const [deceryptedObj, setDeceryptedObj] = useState({});
  const [rememberToggle, setRememberToggle] = useState(
    JSON.parse(localStorage.getItem("checked"))
  );

  const LogInFormSubmit = (values) => {
    setState(values);
    dispatch(LoginAction(values));
    setLoginSubmitClick(true);
  };

  if (loginSubmitClick === true) {
    if (logInApiResponse?.user?.data !== undefined) {
      if (
        logInApiResponse?.user?.data?.status === true &&
        forgotPasswordApiResponse?.user?.data?.status_code === 200
      ) {
        if (logInApiResponse?.user?.data?.data?.user?.is_verify === 1) {
          props.history.push({
            pathname: "/",
          });
          setLoginSubmitClick(false);
        } else if (logInApiResponse?.user?.data?.data?.user?.is_verify !== 1) {
          props.history.push({
            pathname: "/otp",
          });
          setLoginSubmitClick(false);
        }
      }
    }
  }

  useEffect(() => {
    if (rememberToggle) {
      localStorage.setItem("checked", rememberToggle);
    } else {
      localStorage.setItem("checked", rememberToggle);
      localStorage.removeItem("cipherText");
    }
  }, [rememberToggle]);

  useEffect(() => {
    setRememberToggle(localStorage.getItem("checked"));
    setEncyptedText(localStorage.getItem("cipherText"));
  }, []);

  useEffect(() => {
    if (encyptedText) {
      let bytes = CryptoJS.AES.decrypt(encyptedText, "secret123");
      let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      setDeceryptedObj(decryptedData);
    }
  }, [encyptedText]);

  const handleChange = (event) => {
    const { target } = event;
    let { name, value } = target;
    setState({ ...state, [name]: value });
    let cipherText = CryptoJS.AES.encrypt(
      JSON.stringify(state),
      "secret123"
    ).toString();
    if (rememberToggle) {
      localStorage.setItem("cipherText", cipherText);
    }
  };

  const handleRember = (event) => {
    setRememberToggle(event.target.checked);
  };

  const initialValues = {
    email:
      JSON.parse(localStorage.getItem("checked")) === true ||
      deceryptedObj.email !== undefined
        ? deceryptedObj.email
        : "",
    password:
      JSON.parse(localStorage.getItem("checked")) === true ||
      deceryptedObj.email !== undefined
        ? deceryptedObj.password
        : "",
  };

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
                      <div className="login_title">Sign In</div>
                      <div className="login_subtitle">
                        Welcome! Sign in to your Gradstoc account
                      </div>
                    </div>
                    <div className="login_field">
                      <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={LogInFormSubmit}
                        validateOnChange={true}
                      >
                        {(formik) => {
                          return (
                            <Form
                              onChange={handleChange}
                              autoComplete="off"
                              className="form-mt login_form_field"
                            >
                              <div className="mt3">
                                <label htmlFor="" className="form-label">
                                  Username or Email
                                </label>
                                <div className="input_box">
                                  <FieldText
                                    placeholder="Username or Email"
                                    value={formik.values.email}
                                    defaultValue={formik?.values?.email}
                                    name="email"
                                    className="form-control-regitser"
                                    errors={formik.errors}
                                    onChange={formik.handleChange}
                                  />
                                  <div className="email_icon"></div>
                                </div>
                              </div>
                              <div className="mt_15">
                                <label htmlFor="" className="form-label">
                                  Password
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
                                    value={formik.values.password}
                                    defaultValue={formik?.values?.password}
                                    className="form-control-regitser"
                                    errors={formik.errors}
                                    onChange={formik.handleChange}
                                  />
                                  <div className="password_icon"></div>
                                </div>
                              </div>

                              <div className="form-check remind_password mb-3 ">
                                <div className="remind_me">
                                  <div className="form-check checkbox">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultChecked={JSON.parse(
                                        localStorage.getItem("checked")
                                      )}
                                      value=""
                                      id="flexCheckDefault"
                                      onChange={(event) => handleRember(event)}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      Remember me
                                    </label>
                                  </div>
                                </div>
                                <Link to="/reset-password">
                                  <button
                                    type="button"
                                    className="forgot_password"
                                  >
                                    Forgot Password?
                                  </button>
                                </Link>
                              </div>
                              <div>
                                <button
                                  type="submit"
                                  className="btn auth_green_btn w-100 m-0 mt-3"
                                >
                                  Sign In
                                  {isLoading && (
                                    <span className="loader-box">
                                      <LoaderSpinner />
                                    </span>
                                  )}
                                </button>
                              </div>
                              <div className="sign_in_option">
                                <span className="border_before"></span>
                                <span className="sign_in_text">
                                  Or sign in using
                                </span>
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
                                <button
                                  type="button"
                                  className="facebook_login"
                                >
                                  <span>
                                    <img
                                      src="./images/facebook_icon.svg"
                                      alt="face book"
                                    />
                                  </span>
                                  Connect with Facebook
                                </button>
                              </div>
                              <div className="do_not_have_account">
                                Don't have an account?
                                <Link to="/register">
                                  <span>Sign Up</span>
                                </Link>
                              </div>
                            </Form>
                          );
                        }}
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
}