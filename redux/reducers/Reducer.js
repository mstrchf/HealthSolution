import { combineReducers } from "redux";
import DoctorReducer from "./DoctorReducer";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";

const Reducer = combineReducers({
  user: LoginReducer,
  register: RegisterReducer,
  doctor: DoctorReducer,

});
export default Reducer;
