import React from 'react'
import './property.css'
import house1 from '../../assets/house1.png'
import house2 from '../../assets/house2.png'
import house3 from '../../assets/house3.png'


function House({house, location, type, facilities, rent}) {
    return (
        <article className='onile__house'>
            <div className='onile__house-image'>
                <img src={house} alt="Image of Houses" />
            </div>
            <div className='onile__house-items'>
                <p>Location: {location}</p>
                <p>Type: {type}</p>
                <p>Facilities: {facilities}</p>
                <p>Rent: {rent}</p>
            </div>
        </article>
    )
}

function Property() {
  return (
    <section className='onile__property-container'>
        <div className='onile__property-headings property-items'>
            <p>Explore houses  available in Adebayo</p>
        </div>
        <div className='onile__property-card property-items'>
            <House house={house1} location="12, Adebayo Street, Ado-Ekiti" type="A fully detached duplex" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" />
            <House house={house2} location="25, Adebayo Street, Ado-Ekiti" type="2 bedroom flat" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" />
            <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" />
        </div>
        <div className='onile__property-headings property-items'>
            <p>View More</p>
        </div>
        <div className='onile__property-user_signup property-items'>
            <p>Are you an estate agent or developer? List your property for FREE. <span>Sign up</span></p>
        </div>
        <div className='onile__property-headings property-items'>
            <p>Explore houses  available for Rent</p>
        </div>
        <div className='onile__property-card property-items'>
            <House house={house1} location="12, Adebayo Street, Ado-Ekiti" type="A fully detached duplex" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" />
            <House house={house2} location="25, Adebayo Street, Ado-Ekiti" type="2 bedroom flat" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" />
            <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" />
        </div>
        <div className='onile__property-headings property-items'>
            <p>View More</p>
        </div>
    </section>
  )
}

export default Property