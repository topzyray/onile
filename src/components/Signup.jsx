import React from 'react';
import { Link, Route } from 'react-router-dom';
import googleLogo from '../assets/google.svg'
import divider from '../assets/divider.png'
// import './signup.css'

function Signup() {
  return (
    <div className='signup template d-flex justify-content-center align-items-center w-100 vh-100 bg-light' id='onile__signup-container'>
        <div className='form_container p-5 m-5 rounded bg-white' id="onile__signup-forms">
        <h2 className='text-center'>Create  an account </h2>

        <img src={divider} alt="divider" width={'100%'} className='mt-3 mb-3' />
            <form action="#">
                

                <div className='mb-2'>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name="first name" className='form-control' />
                </div>

                <div className='mb-2'>
                    <label htmlFor="last-name" >Last Name</label>
                    <input type="text" name="last name" className='form-control' />
                </div>

                <div className='mb-2'>
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="number" name="phone number" className='form-control' id="phone_number" />
                </div>

                <div className='mb-2'>
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="Email" className='form-control'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" className='form-control' />
                    <h6>Must be 6+ character</h6>
                </div>

                <div className='mb-2'>
                    <label htmlFor="confirm-password" >Confirm Password</label>
                    <input type="password" name=" confirm password" className='form-control' />
                    <h6>Must be 6+ character</h6>
                </div>

                <div className='d-grid mt-2'>
                    <button className='btn btn-primary' type="button">Sign Up</button>
                </div>
                
                <p>By clicking Sign Up, you have agreed to the <br/> <Link to=''>Terms of Service</Link> and <Link to=''>Policy</Link></p>
                
                <p>
                Already have an account, <Link to="/signin" className='ms-2'>Sign in</Link>
                </p>

            </form>
            <form action="">
                <div className='d-grid'>
                    <button className='btn btn-light' type="button"> <span><img src={googleLogo} alt="logo" width='20px' /></span> Sign Up with Google</button>
                </div>
            </form>

        </div>
        
    </div>
  );
}

export default Signup;
