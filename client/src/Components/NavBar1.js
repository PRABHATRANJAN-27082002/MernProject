import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Nav = () => {
  return (
    <div style={{justifyContent:'right',display:'flex',flexDirection:'row'}}>
      <div className='m-4'>Home</div>
      <div className='m-4'>About me</div>
      <div className='m-4'>Contact</div>
      <div className='m-4'>Login</div>
      <div className='m-4'>Register</div>
    </div>
  )
}

export default Nav
