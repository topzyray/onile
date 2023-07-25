import React from 'react'
import '../css/master.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'

function Footer() {
  return (
    <footer className='container-fluid text-center'>
        <div className='row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 mt-5' >
            <div className='col'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>

            <div className='col'>
                <button className='btn btn-light btn-lg fw-bold fs-4 shadow text-secondary'>About Us</button>
            </div>

            <div className='col'>
                <button className='btn btn-light btn-lg fw-bold fs-4 shadow text-secondary'>Contact Us</button> <br/>
                <img src={facebook} alt="Facebook icon" className='p-1 social' />
                <img src={instagram} alt="Instagram icon" className='p-1 social' />
            </div>

            <div className='col'>
                <button className='btn btn-light btn-lg fw-bold fs-4 shadow text-secondary'>FAQ</button>
            </div>

            <div className='col'>
                <button className='btn btn-light btn-lg fw-bold fs-4 shadow text-secondary'>Advertise with Us</button> <br/>
                <button className='btn btn-sm text-primary fw-bold fs-5'>Add a property</button>
            </div>
        </div>
    </footer>
  )
}

export default Footer