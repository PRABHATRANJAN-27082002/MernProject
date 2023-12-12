import React, { useState } from 'react'
import logo4 from '../Image/logo4.avif'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { InputGroup, FormControl } from 'react-bootstrap';

const Login = () => {
    const navigate = useNavigate()
    const [every, setEvery] = useState({
        email: '',
        password: ''
    })

    const EventChange = (event) => {
        const { name, value } = event.target
        setEvery((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }

    // const EventSubmit = (event) => {
    //     event.preventDefault()

    // }

    const PostData = async (event)=>{
        event.preventDefault()
        const {email,password} = every
        try{
        const response = await fetch('/signin',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({email,password})
        })
        
        if(response.ok){
            window.alert("Successfully Login")
            navigate('/')

        }
        else{
            window.alert("Invalid Details")
        }
        }
        catch(err){
            window.alert("error")
            console.error(err)
        }

    }

    return (
        <>
            {/* <div className='shadow p-3 mb-5 bg-white rounded ' style={{ width: '900px', marginLeft: '300px', marginTop: '50px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
                    <div>
                        <h1>LOGIN PAGE</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ marginTop: '40px', marginRight: '10px' }}>
                            <form onSubmit={EventSubmit} >
                                <div style={{ display: 'flex', flexDirection: "column", marginTop: '20px' }}>
                                    <label>
                                        <i className="zmdi zmdi-account zmdi-hc-lg"></i>
                                    </label>
                                    <input style={{ width: '300px' }} onChange={EventChange} type='email' name='email' value={every.email} placeholder='Your Email'></input>
                                </div>
                                <div style={{ display: 'flex', flexDirection: "column", marginTop: '10px' }}>
                                    <label>
                                        <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
                                    </label>
                                    <input onChange={EventChange} type='password' name='password' value={every.password} placeholder='Your Password'></input>
                                </div>
                                <div style={{ marginTop: '30px' }}>
                                    <button style={{ width: '200px', backgroundColor: 'cyan', borderRadius: '19px', marginLeft: '40px' }} type='submit'>Log In</button>
                                </div>
                            </form>
                            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <p style={{ marginRight: '10px' }}>Or login with</p>
                                <i><FacebookIcon color="primary" fontSize="large" /></i>
                                <i style={{ marginLeft: "10px" }}><TwitterIcon color="primary" fontSize="large" /></i>
                                <i style={{ marginLeft: "10px" }}><MailIcon color="primary" fontSize="large" /></i>
                            </div>
                            <div style={{ marginLeft: '60px', marginTop: '20px' }}>
                                <NavLink to="/signup">Create an Account</NavLink>
                            </div>
                        </div>
                        <div>
                            <img src={logo4} alt="logo" width={500} />
                        </div>
                    </div>
                </div>
            </div> */}





<div className='shadow p-3 mb-5 bg-white rounded' style={{ width: '900px', marginLeft: '300px', marginTop: '50px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
        <div>
            <h1>LOGIN PAGE</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginTop: '40px', marginRight: '10px', width: '300px' }}>
                <form method='POST' onSubmit={PostData} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <InputGroup>
                            <InputGroup.Text><i className="zmdi zmdi-account zmdi-hc-lg"></i></InputGroup.Text>
                            <FormControl style={{ borderRadius: '19px' }} onChange={EventChange} type='email' name='email' value={every.email} placeholder='Your Email' />
                        </InputGroup>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <InputGroup>
                            <InputGroup.Text><i className="zmdi zmdi-lock zmdi-hc-lg"></i></InputGroup.Text>
                            <FormControl style={{ borderRadius: '19px' }} onChange={EventChange} type='password' name='password' value={every.password} placeholder='Your Password' />
                        </InputGroup>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <button style={{ width: '100%', padding: '10px', borderRadius: '19px', backgroundColor: 'cyan', border: 'none', color: 'white', cursor: 'pointer' }} type='submit'>Log In</button>
                    </div>
                </form>
                <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <p style={{ marginRight: '10px' }}>Or login with</p>
                    <i><FacebookIcon color="primary" fontSize="large" /></i>
                    <i style={{ marginLeft: "10px" }}><TwitterIcon color="primary" fontSize="large" /></i>
                    <i style={{ marginLeft: "10px" }}><MailIcon color="primary" fontSize="large" /></i>
                </div>
                <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                    <NavLink to="/signup">Create an Account</NavLink>
                </div>
            </div>
            <div>
                <img src={logo4} alt="logo" width={500} />
            </div>
        </div>
    </div>
</div>



        </>
    )
}

export default Login
