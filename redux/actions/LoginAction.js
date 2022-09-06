//ACTION TYPES
export const SET_POST = "SET_POST";
export const LOGOUT = "LOGOUT";

// import axios from "axios";
// const API = "http://172.23.45.149:7222/api/Login/Login";

//ACTION CREATION
export const Login = () => ({
  type: SET_POST,
  payload: NewUser,
});

export const Logout = () => ({
  type: LOGOUT,
});
