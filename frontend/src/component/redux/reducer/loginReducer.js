import { isLogin } from "../action/LoginCheck"

const initialState = {
    isLogin:false,
    message:"",
    userName:"",
    userEmail:""
}

const loginReducer = (state=initialState,action) =>
{
    if(action.type==="ISLOGIN")
    {
       if(action.payload)
       {
           state.userName = action.payload.userName
           state.userEmail = action.payload.userEmail  
           state.isLogin= true
           return state = {...state,isLogin:true} 
       }
    }
    if(action.type==="ISLOGOUT")
    {
        state = initialState
        return {...state,isLogin:false}
    }
    
    else{
        return state
    }

}

export default loginReducer
