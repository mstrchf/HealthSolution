//ACTION TYPE
export const ADD_DOCTOR = "ADD_DOCTOR";
export const DELETE_DOCTOR = "DELETE_DOCTOR";
export const UPDATE_DOCTOR = "UPDATE_DOCTOR";


//ACTION CREATORS
export const AddDoctor = () => ({
    type: ADD_DOCTOR,
    payload: NewDoctor,
})


export const DeleteDoctor = () =>({
    type: DELETE_DOCTOR,
    payload: Id,
});


export const UpdateDoctor = () =>({
    type: UPDATE_DOCTOR,
    payload: Id,
})