import {
  FETCH_ALL,
  CREATE,
  FETCH_RENTAL,
  UPDATE,
  DELETE,
  FETCH_BY_SEARCH,
  START_LOADING,
  END_LOADING,
  MAKE_PAYMENT,
  PAYMENT_DONE,
  PAYMENT_IS_PENDING,
  FETCH_USER_BOOKINGS,
} from "../constants/actionTypes";

const rental = (
  state = { isLoading: true, paymentIsDone: false, rentals: [], rental: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case PAYMENT_DONE:
      return { ...state, paymentIsDone: true };

    case PAYMENT_IS_PENDING:
      return { ...state, paymentIsDone: false };

    case FETCH_ALL:
      return { ...state, rentals: action.payload.data };
    case FETCH_RENTAL:
      return { ...state, rental: action.payload };

    case CREATE:
      return { ...state, rental: action.payload };

    case MAKE_PAYMENT:
      return { ...state, rental: action.payload };
    case UPDATE:
      return {
        ...state,
        rentals: state.rentals.map((rental) =>
          rental._id === action.payload._id ? action.payload : rental
        ),
      };
    case DELETE:
      return {
        ...state,
        rental: state.rentals.filter((rental) => rental._id !== action.payload),
      };
    case FETCH_BY_SEARCH:
      return { ...state, rentals: action.payload.data };
    case FETCH_USER_BOOKINGS:
      return { ...state, rentals: action.payload.data };

    default:
      return state;
  }
};

export default rental;
