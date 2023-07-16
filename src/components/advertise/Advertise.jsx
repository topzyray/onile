import React from 'react'
import './advertise.css'
import advert_image from '../../assets/paul-hanaoka.png'

function Advertise() {
  return (
    <section className='onile__advertise'>
      <div className='onile__advertise-container'>
        <div className='onile__advert-item1'>
          <p><span id='heading'>Take Us With You...</span><br/>Keep <span id='onile'>ONILE</span> in the palm of your hand throughout your rental journey.</p>
        </div>
        <div className='onile__advert-item2'>
        <p>Deciding to become a homeowner is a big deal! Luckily, with <span>ONILE</span>.com, you get the most accurate homes for sale or rent  an agent directory, and collaboration tools to browse with your agent to help you make the right decision.</p>
        </div>
        <div className='onile__advert-image'>
          <img src={advert_image} alt="Advertise Image" />
        </div>
        <div className='onile__advert-quote'>
        <p>There is  a magic in that little word <span>HOME</span>, it is a mystic circle that surrounds comfort and virtues never known beyond its hallowed limits - ‘’ROBERTS SOUTHNEY’’</p>
        </div>
      </div>
    </section>
  )
}

export default Advertise