import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left half with light grey */}
      <div style={{ flex: 1, backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#333', marginLeft:'auto'}}>Wel</p>
        <h1 style={{ color: '#555', marginLeft:'auto'}}>We are the </h1>
      </div>

  
      {/* Right half with sky blue */}
      <div style={{ flex: 1, backgroundColor: '#87CEEB', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#333', marginRight:'auto'}}>come</p>
        <h1 style={{ color: '#555', marginRight:'auto'}}> ` Online Doctors ` </h1>
        {/* Content for the right half */}
      </div>
    </div>
    <div>
        <NavLink style={{marginLeft:'800px'}} to='/aplha'>Go to error page</NavLink>
    </div>
    </>

  )
}

export default Home

