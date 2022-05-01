import createDateContext from "./createDateContext";
import api from "../services/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {navigate} from "../routes/navigation/RootNavigation"


const intialState = { token: null, errorMessage: "" };
const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };

    case "SIGN_UP":
      return { token: action.payload, errorMessage: "" };
    case "SIGN_IN":
      return { token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};
const signup = (dispatch) => {
  return async ({ name, email, password }) => {
    try {
      const response = await api.post("/signup", { name, email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGN_UP", payload: response.data.token });
      navigator("acount");
    } catch (error) {
      console.log(error.message)

      dispatch({
        type: "ADD_ERROR",
        payload: "something went wrong with sign up",
      });
    }
  };
};
const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await api.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGN_IN", payload: response.data.token });
      navigate("acount");
    } catch (error) {
      console.log(error.message)
      dispatch({
        type: "ADD_ERROR",
        payload: "something went wrong with sign in",
      });
    }
  };
const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDateContext(
  authReducer,
  { signup, signin, signout }, //actions
  intialState
);
