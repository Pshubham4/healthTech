import React,{ useEffect } from 'react'
import './App.css';
import Signin from './component/Startup/Signin';
import SignUp from './component/Startup/Signup';
import ErrorPage from './component/Startup/ErrorPage'
import {Routes, Route} from 'react-router-dom'
import Home from './component/Startup/Home';
import Home2 from './component/Afterlogin/Home2'
import HeaderToggle from './component/Afterlogin/HeaderToggle';
import { useSelector } from 'react-redux';
import Form from './component/Afterlogin/Form';
import SubmitSuccesful from './component/Afterlogin/SubmitSuccesful';

function App() {

  const isLogin = useSelector(state=>state.loginReducer.isLogin)
  
 
  return (
    <>
    <HeaderToggle/>
    { isLogin ?
    <Routes>
      <Route path="/" element= {<Home2/>}/>
      <Route path="/register" element={<Form/>}/>
      <Route path="/successMsg" element={<SubmitSuccesful/>}/>
    </Routes>
    :
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Signin/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    
    }
    </>
  );
}

export default App;
