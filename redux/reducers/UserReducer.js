import { SET_POST, LOGOUT } from "../actions/LoginAction";

const initialState = {
  username: "",
  password: "",
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POST:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
export default UserReducer;
