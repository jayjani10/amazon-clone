import React, { useState } from 'react'
import './Login.css';
import { Link } from '@material-ui/core';

function Login() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const signIn = (e) => {
        e.preventDefault();
    }

    const register = (e) => {
        e.preventDefault();
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className='login__logo' src="amazon-logo-dark.png" alt='amazon'/>
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn} className='login__signInButton'>SignIn</button>
                </form>
                <p>
                    By signing-in you agree to Amazon fake clone's  Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
