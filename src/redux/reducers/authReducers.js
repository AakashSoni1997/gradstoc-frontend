import {
  AUTH_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERRORS,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  LOGOUT_SUCCESS,
  SET_CURRENT_USER,
  OTP_SUCCESS,
  OTP_ERRORS,
  RE_OTP_SUCCESS,
  RE_OTP_ERRORS,
  USER_ADD,
  USER_UPDATE,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  RE_OTP_LOADING,
} from "./../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  isAuthenticated: false,
  user: {},
  sign_up: {},
  otp: {},
  re_otp: {},
  login: {},
  logout: {},
  set_user: {},
  reset_password: {},
  forgot_password: {},
  error: {},
  loading: false,
  change_password: {},
  resentLoading: false,
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        set_user: action.payload,
      };
    case USER_ADD:
      return {
        isAuthenticated: !isEmpty(action.payload),
        set_user: action.payload,
      };
    case USER_UPDATE:
      return {
        isAuthenticated: !isEmpty(action.payload),
        set_user: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: {},
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: {},
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        sign_up: action.payload,
        loading: false,
        error: {},
      };
    case SIGNUP_ERRORS:
      return {
        ...state,
        loading: false,
        error: action.payload,
        sign_up: {},
      };
    case OTP_SUCCESS:
      return {
        ...state,
        otp: action.payload,
        loading: false,
        error: {},
        login: {},
        sign_up: {},
      };
    case OTP_ERRORS:
      return {
        ...state,
        loading: false,
        error: action.payload,
        otp: {},
      };
    case RE_OTP_LOADING:
      return {
        ...state,
        resentLoading: true,
      };
    case RE_OTP_SUCCESS:
      return {
        ...state,
        re_otp: action.payload,
        resentLoading: false,
        error: {},
        login: {},
        sign_up: {},
      };
    case RE_OTP_ERRORS:
      return {
        ...state,
        resentLoading: false,
        error: action.payload,
        otp: {},
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgot_password: action.payload,
        loading: false,
        error: {},
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        forgot_password: {},
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        reset_password: action.payload,
        loading: false,
        error: {},
        forgot_password: {},
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        reset_password: {},
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logout: action.payload,
        loading: false,
        login: {},
        error: {},
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        change_password: action.payload,
        loading: false,
        error: {},
      };
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        change_password: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
