import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {
        user,
        signInUsingGoogle,
        handleUserRegister,
        handleUserLogin,
        logOut
    } = useFirebase();
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    // console.log(location.state?.from)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    console.log(email)
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    console.log(password)
    const handleRegister = () => {
        handleUserRegister(email, password);
    };
    const handleLogin = () => {
        handleUserLogin(email, password);
    };
    console.log(user)


    return (
        <div id="login" className="div d-flex justify-content-center align-items-center">
            <div className="row ">
                <div className="col-md-6">
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
                                <button onClick={handleLogin} className="btn btn-success ms-1">
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className="login-btn mt-4">
                            <button onClick={handleGoogleLogin}

                                className="btn btn-warning m-2"
                            >
                                google sign in
                            </button>
                            <button onClick={logOut}>logout</button>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-side-image">
                        <img
                            className="w-100"
                            src="https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg"
                            alt=""
                        />
                    </div>
                    ;
                </div>
            </div>
        </div>
    );
};



export default Login;