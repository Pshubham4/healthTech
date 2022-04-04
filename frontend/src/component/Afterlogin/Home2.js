import React from 'react'
import { useSelector } from 'react-redux'
import SearchBar from './SearchBar'
import { Route, Routes } from 'react-router-dom'



const Home2 = () => {

  const info = useSelector(state=>state.loginReducer)


  return (
    <>
    <h2>Welcome {info.userName} </h2>
     <SearchBar/>
    </>
  )
}

export default Home2