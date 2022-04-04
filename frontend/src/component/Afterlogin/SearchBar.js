import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Cards from './Cards'
import axios from 'axios'

const SearchBar = () => {
  
  const [state,setState] = useState({DataRecieved:""})
  const SearchPhrase = useRef()

  const handleSearch = async () =>
  { 
    if(SearchPhrase.current.value!==""){
          
    
      const res = await axios.post('http://localhost:4040/searchUser',{Name:SearchPhrase.current.value})
      if(res.status===200)
      {setState({...state,DataRecieved:res.data})}
      else 
      {alert('Data not found')}
      
      }
      else{
        alert('Search field cannot be empty');      }
  }
  

  return (
      <>
    <div className="col-lg-12 text-center mt-5">
  <h1>Patient Search</h1>
</div>
<div className="col-md-4 offset-md-4 mt-4  border-success pt-3">
<div className="input-group mb-3">
  <input type="text" ref={SearchPhrase} className="form-control" placeholder="Enter name" aria-label="Recipient's username"/>
  <div className="input-group-append">
    <button onClick={handleSearch} className="input-group-text"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

  </div>
  </div>
</div>

<div className='container cardContainer'>
 {state.DataRecieved[0] ? <Cards props={state.DataRecieved}/> : null}
</div>

</>
  )
}

export default SearchBar