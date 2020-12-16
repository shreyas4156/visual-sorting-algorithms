import * as actionTypes from "./ActionTypes";
export const setAlgo = (algo) => {
  return {
    type: actionTypes.SET_ALGORITHM,
    payload: algo,
  };
};

export const setSize = (size) => ({
  type: actionTypes.SET_SIZE,
  payload: size,
});

export const setArray = (size) => {
  let array = [];
  for (let i = 0; i < size; i++)
    array.push(Math.floor(Math.random() * 1000) + 5);
  return {
    type: actionTypes.SET_ARRAY,
    payload: array,
  };
};
