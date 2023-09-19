import React, { useState, useEffect } from "react";
import "./Authentication.scss";
import { Form } from "react-bootstrap";
import Intro from "../../Components/TheIntroducation/Intro";
import OtpInput from "react-otp-input";
import LoaderSpinner from "../../Components/Loader/Loader";
import { VerifyOTP, ResendOTP } from "../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OTP = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const optApiReponse = useSelector((state) => state.auth);
  const isCompleteApiResponse=useSelector((state)=>state.auth.set_user.user_data?.complete_profile)

  if (props.location.state !== undefined) {
    localStorage.setItem("email", props.location.state);
  }

  const [submitClick, setSubmitClick] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [counter, setCounter] = useState(59);
  const [resent, setResent] = useState(false);
  const email = localStorage.getItem("email");

  const [getOtp, setGetOtp] = useState({
    otp: "",
    email: email,
  });

  const resendOTP = (e) => {
    e.preventDefault();
    dispatch(
      ResendOTP({
        email: getOtp.email,
      })
    );
    resenttimer();
  };

  const handleChange = (otp) => {
    if (otp.length === 4) {
      setOtpError(false);
    }

    setGetOtp({ ...getOtp, otp });
  };

  const handSubmit = (e) => {
    e.preventDefault();
    if (getOtp.otp.length < 4 && getOtp.otp.length > 0) {
      setOtpError(true);
    } else if (getOtp.otp.length === 0) {
      setOtpError(true);
    } else {
      setSubmitClick(true);
      dispatch(VerifyOTP(getOtp));
    }
  };

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      setResent(true);
    }
    return () => clearInterval(timer);
  }, [counter]);

  function resenttimer() {
    setCounter(59);
    setResent(false);
  }

  if (submitClick) {
    if (optApiReponse.otp.data !== undefined) {
      if (
        optApiReponse.otp.data.status === true &&
        optApiReponse.otp.data.status_code === 200
      ) {
        if(isCompleteApiResponse===1){
          props.history.push({
            pathname: "/",
          });
        }else if(isCompleteApiResponse===0){
          props.history.push({
            pathname: "/user-skill-select",
          })
        }
        setSubmitClick(false);
        localStorage.removeItem("email");
      }
    }
  }

  console.log(isCompleteApiResponse,"isCompleteApiResponse");

  return (
    <>
      <section className="section section_login">
        <div className="container index1">
          <div className="row">
            <div className="col-md-12">
              <div className="back_to_home">
                <Link to="/register">
                  <img src="./images/back_to_home.png" alt="Back to home" />
                  Back to sign up screen
                </Link>
              </div>
              <div className="flex align_center">
                <div className="col-md-6">
                  <Intro />
                </div>
                <div className="col-md-6">
                  <div className="login_form opt-form">
                    <div className="login_header">
                      <div className="login_title">Enter OTP</div>
                      <div className="login_subtitle">
                        Please Enter the OTP you have received on your register
                        email to verify
                      </div>
                    </div>
                    <div className="login_field">
                      <Form
                        autoComplete="off"
                        className="form-mt login_form_field"
                        onSubmit={handSubmit}
                      >
                        <div className="enter-otp-text-con">
                          <b>Enter Your Verification Code</b>
                        </div>
                        <div className="opt-con">
                          <OtpInput
                            value={getOtp.otp}
                            numInputs={4}
                            className="otp-col-con"
                            inputStyle="custom-style-opt"
                            onChange={handleChange}
                            isInputNum={true}
                          />
                          {otpError && (
                            <div>
                            <div className="error-otp">
                              Please Enter the OTP
                            </div>
                            </div>
                          )}
                        </div>
                        <div className="opt-timer-con">
                          Code expires in :-
                          <span className="opt-timer-con__color">
                            00:{counter < 10 ? <>0{counter}</> : counter}
                          </span>
                        </div>
                        <div className="opt-timer-con otp-resend-con">
                          Didn’t receive Code ?
                          {resent ? (
                            <>
                              <button
                                onClick={resendOTP}
                                className="resent-btn-con-text"
                              >
                                <span className="opt-timer-con__color otp-resend-con__color">
                                  Resend Code
                                </span>
                              </button>
                            </>
                          ) : (
                            <button disabled className="resent-btn-con-text">
                              <span className="opt-timer-con__color otp-resend-con__color disabled-btn-color">
                                Resend Code
                              </span>
                            </button>
                          )}
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="btn auth_green_btn w-100 m-0 mt-3"
                          >
                            Verify {isLoading && <LoaderSpinner />}
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
};
export default OTP;
