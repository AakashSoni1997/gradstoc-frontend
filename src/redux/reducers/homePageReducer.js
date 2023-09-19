import { BANNER_LIST_ERROR, BANNER_LIST_SUCCESS, CATEGORY_LIST_ERROR, CATEGORY_LIST_SUCCESS, IS_LOADING, SUB_CATEOGRY_LIST_ERROR, SUB_CATEOGRY_LIST_SUCCESS } from "../actions/types";


const initialState = {
    loading: false,
    banner_list_success: [],
    banner_list_error: {},
    category_list_success: [],
    category_list_error: {},
  };

  export default function homePageReducer(state = initialState, action) {
    switch (action.type) {
      case IS_LOADING:
        return {
          ...state,
          loading: true,
        };
      case BANNER_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          banner_list_success: action.payload,
        };
      case BANNER_LIST_ERROR:
        return {
          ...state,
          loading: false,
          banner_list_error: action.payload,
        };
        case CATEGORY_LIST_SUCCESS:
          return {
            ...state,
            loading: false,
            category_list_success: action.payload,
          };
        case CATEGORY_LIST_ERROR:
          return {
            ...state,
            loading: false,
            category_list_error: action.payload,
          };
            case SUB_CATEOGRY_LIST_SUCCESS:
          return {
            ...state,
            loading: false,
            sub_category_list_success: action.payload,
          };
        case SUB_CATEOGRY_LIST_ERROR:
          return {
            ...state,
            loading: false,
            sub_category_list_error: action.payload,
          };
      default:
        return state;
    }
  }