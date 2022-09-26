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
      console.debug(result);
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

export const RRegister = (username, password) => dispatch => {
  dispatch({type:REGISTER_SUCCESS});
    return axios.post(register,{username: username, password: password})
    .then((response) =>{
      dispatch(registerSuccess(response.data));
      console.debug(response);

      // return data;
    })
    .catch((error) =>{
      dispatch(registerFail(error));
      console.debug("could not register")
    })
  
};
