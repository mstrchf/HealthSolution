import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";

const Reducer = combineReducers({
  LoginReducer,
  UserReducer,
});
export default Reducer;
