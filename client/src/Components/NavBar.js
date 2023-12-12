import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo6 from '../Image/logo6.png'

import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" href="/">
    <img src={logo6} alt='logo' height="50" width="70"/>
  </NavLink>


  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="navbar-nav" style={{marginLeft:'980px'}}>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Register</NavLink>
      </li>

      
    </ul>
    
  </div>
</nav>
  )
}

export default NavBar
