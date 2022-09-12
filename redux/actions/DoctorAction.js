//ACTION TYPE
export const ADD_DOCTOR = "ADD_DOCTOR";
export const DELETE_DOCTOR = "DELETE_DOCTOR";
export const UPDATE_DOCTOR = "UPDATE_DOCTOR";

import axios from "axios";
const api = "http://172.23.45.149:7222/api/Doctors";

//ACTION CREATORS
const AddDoctor = () => ({
  type: ADD_DOCTOR,
  payload: NewDoctor,
});

const DeleteDoctor = () => ({
  type: DELETE_DOCTOR,
  payload: Id,
});

const UpdateDoctor = () => ({
  type: UPDATE_DOCTOR,
  payload: Id,
});

export const Doctors = (NewDoctor) => dispatch =>{
  dispatch({type: ADD_DOCTOR});
  return axios.post(api,{})
  

}