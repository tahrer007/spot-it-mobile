import createDateContext from "./createDateContext";
import api from "../services/api/api";
const intialState ={ isSingnedIn: false  ,errorMessage : ""}
const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR" : return {...state , errorMessage : action.payload}
    default:
      return state;
  }
};
const signup = (dispatch) => {
  return async ({ name, email, password }) => {
    try {
      const response = await api.post("/signup", {name, email, password });
      //console.log(response.data);
    } catch (error) {
      dispatch({type:"ADD_ERROR",payload :"something went wrong with sign up"});
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
  intialState
);
