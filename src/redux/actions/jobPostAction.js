import axios from "axios";
import { toast } from "react-toastify";
import getCurrentHost from "../constants";
import { authHeader } from "./authHeader";
import { CATEGORY_LIST_ERROR, CATEGORY_LIST_SUCCESS, COUNTRY_LIST_ERROR, COUNTRY_LIST_SUCCESS, COURSE_LIST_ERROR, COURSE_LIST_SUCCESS, IS_LOADING, SCHOOL_LIST_ERROR, SCHOOL_LIST_SUCCESS, STATE_LIST_ERROR, STATE_LIST_SUCCESS, SUBJECT_LIST_ERROR, SUBJECT_LIST_SUCCESS, SUB_CATEOGRY_LIST_ERROR, SUB_CATEOGRY_LIST_SUCCESS } from "./types";

export const GetCategoryList = () => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    axios
      .get(getCurrentHost() + "/getcategory-list",{
        headers: authHeader(),
      })
      .then((response) => {
        dispatch({
          type: CATEGORY_LIST_SUCCESS,
          payload: response.data.data,
        });
      })
      .catch((errors) => {
        dispatch({
          type: CATEGORY_LIST_ERROR,
          payload: errors.response.data.message,
        });
          toast.error(errors.response.data.message);
      });
  };

  export const PostSubCategoryList = (body) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    axios
      .post(getCurrentHost() + "/subcategory-list",body,{
        headers: authHeader(),
      })
      .then((response) => {
        dispatch({
          type: SUB_CATEOGRY_LIST_SUCCESS,
          payload: response.data.data,
        });
      })
      .catch((errors) => {
        console.log(errors.response.data,"errors.response.data");
        dispatch({
          type: SUB_CATEOGRY_LIST_ERROR,
          payload: errors.response.data.message,
        });
          toast.error(errors.response.data.message);
      });
  };

  
export const GetSchoolList = () => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  axios
    .get(getCurrentHost() + "/school-list",{
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({
        type: SCHOOL_LIST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      dispatch({
        type: SCHOOL_LIST_ERROR,
        payload: errors.response.data.message,
      });
        toast.error(errors.response.data.message);
    });
};

export const PostSubjectList = (body) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  axios
    .post(getCurrentHost() + "/subject-list",body,{
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({
        type: SUBJECT_LIST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      dispatch({
        type: SUBJECT_LIST_ERROR,
        payload: errors.response.data.message,
      });
        toast.error(errors.response.data.message);
    });
};

export const GetCourseList = () => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  axios
    .get(getCurrentHost() + "/course-list",{
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({
        type: COURSE_LIST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      dispatch({
        type: COURSE_LIST_ERROR,
        payload: errors.response.data.message,
      });
        toast.error(errors.response.data.message);
    });
};

export const GetCountryList = () => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  axios
    .get(getCurrentHost() + "/country-list",{
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({
        type: COUNTRY_LIST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      dispatch({
        type: COUNTRY_LIST_ERROR,
        payload: errors.response.data.message,
      });
        toast.error(errors.response.data.message);
    });
};

export const PostStateList = (body) => async (dispatch) => {
  dispatch({ type: IS_LOADING });
  axios
    .post(getCurrentHost() + "/state-list",body,{
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({
        type: STATE_LIST_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((errors) => {
      dispatch({
        type: STATE_LIST_ERROR,
        payload: errors.response.data.message,
      });
        toast.error(errors.response.data.message);
    });
};