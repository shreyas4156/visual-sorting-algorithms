import * as ActionTypes from "./ActionTypes";
export const SetSize = (
  state = {
    size: 50,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_SIZE:
      return { ...state, size: action.payload };
    default:
      return state;
  }
};
