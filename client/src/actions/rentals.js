import * as api from "../api";
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
  SUBSCRIPTION_DONE,
} from "../constants/actionTypes";
export const getRentals = () => async (dispatch) => {
  try {
    dispatch({ type: SUBSCRIPTION_DONE });
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchRentals();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createRental = (rental, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createRental(rental);
    history.push("/rent");
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const getRental = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    dispatch({ type: PAYMENT_IS_PENDING });
    const { data } = await api.bookRental(id);
    dispatch({ type: FETCH_RENTAL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const updateRental = (id, rental, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateRental(id, rental);
    history.push("/rent");
    dispatch({ type: UPDATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const deleteRental = (id, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    await api.deleteRental(id);
    history.push("/rent");
    dispatch({ type: DELETE, payload: id });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const getRentalsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchRentalsBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const makePayment = (newPayment, id) => async (dispatch) => {
  try {
    dispatch({ type: PAYMENT_IS_PENDING });
    dispatch({ type: START_LOADING });
    const { data } = await api.makePayment(newPayment, id);
    dispatch({ type: MAKE_PAYMENT, payload: data });
    dispatch({ type: PAYMENT_DONE });
  } catch (e) {
    console.log(e);
  }
};

export const fetchUserBookings = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchUserBookings();

    dispatch({ type: FETCH_USER_BOOKINGS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};
