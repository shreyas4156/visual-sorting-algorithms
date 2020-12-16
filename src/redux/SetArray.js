import * as ActionTypes from "./ActionTypes";

export const SetArray = (
  state = {
    array: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_ARRAY:
      return { ...state, array: action.payload };
    default:
      return state;
  }
};
