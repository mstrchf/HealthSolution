import { ADD_DOCTOR, UPDATE_DOCTOR, DELETE_DOCTOR } from "../actions/DoctorAction";


const initialDoctor = 
{
    FirstName: '',
    LastName: '',
    Specialization: '' ,
    PhoneNumer:'',
    Email: '',
    photo: "https://img.freepik.com/free-photo/portrait-successful-young-doctor-with-folder-stethoscope_1262-12410.jpg?w=1380&t=st=1662976193~exp=1662976793~hmac=43122057a34cb04e3b6d236f6a00b71f1fb267dbcd477444f0f3fedc171b579b",
}
    



function DoctorReducer (state = initialDoctor,action){
    switch(action.type){
        case ADD_DOCTOR:
            return{
                ...state,
                 initialDoctor:
                 action.payload,
            }
            case UPDATE_DOCTOR:
                return{
                    ...state, initialDoctor:action.payload,
                }

            case DELETE_DOCTOR:
                return state.filter((item) => item.id !== action.payload)
            default:
            return state;    
    }
}
export default DoctorReducer;