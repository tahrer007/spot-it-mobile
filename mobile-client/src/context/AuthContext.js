import createDateContext from "./createDateContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createDateContext(
  authReducer,
  {},//actions
  { isSingnedIn: false }//state 
);
