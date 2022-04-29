import React, { useReducer ,createContext } from "react";
import { initialState , authReducer } from "./reducers";
export const store = createContext();

const appProvider =({children}) =>{
    const [state,dispatch]=useReducer(authReducer,initialState) ;

    const signIn =(email,password)=>{
        dispatch ({
            type : "SIGN_IN",
            payLoad : {

            }
        })

    }
    const logIn= () =>{

    }
    const logOut =()=>{

    }
    const value ={
        isSignedIn : state.isSignedIn
    }
    return <store.appProvider>{children}</store.appProvider>
}
