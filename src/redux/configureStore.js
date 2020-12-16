import { SetArray } from "./SetArray";
import { SetAlgo } from "./SetAlgo";
import { SetSize } from "./SetSize";
const { createStore, combineReducers } = require("redux");

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ algo: SetAlgo, size: SetSize, array: SetArray })
  );
  return store;
};
