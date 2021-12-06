import { REQUEST_STATUS } from "../../utils/constants";
import {
    REQUEST_NOD_FAILURE,
    REQUEST_NOD_LOADING,
    REQUEST_NOD_SUCCESS,
} from "./actions";

const initialState = {
    number: {},
    request: {
        status: REQUEST_STATUS.IDLE,
        error: "",
    }
};

export const NODReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_NOD_LOADING:
      return {
        ...state,
        request: {
          ...state.request,
          status: REQUEST_STATUS.LOADING,
        },
      };
    case REQUEST_NOD_SUCCESS:
      return {
        ...state,
        number: payload,
        request: {
          error: "",
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    case REQUEST_NOD_FAILURE:
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };
    default:
      return state;
  }
};
