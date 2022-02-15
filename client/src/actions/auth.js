import {
  AUTH,
  LOGIN_FAILURE,
  LOGIN_SUCCESSFUL,
  START_LOADING,
  UPDATE_ACCOUNT,
  END_LOADING,
  SUBSCRIBE,
  SUBSCRIPTION_SUCCESSFUL,
} from "../constants/actionTypes";
import * as api from "../api";
export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: START_LOADING });
    dispatch({ type: AUTH, data });
    dispatch({ type: LOGIN_SUCCESSFUL });
    if (data.result.role === "admin") {
      history.push("/adminDashboard");
    } else {
      history.push("/userDashboard");
    }
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error });

    console.log(error);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: LOGIN_SUCCESSFUL });
    history.push("/userDashboard");
  } catch (e) {
    console.log(e);
  }
};

export const updateAccount = (id, formData, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateAccount(id, formData);
    history.push("/userDashboard");
    dispatch({ type: UPDATE_ACCOUNT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (e) {
    console.log(e);
  }
};

export const subscribe = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.subscribe(formData);
    dispatch({ type: SUBSCRIBE, payload: data });
    dispatch({ type: SUBSCRIPTION_SUCCESSFUL });
  } catch (e) {
    console.log(e);
  }
};
