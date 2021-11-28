import { TOGGLE_CHECKBOX, SIGN_IN, SIGN_OUT } from "./actions";

const initialState = {
  checkbox: false,
  name: "Имя по умолчанию",
  authed: false
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return {
        ...state,
        checkbox: !state.checkbox,
      };
    case SIGN_IN:
      return {
        ...state,
        authed: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        authed: false,
      };
    default:
      return state;
  }
};