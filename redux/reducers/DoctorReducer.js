import { ADD_DOCTOR, UPDATE_DOCTOR, DELETE_DOCTOR, GET_ALL_DOCTORS } from "../actions/DoctorAction";


const initialDoctor = {
    CurrentDoctor: null,
    loading: true,
    data : [],
}

    



function DoctorReducer (state = initialDoctor,action){
    switch(action.type){
        case ADD_DOCTOR:
            return{
                ...state,
                 CurrentDoctor:
                 action.payload,
                 loading: false,
            }
            case GET_ALL_DOCTORS:
                return{
                    ...state,
                    data: action.payload,
                }
            case UPDATE_DOCTOR:
                return{
                    ...state, CurrentDoctor:action.payload,
                }

            case DELETE_DOCTOR:
                return {
                    ...state,
                    loading: false,
                }
            default:
            return state;    
    }
}
export default DoctorReducer;