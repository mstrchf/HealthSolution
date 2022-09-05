import { NEW_POST } from "../actions/Action";


const initialState = {
  username: "",
  password: "",
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_POST:
      return {
       ... action.payload,
      };
    default:
      return state;
  }
}
export default UserReducer;
