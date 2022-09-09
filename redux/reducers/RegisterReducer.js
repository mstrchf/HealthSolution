import { REGISTER, REGISTER_SUCCESS } from "../actions/LoginAction";

const initialRegister = {
  AuthRegister: null,
};

function RegisterReducer(state = initialRegister, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        initialRegister: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        initialRegister: action.payload,
      };
    default:
      return state;
  }
}
export default RegisterReducer;
