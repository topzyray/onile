import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const AboutUs = () => {
  return (
    <section className='container mt-5 mb-5 p-3 border'>
      <div className="row text-center">
        <div className="col">
          <img src={logo} alt="logo" width={250} className='mb-4'/>
        </div>
      </div>
      <div className="row text-center mb-5">
        <div className="col">      
        <h2 className='fw-bold text-primary mb-4'>About Us</h2>
        <h5>Onile is a leading real estate listing platform in Ekiti with property listing for sale and for rent. We connect property hunters with property agents and owners for them to have a smooth and easy property search.</h5>
        </div>
      </div>

      <div className="container mb-1 text-end">
        <div className="row">
          <div className="col">
              <Link to='/'>Back Home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
