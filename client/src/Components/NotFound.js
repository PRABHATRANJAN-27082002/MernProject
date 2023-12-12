import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div>
    <div>
      <h1 style={{display:'flex', justifyContent:'center', marginTop:'125px', color:'#ccc6', fontSize:'300px'}}>404</h1>
    </div>
      <h1 style={{display:'flex', justifyContent:'center',  marginTop: '-180px'}}>We are Sorry, Page not Found !</h1>
    </div>
    <div>
        <p style={{marginLeft:'290px'}}>THE PAGE YOU ARE LOOKING FOR MIGHT HAS BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILIY UNAVAILABLE </p>
        
        <NavLink  style={{marginLeft:'690px'}} to="/">Go to Home Page</NavLink>
    </div>
    </>
  )
}

export default NotFound
