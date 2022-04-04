import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

    //This const is for router  
    const navigate = useNavigate()

    const initialState = {
        "Name": "",
        "email": "",
        "password": "",
        "rPassword": "",
        "agreement": false
    }

    const [data, setData] = useState({
        "Name": "",
        "email": "",
        "password": "",
        "rPassword": "",
        "agreement": false
    })

    let nam, value


    const handleSubmit = (e) => {
        nam = e.target.name
        value = e.target.value

        setData({ ...data, [nam]: value })
    }

    const submitData = () => {
        if (data.agreement === false)
            alert('You have to Agree Terms and Conditions..');
        else if (data.password !== data.rPassword) { alert('Both password should match') }

        else {
            axios.post('http://localhost:4040/register', {
                "Name": data.Name,
                "email": data.email,
                "password": data.password,
                "agreement": data.agreement
            })
                .then((res) => {
                    alert(res.data.message)
                    setData(initialState)
                })

                .catch((err) => console.log(err))
        }
    }

    return (

        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">

                                                    {/* Name */}
                                                    <input type="text" name='Name' value={data.Name} onChange={handleSubmit} id="form3Example1c" className="form-control" />

                                                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">

                                                    {/* Email*/}
                                                    <input type="email" id="form3Example3c" name='email' value={data.email} onChange={handleSubmit} className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">

                                                    {/* Password */}
                                                    <input type="password" id="form3Example4c" name='password' value={data.password} onChange={handleSubmit} className="form-control" autoComplete='off' />
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">

                                                    {/* repeat Password */}
                                                    <input type="password" id="form3Example4cd" name='rPassword' value={data.rPassword} onChange={handleSubmit} className="form-control" autoComplete='off' />
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div>

                                            {/* Agreement */}
                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    checked={data.agreement}
                                                    id="form2Example3c"
                                                    name='agreement' onChange={(e) => setData({ ...data, agreement: !data.agreement })}
                                                />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" onClick={submitData} className="btn btn-primary btn-lg">Register</button>
                                            </div>
                                            <span>Or Existing user </span>
                                            <button className="btn btn-lg btn-primary btn-block" onClick={(e) => navigate('/login')} type="button">
                                                Login</button>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp