import { combineReducers } from "redux";
import authReducer from "./authReducers";
import homePageReducer from "./homePageReducer";
import jobPostReducer from "./jobPostReducer";
export default combineReducers({
  auth: authReducer,
  jobpost:jobPostReducer,
  homepage:homePageReducer,
});
