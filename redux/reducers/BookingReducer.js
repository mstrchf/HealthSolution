import { BOOKING_SUCCESS, BOOKING_FAIL } from "../actions/BookingAction";

const InitialBooing = {
  Users: null,
};

function Book(state = InitialBooing, action) {
  switch (action.type) {
    case BOOKING_SUCCESS:
      return {
        ...state,
        Users: action.payload,
      };
    default:
      return state;
  }
}
export default Book;
