import React from 'react'
import { Link } from 'react-router-dom'
import advert_image from '../assets/paul-hanaoka.png'

function Advertise() {
  return (
    <section className='mt-5'>
      <div className='container text-center border rounded'>
        <div className="row">
          <div className="col bg-primary">
            <p className='advert-text text-white'><span className='text-dark'>Take Us With You. </span><br/> Keep <span className='text-dark'>ONILE</span> in the palm of your hand throughout your rental journey.</p>
          </div>
          <div className="col">
            <img src={advert_image} alt="Advertise Image" className='advert-img' />
          </div>
        </div>
      </div>

      <div className='container d-flex bg-primary text-white fs-5 justify-content-center align-items-center mt-5 mb-5 p-1'>
        <p className='pt-2'>Are you an estate agent or developer? List your property for FREE. <span className='btn btn-secondary btn-lg m-1 ms-3' id='signup'><Link to='/signup'>Sign up</Link></span></p>
      </div>
    </section>
  )
}

export default Advertise


// <section className='container text-center border rounded mt-3 mb-3'>
//       <div className="row">
//         <div className="col">
//           <div className="row bg-primary">
//             <p className='text-white fs-4 p-4'><span className='fs-1 fw-bold' id='heading'>Take Us With You...</span><br/>Keep <span id='onile'>ONILE</span> in the palm of your hand throughout your rental journey.</p>
//           </div>
//           <div className="row">
//             <p className='bg-white text-dark fs-4 p-4'>Deciding to become a homeowner is a big deal! Luckily, with <span className='fw-bold' id='onile'>ONILE</span>.com, you get the most accurate homes for sale or rent  an agent directory, and collaboration tools to browse with your agent to help you make the right decision.</p>
//           </div>
//         </div>
//         <div className="col advert-img">
//           <div className="row">
//             <div className="col">
//               <img src={advert_image} alt="Advertise Image" className='img-responsive object-fit' />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <p className='bg-white text-dark fs-4 p-4'>There is  a magic in that little word <span>HOME</span>, it is a mystic circle that surrounds comfort and virtues never known beyond its hallowed limits - ‘’ROBERTS SOUTHNEY’’</p>
//       </div>
//     </section>