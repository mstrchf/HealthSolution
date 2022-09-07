//ACTION TYPE
export const ADD_DOCTOR = "ADD_DOCTOR";
export const DELETE_DOCTOR = "DELETE_DOCTOR";
export const UPDATE_DOCTOR = "UPDATE_DOCTOR";

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
