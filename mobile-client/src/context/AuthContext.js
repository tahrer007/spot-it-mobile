import createDateContext from "./createDateContext";
import api from "../services/api/api"

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const signup= (dispatch)=>{
  return ({email, password})=>{

  }
}
const signin= (dispatch)=>{
  return ({email, password})=>{
    
  }
}
const signout =(dispatch)=>{
  return ()=>{

  }
}

export const { Provider, Context } = createDateContext(
  authReducer,
  {signup,signin,signout},//actions
  { isSingnedIn: false }//state 
);
