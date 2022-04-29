export const initialState ={
    isSignedIn : false ,
}
 const authReducer =(state,action)=>{
    const  {type,payload}=action;
    switch (type){
        case "lOG_IN":console.log("lOG_IN",payload) ; 
        return {
            ...state,isSignedIn : !isSignedIn
        };
        case "SIGN_UP":console.log("SIGN_UP",payload) ; 
        return {
            ...state,isSignedIn : !isSignedIn
        };
        case "LOG_OUT":console.log("LOG_OUT",payload) ; 
        return {
            ...state,isSignedIn : !isSignedIn
        };

        default : throw new Error(`no case for type ${type}`)
       
       

    }
}

export default  authReducer