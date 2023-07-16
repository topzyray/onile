import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <footer>
        <div className='onile__footer-image'>
            <img src={logo} alt="" />
        </div>
        <div className='onile__footer-about'>
            <h3>About Us</h3>
            <p>ONILE is a revolutionizes property search in Ekiti state, Nigeria. Our user-friendly platform simplifies the process of connecting seekers with their ideal homes, We offer Ekiti property seekers an easy way to find details of property in Nigeria like homes, houses for sale or for rent within there area of locality.</p>
        </div>
        <div className='onile__footer-links'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className='onile__footer-advert'>
            <ul>
                <li>Advertise with Us</li>
                <li>Add a property</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer