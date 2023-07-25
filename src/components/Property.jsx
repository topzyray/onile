import React from 'react'
import Button from 'react-bootstrap/Button'
import house1 from '../assets/house1.png'
import house2 from '../assets/house2.png'
import house3 from '../assets/house3.png'

import '../css/master.css'


function House({house, location, type, facilities, rent, nature}) {
    return (

        // Individual Cards

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                {/* <div className="card-header">
                    <div className='badge text-bg-info'>FOR SALE</div>
                </div> */}
                <div className="card-type">{nature}</div>
                <img src={house} alt="Image of Houses" className='card-img-top' />
                <div className="card-body">
                    <h5 className='card-title'>Type: {type}</h5>
                    <p className='card-text'>Location: {location}</p>
                    <p className='card-text'>Facilities: {facilities}</p>
                    <p className='card-text'>Rent: {rent}</p>
                </div>
                <div className="card-footer">
                <div className='btn btn-secondary'>FOR SALE</div>
                </div>
            </div>
        </div>
    )
}

function Property() {
  return (
    <section>

        {/* For Rent Section */}

        <div className="container rounded mt-3 mb-3 pt-3 onile__for-sale border">
            <div className='container d-flex justify-content-center align-items-center 100-w'>
                <div className="row">
                    <div className="col">
                        <p className='btn btn-primary btn-lg'>Explore houses  available for Sale</p>
                    </div>
                </div>
            </div>

            <div className="container mb-3">
                <div className="row g-3">
                    <House house={house1} location="12, Adebayo Street, Ado-Ekiti" type="A fully detached duplex" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR SALE" />
                    <House house={house2} location="25, Adebayo Street, Ado-Ekiti" type="2 bedroom flat" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR SALE" />
                    <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR RENT" />
                    <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR RENT" />
                    <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR RENT" />
                    <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR SALE" />
                    <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR RENT" />
                    <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR RENT" />
                    <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR SALE" />
                    <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR SALE" />
                    <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR RENT" />
                    <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" nature="FOR SALE" />
            </div>

            {/* <div className='container d-flex justify-content-center align-items-center 100-w'>
                <div className="row">
                    <div className="col">
                        <p className='btn btn-primary btn-lg'>View More</p>
                    </div>
                </div>
            </div> */}
        </div>       
        
        </div>
    </section>
  )
}

export default Property





// {/* For Rent Section */}

// <div className="container border mt-3 mb-3 pt-3 rounded onile__for-rent ">
// <div className='container d-flex justify-content-center align-items-center 100-w'>
//     <div className="row">
//         <div className="col">
//             <p className='btn btn-primary btn-lg'>Explore houses  available for Rent</p>
//         </div>
//     </div>
// </div>

// <div className="container mb-3">
//     <div className="row g-3">
//         <House house={house1} location="12, Adebayo Street, Ado-Ekiti" type="A fully detached duplex" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" />
//         <House house={house2} location="25, Adebayo Street, Ado-Ekiti" type="2 bedroom flat" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" />
//         <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" facilities="3-bedroom, 3 toilets" rent="#200,000 - #300,000" />
//     </div>
// </div>

// <div className='container d-flex justify-content-center align-items-center 100-w'>
//     <div className="row">
//         <div className="col">
//             <p className='btn btn-primary btn-lg'>View More</p>
//         </div>
//     </div>
// </div>
