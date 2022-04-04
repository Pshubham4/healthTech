import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isLogin } from '../redux/action/LoginCheck'


const Signin = () => {

const dispatch = useDispatch()  

//This is router constant
const navigate = useNavigate()  

const initialState = { email:"", password:""}

    const [info,Setinfo] = useState(initialState)

    const handleinfo = (e) =>
    {
      const nam = e.target.name
      const value = e.target.value

      Setinfo({...info,[nam]:value})

    }

    const handleSubmit =  (e) =>
    { 
      e.preventDefault()
        axios.post(`http://localhost:4040/login`,info)
        .then((res)=>{
          alert(res.data.message)
          if(res.status===200)
          {
            const userName = res.data.name
            const userEmail = res.data.email
            dispatch(isLogin(userName,userEmail))
            console.log(userName,userEmail)
            navigate('/')
          }})
        .catch((err)=>alert(err))
      
    }

  

  return (
      <div className='container-lg formdiv'>
    <form className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

      <label htmlFor="inputEmail"  className="sr-only">Email address</label>
      <input type="email" id="inputEmail" name='email' onChange={handleinfo} value={info.email} 
      className="form-control" placeholder="Email address" required="" autoFocus=""/>

      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" name='password' onChange={handleinfo} value={info.password} 
      className="form-control" placeholder="Password" required=""/>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" onClick={handleSubmit} type="submit">Sign in</button>
      <br></br>
      <span>Or Register as new user </span>
      <button className="btn btn-lg btn-primary btn-block" onClick={(e)=>navigate('/signup')} type="button">
      Sign Up</button>
      <p className="mt-5 mb-3 text-muted">© 2022-2023</p>
    </form>
    </div>
  )}


export default Signin