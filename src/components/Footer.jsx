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
                <Link to='/'><img src={logo} alt="" width="200px" /></Link>
            </div>

            <div className='col'>
                <button className='btn btn-sm btn-link fw-bold fs-4 footer-btn'>Contact Us</button> <br/>
                <p className="text-center fw-bold">Adebayo, Ado Ekiti <br/>123456789 <br/>support@onile.com</p>
            </div>

            <div className='col'>
                <button className='btn btn-sm btn-link fw-bold fs-4 footer-btn'>Link</button> <br/>
                <button className='btn btn-sm btn-link'>Partners</button> <br/>
                <button className='btn btn-sm btn-link'>Career</button> <br/>
                <button className='btn btn-sm btn-link'>About us</button>
                
            </div>

            <div className='col'>
                <button className='btn btn-sm btn-link fw-bold fs-4 footer-btn'>Advertise with Us</button> <br/>
                <button className='btn btn-sm btn-outline-primary footer-btn'>Add a property</button>
            </div>

            <div className='col'>
                <button className='btn btn-sm btn-link fw-bold fs-4 footer-btn'>Social Media</button> <br/>
                <img src={facebook} alt="Facebook icon" className='p-1 social' />
                <img src={instagram} alt="Instagram icon" className='p-1 social' />
            </div>
        </div>
    </footer>
  )
}

export default Footer