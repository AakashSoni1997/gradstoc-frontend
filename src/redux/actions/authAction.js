import axios from "axios";
import store from "../store";
import getCurrentHost from "./../constants/index";
import { authHeader } from "./authHeader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_LOADING,
  SIGNUP_ERRORS,
  SIGNUP_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  LOGOUT_SUCCESS,
  SET_CURRENT_USER,
  OTP_SUCCESS,
  OTP_ERRORS,
  RE_OTP_SUCCESS,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  RE_OTP_ERRORS,
  RE_OTP_LOADING,
} from "./types";

toast.configure();

export const setCurrentUser = (userData) => {
  return store.dispatch({
    type: SET_CURRENT_USER,
    payload: userData,
  });
};

export const SignUpAction = (formData) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  axios
    .post(getCurrentHost() + "/register", formData, {
      headers: authHeader(true),
    })
    .then((response) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response,
      });
      toast.success(response.data.message);
    })
    .catch((errors) => {
      dispatch({
        type: SIGNUP_ERRORS,
        payload: errors.response.data.message,
      });
      if (errors.response.data.message !== undefined) {
        toast.error(errors.response.data.message);
      } else if (errors.response.data.errorMessage.email_id) {
        toast.error(errors.response.data.errorMessage.email_id.message);
      } else {
        toast.error(errors.response.data.errorMessage.countries.message);
      }
    });
};
export const VerifyOTP = (otp) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  axios
    .post(getCurrentHost() + "/verify-otp", otp, {
      headers: authHeader(true),
    })
    .then((response) => {
      dispatch({
        type: OTP_SUCCESS,
        payload: response,
      });
      toast.success(response.data.message);
      if (response.data.data.token) {
        const encode = response.data.data.token;
        localStorage.setItem("userData", encode);
        dispatch(setCurrentUser(response.data.data));
      }
    })
    .catch((errors) => {
      dispatch({
        type: OTP_ERRORS,
        payload: errors.response?.data,
      });
      if (errors.response?.data?.message !== undefined) {
        toast.error(errors.response?.data?.message);
      }
    });
};
export const ResendOTP = (otp) => (dispatch) => {
  dispatch({ type: RE_OTP_LOADING });
  axios
    .post(getCurrentHost() + "/resend-otp", otp, {
      headers: authHeader(true),
    })
    .then((response) => {
      dispatch({
        type: RE_OTP_SUCCESS,
        payload: response,
      });
      toast.success(response.data.message);
    })
    .catch((errors) => {
      dispatch({
        type: RE_OTP_ERRORS,
        payload: errors.response.data,
      });
      if (errors.response.data.message !== undefined) {
        toast.error(errors.response.data.message);
      } else {
        toast.error(errors.response.data.errorMessage.otp.message);
      }
    });
};

export const LoginAction = (body) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  axios
    .post(getCurrentHost() + "/login", body, {
      headers: authHeader(true),
    })
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
      dispatch(setCurrentUser(response.data.data));
      toast.success(response.data.message);
      if (response.data.data.token) {
        const token = response.data.data.token;
        localStorage.setItem("userData", token);
      }
    })
    .catch((errors) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: errors?.response?.data?.message,
      });
      if (errors?.response?.data?.message !== undefined) {
        toast.error(errors?.response?.data?.message);
      } else {
        toast.error("Server Error");
      }
    });
};

export const ForgotPasswordAction = (data) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  axios
    .post(getCurrentHost() + "/forgot-password", data, {
      headers: authHeader(true),
    })
    .then((response) => {
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: response.data,
      });
      toast.success(response.data.message);
    })
    .catch((errors) => {
      dispatch({
        type: FORGOT_PASSWORD_ERROR,
        payload: errors.response.data.message,
      });
      toast.error(errors.response.data.message);
    });
};

export const ResetPasswordAction = (formData) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  axios
    .post(getCurrentHost() + "/update-password", formData, {
      headers: authHeader(true),
    })
    .then((response) => {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: response.data,
      });
      toast.success(response.data.message);
    })
    .catch((errors) => {
      dispatch({
        type: RESET_PASSWORD_ERROR,
        payload: errors.response.data.message,
      });
      if (errors.response.data.message !== undefined) {
        toast.error(errors.response.data.message);
      }
    });
};

export const LogoutAction = (data) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  axios
    .post(getCurrentHost() + "/logout", data, {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: response,
      });
      dispatch(setCurrentUser({}));
      localStorage.removeItem("userData");
      toast.success(response.data.message);
    })
    .catch((errors) => {});
};
export const ChangePasswordAction = (data) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  axios
    .post(getCurrentHost() + "/change-password", data, {
      headers: authHeader(true),
    })
    .then((response) => {
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: response.data,
      });
      toast.success(response.data.message);
    })
    .catch((errors) => {
      dispatch({
        type: CHANGE_PASSWORD_ERROR,
        payload: errors.response.data.message,
      });
      if (errors.response.data.message !== undefined) {
        toast.error(errors.response.data.message);
      }
    });
};
