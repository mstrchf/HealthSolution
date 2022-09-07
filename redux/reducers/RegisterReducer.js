import { REGISTER , REGISTER_SUCCESS } from "../actions/LoginAction";

const initialRegister ={
    RUser: null
    
}

function RegisterReducer  ( state = initialRegister, action) {
    switch(action.type){
        case REGISTER:
            return{
                ...state, 
                RUser: null,
            };
            case REGISTER_SUCCESS:
                return{
                    ...state, 
                    initialRegister:action.payload
                }

          default:
          return state;
    }


}
 export default RegisterReducer;