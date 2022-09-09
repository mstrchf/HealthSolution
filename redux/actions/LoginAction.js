//ACTION TYPES
export const AUTHENTICATE = "AUTHENTICATE";
export const AUTHENTICATE_SUCCESS = "AUTHENTICATION_SUCCESS";
export const LOGOUT = "LOGOUT";
export const USER_ERROR = "USER_RROR";
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

import axios from "axios";
const login = "http://172.23.45.149:7222/api/Login/Login";
const register = "http://172.23.45.149:7222/api/Login/Register";

//ACTION CREATION
// export const GetUser = (NewUser) => ({
//   type: GET_USER,
//   payload: NewUser,
// });

export const Logout = (payload) => ({
  type: LOGOUT,
  payload,
});

const authSuccess = payload => ({
  type: AUTHENTICATE_SUCCESS,
  payload
});

const authError = payload => ({
  type: USER_ERROR,
  payload
})

//
export const Login = ( username, password) => dispatch => {
    dispatch({type: AUTHENTICATE})
    return axios.post(login, {username: username, password: password}).then(result => {
      dispatch(authSuccess(result.data));
    }).catch(error => {
      dispatch(authError(error.response.data));
      return Promise.reject({error});
    });
}


//Regiter Creators
 const Register = (Token)=>({
  type: REGISTER,
  payload: Token
});

const RSuccess = payload =>({
  type:REGISTER_SUCCESS,
  payload
})

export const RegisterSuccess = (username,password) => dispatch =>{
  dispatch({type:REGISTER})
  return axios.post(register, {username: username, password: password})
  .then((result)=>{
    dispatch(Register(result.data))
  })
  .catch(() =>{
    console.log('error')
  })

  
}