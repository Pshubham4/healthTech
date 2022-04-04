import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
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
                               <li className="nav-item active"><NavLink to="/" className="nav-link" href="#!">Home</NavLink></li>
                               <li className="nav-item"><NavLink to="/login" className="nav-link" href="#!">Login/Signup</NavLink></li>
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

export default Header