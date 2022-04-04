import React from 'react'
import Header from '../Startup/Header'
import Header2 from './Header2'
import { useSelector} from 'react-redux'



const HeaderToggle = () => {

    const toggleLogin = useSelector(state=>state.loginReducer.isLogin)
  
    

  return (
    <>
    { toggleLogin ? <Header2/> : <Header/>}
    </>
  )
}

export default HeaderToggle