import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";


const Reducer = combineReducers({
  user: LoginReducer,
});
export default Reducer;
