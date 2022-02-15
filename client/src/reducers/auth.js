import {
  AUTH,
  LOGIN_FAILURE,
  LOGIN_SUCCESSFUL,
  LOGOUT,
  START_LOADING,
  END_LOADING,
  UPDATE_ACCOUNT,
  SUBSCRIBE,
  SUBSCRIPTION_SUCCESSFUL,
  SUBSCRIPTION_DONE,
} from "../constants/actionTypes";

const auth = (
  state = {
    isLoading: true,
    loginFailed: false,
    subscribed: false,
    authData: [],
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
    case LOGIN_SUCCESSFUL:
      return { ...state, loginFailed: false, authData: action?.payload };
    case LOGIN_FAILURE:
      return { ...state, loginFailed: true, authData: action?.payload };
    case UPDATE_ACCOUNT:
      return {
        ...state,
        authData: state.authData.map((authDatum) =>
          authDatum._id === action.payload._id ? action.payload : authDatum
        ),
      };
    case SUBSCRIBE:
      return { ...state, authData: action.payload };
    case SUBSCRIPTION_SUCCESSFUL:
      return { ...state, subscribed: true };
    case SUBSCRIPTION_DONE:
      return { ...state, subscribed: false };
    default:
      return state;
  }
};

export default auth;
