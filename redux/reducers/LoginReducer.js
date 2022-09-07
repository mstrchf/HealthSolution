import {AUTHENTICATE, AUTHENTICATE_SUCCESS, USER_ERROR} from "../actions/LoginAction";

const initialState = {
    currentUser : null,
    error: null
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case USER_ERROR:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default LoginReducer;
