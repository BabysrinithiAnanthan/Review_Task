import React from 'react';
import react from './assets/Img.jpeg';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



const Login= () => {

    const navigate = useNavigate();
    const [details, setdetails] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

          if (
            details.email === "csmsrinithi@gmail.com" &&
            details.password === "sri@123"
        ) {
            navigate("/Form");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className='login'>
            <div className='container-fluid ' >
                <div className='row ' >
                    <div className='col-12 col-md-6 g-0 '>
                        <div className='row login-body'>
                            <div className='col-5'>
                                <button className='btn btn-warning mt-5 ms-5 px-5 rounded-4 text-white fw-lighter'>Logo</button>
                            </div>
                        </div>

                        <div className='row form-body'>
                            <div className='col-7 ms-5 '>
                                <h1 className='welcome-text fst-normal fw-bold'>Welcome !</h1>
                                <p className='welcome-desc opacity-50 fs-6'>Welcome admin! please enter your details</p>
                                <form className='login-form mt-3 ' onSubmit={handleSubmit}>
                                    <div className='form-elements d-flex flex-column'>
                                        <label>Email</label>
                                        <input type='email' placeholder='Enter your Email' className='mt-2 py-1' value={details.email} onChange={(e) => { setdetails({ ...details, email: e.target.value }) }}></input>
                                    </div>
                                    <div className='form-elements d-flex flex-column mt-3'>
                                        <label>Password</label>
                                        <input type='password' placeholder='Enter your password' className='mt-2 py-2 pwd' minlength={8} maxlength={16} value={details.password} onChange={(e) => { setdetails({ ...details, password: e.target.value }) }}></input>
                                    </div>
                                    <button className='btn btn-primary mt-4 py-2 rounded-3' type='submit' >Sign in</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-md-6 g-0'>
                        <img src={react} alt='login-logo' className='login-logo'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login