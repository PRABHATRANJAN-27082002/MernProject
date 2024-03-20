import React from 'react'
import Nav from './Components/NavBar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Login from './Components/LOgin'
import Signup from './Components/Signup'
import About from './Components/About'
import {Route,Routes} from "react-router-dom"
import NotFound from './Components/NotFound'

const App = () => {
  // const [name,setName] = useState("")
  // const [email,setEmail] = useState("")
  // const [work,setWork] = useState("")
  // const [password,setPassword] = useState("")
  // const [cpassword,setConfirmPassword] = useState("")



  return (
    <>
    <div className='center-div'>
      <Nav />
      <Routes>
        <Route exact path={'/'} element={<Home />}></Route>
        <Route path={'/about'} element={<About />}></Route>
        <Route path={'/contact'} element={<Contact />}></Route>
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/signup'} element={<Signup />}></Route>
        <Route path='*' element={<Home />}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
