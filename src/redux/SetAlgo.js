import * as actionTypes from "./ActionTypes";
export const SetAlgo = (
  state = {
    algo: "",
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SET_ALGORITHM:
      return { ...state, algo: action.payload };
    default:
      return state;
  }
};
