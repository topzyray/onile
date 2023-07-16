import React from 'react'
import './advertise.css'
import advert_image from '../../assets/paul-hanaoka.png'

function Advertise() {
  return (
    <section className='onile__advertise-container'>
      <div className='onile__advertise-advert'>
          <div className='onile__advertise-advert_item'>
            <div className='onile__advertise-advert_message'>
              <div className='onile__advertise-advert_message-upper'>
                <h1>Take Us With You...</h1>
                <p>Keep ONILE in the palm of your hand throughout your rental journey.</p>
              </div>
              <div className='onile__advertise-advert_message-lower'>
                <p>Deciding to become a homeowner is a big deal! Luckily, with ONILE.com, you get the most accurate homes for sale or rent  an agent directory, and collaboration tools to browse with your agent to help you make the right decision.</p>
              </div>
            </div>
            <div className='onile__advertise-advert_image'>
              <img src={advert_image} alt="Advertise Image" />
            </div>
          </div>
          <div className='onile__advertise-advert_quote'>
            <p>There is  a magic in that little word <span>HOME</span>, it is a mystic circle that surrounds comfort and virtues never known beyond its hallowed limits - ‘’ROBERTS SOUTHNEY’’</p>
          </div>
        </div>
    </section>
  )
}

export default Advertise