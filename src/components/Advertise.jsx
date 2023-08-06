import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import advert_image from '../assets/paul-hanaoka.png'

function Advertise() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <section className='mt-5 pb-4'>
      <div className='container text-center border rounded'>
        <div className="row">
          <div className="col bg-primary">
            <p className='advert-text text-white'><span className='text-dark'>Take Us With You. </span><br/> Keep <span className='text-dark'>ONILE</span> in the palm of your hand throughout your rental journey.</p>
          </div>
          <div className="d-flex col-12 col-lg-6 justify-content-center align-items-center">
            <img src={advert_image} alt="Advertise Image" className='img-fluid' />
          </div>
        </div>
      </div>

      {!isLoggedIn && <div className='container d-flex bg-primary text-white fs-5 justify-content-center align-items-center mt-5 mb-5 p-1'>
        <p className='pt-2'>Are you an estate agent or developer? List your property for FREE. <span className='btn btn-secondary btn-lg m-1 ms-3' id='signup'><Link to='/signup'>Sign up</Link></span></p>
      </div>}
    </section>
  )
}

export default Advertise