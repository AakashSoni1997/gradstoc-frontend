import axios from "axios";
import { toast } from "react-toastify";
import getCurrentHost from "../constants";
import { authHeader } from "./authHeader";
import { BANNER_LIST_ERROR, BANNER_LIST_SUCCESS, IS_LOADING } from "./types";

export const GetBannerList = (body) => async (dispatch) => {
    dispatch({ type: IS_LOADING });
    axios
      .get(getCurrentHost() + "/banner-listing",{
        headers: authHeader(true),
      })
      .then((response) => {
        dispatch({
          type: BANNER_LIST_SUCCESS,
          payload: response.data.data,
        });
      })
      .catch((errors) => {
        dispatch({
          type: BANNER_LIST_ERROR,
          payload: errors.response.data.message,
        });
          toast.error(errors.response.data.message);
      });
  };