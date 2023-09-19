import React, { useState } from "react";
import Intro from "../../Components/TheIntroducation/Intro";
import "./Authentication.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { SignUpAction } from "../../../redux/actions/authAction";
import {
  FieldText,
} from "../../Components/NewInputField/NewInputField";
import LoaderSpinner from "../../Components/Loader/Loader";
import { Link } from "react-router-dom";
import {Formik, Form } from "formik";
import * as Yup from "yup";



const SignupSchema = Yup.object().shape({
  user_name: Yup.string()
    .matches(
      /^[a-zA-Z][A-Za-z0-9_.-]{2,54}$/,
      "Create a username between 3-55 characters using A-Z, a-z, 0-9, the underscore (_), the hyphen (-), and the dot (.)."
    )
    .required(" Username is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(6,"Password should be between 6 to 16 characters including 1 uppercase, 1 lowercase, 1 special character, and 1 digit.")
    .max(16,"Password should be between 6 to 16 characters including 1 uppercase, 1 lowercase, 1 special character, and 1 digit.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{5,15})/,
      "Password should be between 6 to 16 characters including 1 uppercase, 1 lowercase, 1 special character, and 1 digit."
    ),
});

const Register = (props) => {
  const dispatch = useDispatch();
  const initialValues = {
    role_id:localStorage.getItem("userType"),
    user_name: "",
    email: "",
    password: "",
  };
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [submitClick, setSubmitClick] = useState(false);
  const isLoading = useSelector((state) => state.auth.loading);
  const signUpApiResponse = useSelector((state) => state.auth);

  const SignUPSubmit = (values) => {
    if (values.email.length > 0) {
      setEmail(values.email);
    }
    setSubmitClick(true);
    dispatch(SignUpAction(values));

  };

  if (submitClick === true) {
    if (signUpApiResponse.sign_up.data !== undefined) {
      if (
        signUpApiResponse.sign_up.data.status === true &&
        signUpApiResponse.sign_up.data.status_code === 200
      ) {
        props.history.push({
          pathname: "/otp",
          state: email,
        });
        setSubmitClick(false);
      }
      setSubmitClick(false);
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
                      <div className="login_title">Sign Up</div>
                      <div className="login_subtitle">
                        Welcome! Sign up to create your Gradstoc account
                      </div>
                    </div>
                    <div className="login_field">
                      <Formik
                        initialValues={initialValues}
                        validationSchema={SignupSchema}
                        onSubmit={SignUPSubmit}
                        validateOnChange={true}
                      >
                        {(formik) => {
                          return (
                            <Form
                              autoComplete="off"
                              className="form-mt login_form_field"
                            >
                              <div className="mt3">
                                <label htmlFor="" className="form-label">
                                  Username
                                </label>
                                <div className="input_box">
                                  <FieldText
                                    placeholder="UserName"
                                    name="user_name"
                                    className="form-control-regitser"
                                    errors={formik.errors}
                                    onChange={formik.handleChange}
                                  />
                                  <div className="username_icon"></div>
                                </div>
                              </div>
                              <div className="mt3">
                                <label htmlFor="" className="form-label">
                                  Email
                                </label>
                                <div className="input_box">
                                  <FieldText
                                    placeholder="Email"
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
                                    className="form-control-regitser"
                                    errors={formik.errors}
                                    onChange={formik.handleChange}
                                  />
                                  <div className="password_icon"></div>
                                </div>
                              </div>
                              <div className="new-pass-word-btn ">
                                <button
                                  type="submit"
                                  className="btn auth_green_btn w-100 m-0 mt-3"
                                >
                                  Sign Up {isLoading && <LoaderSpinner />}
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
};

export default Register;
