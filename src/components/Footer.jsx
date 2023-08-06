import React from 'react'
import '../css/master.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'

function Footer() {
  return (
    <footer className='container-fluid'>
        <div className='row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 mt-5 ' >
            <div className='col'>
                <Link to='/'><img src={logo} alt="" width="200px" /></Link>
            </div>

            <div className='col'>
                <button className='btn btn-sm btn-link fw-bold fs-4 footer-btn'>Contact us</button> <br/>
                <p><span className="fw-bold">Support:<br/> <a href="mailto:support@onile.com" target="_blank">support@onile.com</a> <br/> +23480333-ONILE</span></p>
            </div>

            <div className='col'>
                <button className='btn btn-sm btn-link fw-bold fs-4 footer-btn'>Links</button> <br/>
		        <Link to="/team"><button className='btn btn-sm btn-link'>ONILE Team</button></Link> <br/>
                <button className='btn btn-sm btn-link' onClick={() => alert("...Our partners include: Ekiti State Government, Tech4Dev and many others....")}>Partners</button> <br/>
                <Link to="/career"><button className='btn btn-sm btn-link'>Career</button></Link> <br/>
		        <Link to="/about"><button className='btn btn-sm btn-link'>About Us</button></Link>
                
            </div>

            <div className='col'>
                <button className='btn btn-sm btn-link fw-bold fs-4 footer-btn'>Advertise with us</button> <br/>
                <Link to='https://docs.google.com/forms/d/e/1FAIpQLSeyTSCuuT6n4idy9QmQNb_3D9kmHfk8BJHfe-4XQ2j5JJYl0Q/viewform?usp=sf_link' target='_blank'><button className='btn btn-sm btn-outline-primary footer-btn'>Add a property</button></Link>
            </div>

            <div className='col'>
                <button className='btn btn-sm btn-link fw-bold fs-4 footer-btn'>Connect with us</button> <br/>
                <img src={facebook} alt="Facebook icon" className='p-1 social' />
                <img src={instagram} alt="Instagram icon" className='p-1 social' />
            </div>
        </div>
    </footer>
  )
}

export default Footer
