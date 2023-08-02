import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import googleLogo from '../assets/google.svg';
import divider from '../assets/divider.png';

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err)
        } 
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error(err)
        } 
    };

    const signout = async () => {
        try {
            await signOut(auth)
        } catch (err) {
            console.error(err)
        } 
    };

  return (
    <div className='signin template d-flex justify-content-center align-items-center w-100 vh-100 bg-light' id='onile__signin-container'>
        <div className='form_container p-5 m-5 rounded bg-white' id='onile__signin-forms'>
            <form action="#">
                <h2 className='text-center'>Welcome back...</h2>

                <img src={divider} alt="divider" width={'100%'} className='mt-3 mb-3' />

                <div className='mb-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' id='email' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='mb-2 '>
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control' id='password' onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <input type='checkbox'  className='custom-control custom-checkbox' id='check ' />
                    <label htmlFor="check" className='custom-input-label ms-2'>Remember me</label>                     
                </div>
                <p className='text-end mt-2'>
                    Forgot <a href="#"> Password? </a><Link to="/signup" className='ms-2'>Sign up</Link>
                </p>
                    
                <div className='d-grid mb-4'>
                    <button onClick={signIn} className='btn btn-primary' type='button'>Log In</button>
                </div>
                <hr/>
                <div className='d-grid mb-4'>
                    <button onClick={signout} className='btn btn-primary' type='button'>Log Out</button>
                </div>
            </form>
            <form action="#">
                <div className='d-grid'>
                   <button className='btn btn-outline-primary' type='button' onClick={signInWithGoogle}><span><img src={googleLogo} alt="logo" width='20px' /></span> Sign in with Google</button>
                </div>
            </form>
            <p className='mt-2'>
            Dont have an account? <Link to="/signup" className='ms-2'>Register here</Link> 
            </p>
        </div>           
    </div>
  );
}

export default Signin;
