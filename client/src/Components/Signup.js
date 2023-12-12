import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// import logo from '../Image/logo2.avif'
import logo5 from '../Image/logo5.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

const Signup = () => {

    const navigate = useNavigate()

    const [everyThing, setEveryThing] = useState({
        name: "",
        email: "",
        work: "",
        password: "",
        cpassword: ""
    })

    const EventChange = (event) => {
        const { name, value } = event.target

        setEveryThing((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }

    // const EventSubmit = async (event) => {
    //     const { name } = event.target
    //     setEveryThing((prevVal) => {
    //         return {
    //             ...prevVal,
    //             [name]: ""
    //         }
    //     })
    // }

    const PostData = async (event) => {
        event.preventDefault()
        const { name, email, work, password, cpassword } = everyThing;
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, work, password, cpassword })
            });

            if (response.ok) {
                // Redirect to login page after successful registration
                window.alert('Sucessfull Registered')
                navigate('/login');
            } else {
                console.error('Failed to register');
            }
        } catch (error) {
            console.error('Error:', error);
            window.alert("Registration Invalid");
        }
    };

    return (
        <>
            <div className='shadow p-3 mb-5 bg-white rounded ' style={{ width: '900px', marginLeft: '300px', marginTop: '40px' }}>

                <div className='main-div' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginTop: '20px' }}>
                        <h1> REGISTRATION PAGE</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>

                        {/* <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px', width: '300px' }}>
                            <form onSubmit={EventSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: '10px' }}>
                                    <label>
                                        <i className="zmdi zmdi-account zmdi-hc-lg"></i>
                                    </label>
                                    <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                    onChange={EventChange} type='text' name='name' value={everyThing.name} placeholder='Your Name' autoComplete='on'></input>
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label>
                                        <i className="zmdi zmdi-email"></i>
                                    </label>
                                    <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                    onChange={EventChange} name='email' type='email' value={everyThing.email} placeholder='Your Email' autoComplete='on'></input>
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label>
                                        <i className="zmdi zmdi-case"></i>
                                    </label>
                                    <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                    onChange={EventChange} name='work' type='text' value={everyThing.work} placeholder='Your Proffesion' autoComplete='on'></input>
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label>
                                        <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
                                    </label>
                                    <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                    onChange={EventChange} name='password' type='password' value={everyThing.password} placeholder='Your Password' autoComplete='on'></input>
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label>
                                        <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
                                    </label>
                                    <input style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                    onChange={EventChange} name='cpassword' type='password' value={everyThing.cpassword} placeholder='Confirm Your Password' autoComplete='on'></input>
                                </div>
                                <button style={{ width: '200px', marginTop: '30px', borderRadius: '19px', backgroundColor: 'cyan', marginLeft: '40px' }} type='submit'>Submit</button>
                            </form>
                        </div> */}


                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px', width: '300px' }}>
                            <form method='POST' onSubmit={PostData} style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ position: 'relative', marginBottom: '15px' }}>
                                    <i className="zmdi zmdi-account zmdi-hc-lg" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                                    <input
                                        style={{ width: '100%', padding: '10px 30px 10px 40px', borderRadius: '5px', border: '1px solid #ccc' }}
                                        onChange={EventChange}
                                        name='name'
                                        type='text'
                                        value={everyThing.name}
                                        placeholder='Your Name'
                                        autoComplete='on'
                                    />
                                </div>
                                <div style={{ position: 'relative', marginBottom: '15px' }}>
                                    <i className="zmdi zmdi-email" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                                    <input
                                        style={{ width: '100%', padding: '10px 30px 10px 40px', borderRadius: '5px', border: '1px solid #ccc' }}
                                        onChange={EventChange}
                                        name='email'
                                        type='email'
                                        value={everyThing.email}
                                        placeholder='Your Email'
                                        autoComplete='on'
                                    />
                                </div>
                                <div style={{ position: 'relative', marginBottom: '15px' }}>
                                    <i className="zmdi zmdi-case" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                                    <input
                                        style={{ width: '100%', padding: '10px 30px 10px 40px', borderRadius: '5px', border: '1px solid #ccc' }}
                                        onChange={EventChange}
                                        name='work'
                                        type='text'
                                        value={everyThing.work}
                                        placeholder='Your Profession'
                                        autoComplete='on'
                                    />
                                </div>
                                <div style={{ position: 'relative', marginBottom: '15px' }}>
                                    <i className="zmdi zmdi-lock zmdi-hc-lg" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                                    <input
                                        style={{ width: '100%', padding: '10px 30px 10px 40px', borderRadius: '5px', border: '1px solid #ccc' }}
                                        onChange={EventChange}
                                        name='password'
                                        type='password'
                                        value={everyThing.password}
                                        placeholder='Your Password'
                                        autoComplete='on'
                                    />
                                </div>
                                <div style={{ position: 'relative', marginBottom: '15px' }}>
                                    <i className="zmdi zmdi-lock zmdi-hc-lg" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                                    <input
                                        style={{ width: '100%', padding: '10px 30px 10px 40px', borderRadius: '5px', border: '1px solid #ccc' }}
                                        onChange={EventChange}
                                        name='cpassword'
                                        type='password'
                                        value={everyThing.cpassword}
                                        placeholder='Confirm Your Password'
                                        autoComplete='on'
                                    />
                                </div>
                                <button
                                    style={{
                                        marginLeft: '20px',
                                        width: '80%',
                                        padding: '10px',
                                        borderRadius: '19px',
                                        backgroundColor: '#3498db',
                                        border: 'none',
                                        color: 'white',
                                        cursor: 'pointer'
                                    }}
                                    type='submit'
                                >
                                    Submit
                                </button>
                            </form>
                        </div>



                        <div style={{ display: 'flex', flexDirection: "column", marginLeft: '50px', paddingTop: '10px' }}>
                            {/* <img src={logo} alt="logo" width='400px'/> */}
                            <img src={logo5} alt="logo" width='400px' />
                            <p className='d-flex justify-content-center'>
                                <NavLink to='/login'>
                                    I am already registed
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
