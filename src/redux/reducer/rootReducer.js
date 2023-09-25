import { combineReducers } from "redux";
import useReducer from "./userReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: useReducer,
});

export default rootReducer;
