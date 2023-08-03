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
		<Link to="/team"><button className='btn btn-sm btn-link'>ONILE Core Team</button></Link>
                <button className='btn btn-sm btn-link' onClick={() => alert("...Our partners include: Ekiti State Government, Tech4Dev and many others....")}>Partners</button> <br/>
                <Link to="/career"><button className='btn btn-sm btn-link'>Career</button> <br/></Link>
		<Link to="/about"><button className='btn btn-sm btn-link'>About Us</button></Link>
                
            </div>

            <div className='col'>
                <button className='btn btn-sm btn-link fw-bold fs-4 footer-btn'>Advertise with Us</button> <br/>
                <Link to='https://docs.google.com/forms/d/e/1FAIpQLSeyTSCuuT6n4idy9QmQNb_3D9kmHfk8BJHfe-4XQ2j5JJYl0Q/viewform?usp=sf_link' target='_blank'><button className='btn btn-sm btn-outline-primary footer-btn'>Add a property</button></Link>
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
