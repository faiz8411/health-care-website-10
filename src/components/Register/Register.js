import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { user, handleUserRegister, signInUsingGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    const handleEmail = e => {
        setEmail(e.target.value)

    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRegister = () => {
        handleUserRegister(email, password);

    };
    return (
        <div id="login" className="div d-flex justify-content-center align-items-center">
            <div className="row ">
                <div className="col-md-6">
                    <h4>please login or signup</h4>
                    <div>
                        <div className="form-input mt-5">

                            <input onChange={handleEmail}

                                className="mt-2 p-2"
                                type="email"
                                placeholder="Email"
                            />
                            <br />
                            <input onChange={handlePassword}

                                className="mt-2 p-2"
                                type="password"
                                placeholder="Password"
                            />
                            <br />
                            <div className="login-regiater-btn mt-4">
                                <button onClick={handleRegister}

                                    className="btn btn-primary me-1"
                                >
                                    Register
                                </button>

                            </div>
                            <h4 className="text-danger">Already have Account??</h4>
                        </div>
                        <div className="login-btn mt-3 d-flex">
                            <Nav.Link as={HashLink} to="/login" className="text-white navbar"><button className="btn-login m-2 btn btn-primary">login</button></Nav.Link> <h2>or</h2>

                            <button onClick={handleGoogleLogin}

                                className="btn btn-success m-2"
                            >
                                google sign in
                            </button>


                        </div>

                    </div>
                </div>
                <div className="col-md-6">

                    <div className="right-side-image">
                        <img
                            className="w-100"
                            src="https://i.ibb.co/MSBbLcd/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credential.jpg"
                            alt=""
                        />
                    </div>
                    ;
                </div>
            </div>
        </div>
    );
};

export default Register;