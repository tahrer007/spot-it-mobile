import React, { useReducer } from "react";

export default (reducer , actions,defaultValue)=>{
    const Context =React.createContext();
    const Provider =({children})=>{
        const [state,dispatch]=useReducer(reducer,defaultValue) ;
        const boundActions ={} ;
        for(let key in actions){
            boundActions[key]=actions[key](dispatch) ; 

        }
        return (<Context.Provider value={{state,...boundActions}}>{children}</Context.Provider>)
    }
    return {Context , Provider } ; 
}



/*import React, { useReducer, createContext, useContext } from "react";
import { initialState, authReducer } from "./reducers";
export const store = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = (email, password) => {
    dispatch({
      type: "SIGN_IN",
      payLoad: {},
    });
  };
  const logIn = () => {};
  const logOut = () => {};
  const value = {
    isSignedIn: state.isSignedIn,
  };
  return <store.Provider>{children}</store.Provider>;
};
const useStore = () => {
  const context = useContext(store);
  if (!context) throw new Error("useStore must be used within store");
  return context;
};
export default useStore;*/
