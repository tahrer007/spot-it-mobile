import createDateContext from "./createDateContext";
import api from "../services/api/api";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const signup = (dispatch) => {
  return async ({ name, email, password }) => {
    try {
      const response = await api.post("/signup", {name, email, password });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
};
const signin = (dispatch) => {
  return ({ email, password }) => {};
};
const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDateContext(
  authReducer,
  { signup, signin, signout }, //actions
  { isSingnedIn: false } //state
);
