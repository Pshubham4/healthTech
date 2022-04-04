
export const isLogin = (userName,userEmail) =>
{
   return {type:"ISLOGIN",
           payload:{
              userName:userName,
              userEmail:userEmail
           } }
}

export const isLogout = () =>
{
   return {type:"ISLOGOUT"}
}