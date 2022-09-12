//ACTION TYPES
export const AUTHENTICATE = "AUTHENTICATE";
export const AUTHENTICATE_SUCCESS = "AUTHENTICATION_SUCCESS";
export const LOGOUT = "LOGOUT";
export const USER_ERROR = "USER_RROR";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

import axios from "axios";
const login = "http://172.23.45.149:7222/api/Login/Login";
const register = "http://172.23.45.149:7222/api/Login/Register";



export const Logout = (payload) => ({
  type: LOGOUT,
  payload,
});

const authSuccess = (payload) => ({
  type: AUTHENTICATE_SUCCESS,
  payload,
});

const authError = (payload) => ({
  type: USER_ERROR,
  payload,
});

//Login creator
export const Login = (username, password) => (dispatch) => {
  dispatch({ type: AUTHENTICATE });
  return axios
    .post(login, { username: username, password: password })
    .then((result) => {
      dispatch(authSuccess(result.data));
    })
    .catch((error) => {
      dispatch(authError(error.response.data));
      return Promise.reject({ error });
    });
};

//Regiter Creators
const registerSuccess = (Token) => ({
  type: REGISTER_SUCCESS,
  payload: Token,
});

const registerFail = (payload) => ({
  type: REGISTER_FAIL,
  payload,
});

export const Register = () => {};
