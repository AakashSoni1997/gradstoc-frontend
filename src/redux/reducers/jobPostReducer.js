import {
  CATEGORY_LIST_ERROR,
  CATEGORY_LIST_SUCCESS,
  COUNTRY_LIST_ERROR,
  COUNTRY_LIST_SUCCESS,
  COURSE_LIST_ERROR,
  COURSE_LIST_SUCCESS,
  IS_LOADING,
  SCHOOL_LIST_ERROR,
  SCHOOL_LIST_SUCCESS,
  STATE_LIST_ERROR,
  STATE_LIST_SUCCESS,
  SUBJECT_LIST_ERROR,
  SUBJECT_LIST_SUCCESS,
  SUB_CATEOGRY_LIST_ERROR,
  SUB_CATEOGRY_LIST_SUCCESS,
} from "../actions/types";

const initialState = {
  loading: false,
  category_list_success: [],
  category_list_error: {},
  sub_category_list_success:[],
  sub_category_list_error: {},
  school_list_success: [],
  school_list_error: {},
  subject_list_success: [],
  subject_list_error: {},
  course_list_success: [],
  course_list_error: {},
  country_list_success: [],
  country_list_error: {},
  state_list_success: [],
  state_list_error: {},
};

export default function jobPostReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: true,
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
        case SCHOOL_LIST_SUCCESS:
          return {
            ...state,
            loading: false,
            school_list_success: action.payload,
          };
        case SCHOOL_LIST_ERROR:
          return {
            ...state,
            loading: false,
            school_list_error: action.payload,
          };
          case COURSE_LIST_SUCCESS:
          return {
            ...state,
            loading: false,
            course_list_success: action.payload,
          };
        case COURSE_LIST_ERROR:
          return {
            ...state,
            loading: false,
            course_list_error: action.payload,
          };
          case SUBJECT_LIST_SUCCESS:
            return {
              ...state,
              loading: false,
              subject_list_success: action.payload,
            };
          case SUBJECT_LIST_ERROR:
            return {
              ...state,
              loading: false,
              subject_list_error: action.payload,
            };
            case COUNTRY_LIST_SUCCESS:
              return {
                ...state,
                loading: false,
                country_list_success: action.payload,
              };
            case COUNTRY_LIST_ERROR:
              return {
                ...state,
                loading: false,
                country_list_error: action.payload,
              };
              case STATE_LIST_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  state_list_success: action.payload,
                };
              case STATE_LIST_ERROR:
                return {
                  ...state,
                  loading: false,
                  state_list_error: action.payload,
                };
    default:
      return state;
  }
}
