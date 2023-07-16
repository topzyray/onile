import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <footer>
        <div className='onile__footer-image'>
            <img src={logo} alt="" />
        </div>
        <div className='onile__footer-links'>
            <div className='onile__footer-about'>
                <h3>About Us</h3>
            </div>
            <div className='onile__footer-contact'>
                <h3>Contact Us</h3>
            </div>
            <div className='onile__footer-faq'>
                <h3>FAQ</h3>
            </div>
            <div className='onile__footer-advert'>
                <h3>Advertise with Us</h3>
                <p>Add a property</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer