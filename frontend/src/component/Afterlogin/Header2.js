import React from 'react'
import '../../styles.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { isLogout } from '../redux/action/LoginCheck'
 

const Header2 = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () =>
    {
        dispatch(isLogout())
        navigate('/')
        alert('Logout Succesful')
    }

    
  return (
  <>
     <div className="d-flex" id="wrapper">
            
            {/* <!-- Page content wrapper--> */}
            <div id="page-content-wrapper">
                {/* <!-- Top navigation--> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                    <h1>Logo</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item active"><NavLink to="/register" className="nav-link">Book new Appointment</NavLink></li>
                                <li className="nav-item active"><NavLink to="/" className="nav-link" href="#!">Search</NavLink></li>
                                <li className="nav-item"><Button onClick={handleLogout} variant="danger">Logout</Button></li>
      
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- Page content--> */}
                <div className="container-fluid">
                    
                </div>
            </div>
        </div>
</>
  )
}

export default Header2