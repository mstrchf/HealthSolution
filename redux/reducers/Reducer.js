import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";


const Reducer = combineReducers({
  user: LoginReducer,
  UserRegister:RegisterReducer,
});
export default Reducer;
