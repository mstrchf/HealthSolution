import { combineReducers } from "redux";
import Book from "./BookingReducer";
import DoctorReducer from "./DoctorReducer";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";

const Reducer = combineReducers({
  user: LoginReducer,
  register: RegisterReducer,
  doctor: DoctorReducer,
  users: Book,
});
export default Reducer;
