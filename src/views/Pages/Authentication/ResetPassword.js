import React, { useState } from "react";
import Intro from "../../Components/TheIntroducation/Intro";
import "./Authentication.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FieldText,
} from "../../Components/NewInputField/NewInputField";
import { ForgotPasswordAction } from "../../../redux/actions/authAction";
import LoaderSpinner from "../../Components/Loader/Loader";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
});

const initialValues = {
  email: "",
};

export default function ResetPassword(props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const forgotPasswordApiResponse = useSelector((state) => state.auth);


  const [submitClick, setSubmitClick] = useState(false);


  const FormSubmit = (values) => {
    dispatch(ForgotPasswordAction(values));
    setSubmitClick(true);
  };

  if (submitClick === true) {
    if (forgotPasswordApiResponse.forgot_password !== undefined) {
      if (
        forgotPasswordApiResponse.forgot_password.status === true &&
        forgotPasswordApiResponse.forgot_password.status_code === 200
      ) {
        props.history.push({
          pathname: "/login",
        });
        setSubmitClick(false);
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
                <Link to="/login">
                  <img src="./images/back_to_home.png" alt="Back to home" />
                  Back to Sign in screen
                </Link>
              </div>
              <div className="flex align_center">
                <div className="col-md-6">
                  <Intro />
                </div>
                <div className="col-md-6">
                  <div className="login_form">
                    <div className="login_header">
                      <div className="login_title">Forgot Password</div>
                      <div className="login_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                    </div>
                    <div className="login_field">
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={FormSubmit}
                      >
                        {(formik) => {
                          return (
                            <Form
                              autoComplete="off"
                              className="form-mt login_form_field"
                            >
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
                              <div className="forget-pass-btn">
                                <button
                                  type="submit"
                                  className="btn auth_green_btn w-100 m-0 mt-3"
                                >
                                  Reset password
                                  {isLoading && (
                                    <span className="loader-box">
                                      <LoaderSpinner />
                                    </span>
                                  )}
                                </button>
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
