//ACTION TYPE
export const ADD_DOCTOR = "ADD_DOCTOR";
export const ADD_FAIL = "ADD_FAIL";
export const DELETE_DOCTOR = "DELETE_DOCTOR";
export const DELETE_FAIL = "DELETE_FAIL";
export const UPDATE_DOCTOR = "UPDATE_DOCTOR";
export const UPDATE_FAIL = "UPDATE_FAIL";

import axios, { Axios } from "axios";
const Add = "http://172.23.45.149:7222/api/Doctors";
const Delete = "http://172.23.45.149:7222/api/Doctors/{id}";
const Update = "http://172.23.45.149:7222/api/Doctors/{id}";

//ACTION CREATORS
const addDoctor = (NewDoctor) => ({
  type: ADD_DOCTOR,
  payload: NewDoctor,
});

const addFail = (payload) => ({
  type: ADD_FAIL,
  payload,
});

const deleteDoctor = (Id) => ({
  type: DELETE_DOCTOR,
  payload: Id,
});

const deleteFail = (Id) => ({
  type: DELETE_FAIL,
  payload: Id,
});

const updateDoctor = (DoctorUpdate) => ({
  type: UPDATE_DOCTOR,
  payload: DoctorUpdate,
});

const updateFail = (payload) => ({
  type: UPDATE_FAIL,
  payload,
});

export const AddDoctor =
  (Firstname, Lastname, Specialization, Phonenumber, Email) => (dispatch) => {
    dispatch({ type: ADD_DOCTOR });
    return axios
      .post(Add, {
        Firstname: Firstname,
        Lastname: Lastname,
        Spacialization: Specialization,
        Phonenumber: Phonenumber,
        Email: Email,
      })
      .then((data) => {
        dispatch(addDoctor(data.data));
        console.log(data.data);
      })
      .catch((error) => {
        dispatch(addFail(error));
        console.debug(error.response.data)
        console.log("error from add");
      });
  };

export const DeleteDoctor = (Id) => (dispatch) => {
  dispatch({ type: DELETE_DOCTOR });
  return axios
    .delete(Delete, { FirstName, LastName, Specialization, PhoneNumer, Email })
    .then((data) => {
      dispatch(deleteDoctor(data));
      console.log(data);
    })
    .catch((error) => {
      dispatch(deleteFail(error));
      console.log("can not delete");
    });
};

export const UpdateDoctor =
  (FirstName, LastName, Specialization, PhoneNumer, Email) => (dispatch) => {
    dispatch({ type: UPDATE_DOCTOR });
    return axios
      .put(Update, {
        FirstName: FirstName,
        LastName: LastName,
        Specialization: Specialization,
        PhoneNumer: PhoneNumer,
        Email: Email,
      })
      .then((data) => {
        dispatch(updateDoctor(data));
        console.log(data);
      })
      .catch((error) => {
        dispatch(updateFail(error));
        console.log("can not update");
      });
  };
