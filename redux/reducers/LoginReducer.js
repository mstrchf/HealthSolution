import { SET_POST, LOGOUT } from "../actions/LoginAction";

const initialState = {
  username: "",
  password: "",
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        initialState: action.payload,
      };

    default:
      return state;
  }
}
export default LoginReducer;
