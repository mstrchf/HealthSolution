export const BOOKING_SUCCESS = "BOOKING_SUCCESS";
export const BOOKING_FAIL = "BOOKING_FAIL";
const book = "http://172.23.45.149:7222/api/Booking";
import axios from "axios";

const BSuccessful = (NewBooking) => ({
  type: BOOKING_SUCCESS,
  payload: NewBooking,
});

const BFail = () => ({
  type: BOOKING_FAIL,
});

export const Book = () => (dispatch) => {
  dispatch({ type: BOOKING_SUCCESS });
  return axios
    .post(book, { Firstname, Lastname, Day, Phonenumber, Time, Details })
    .then((Response) => {
      dispatch(BSuccessful(Response.data));
      console, debug(Response);
    })
    .catch((error) => {
      dispatch(BFail(error));
      console.debug(error.Response.data);
    });
};
