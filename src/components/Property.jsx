import React from 'react'
import Button from 'react-bootstrap/Button'
import house1 from '../assets/house1.png'
import house2 from '../assets/house2.png'
import house3 from '../assets/house3.png'

import '../css/master.css'


function House({house, details, type, facilities, price}) {
    return (

        // Individual Cards

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-type">{type}</div>
                <img src={house} alt="Image of Houses" className='card-img-top rounded-3 ' />
                <div className="card-body">
                    <h5 className='card-title'>{price}</h5>
                    <p className='card-text'>{details}</p>
                    <p className='card-text'>{facilities}</p>
                </div>
                <div className="card-footer">
                    <button type='button' className='btn btn-outline-primary'>View Details</button>
                </div>
            </div>
        </div>
    )
}

function Property() {
  return (
    <section>

        {/* For price Section */}

        <div className="container rounded-5 mt-3 mb-3 pt-3 onile__for-sale border">
            <div className='container d-flex justify-content-center align-items-center 100-w'>
                <div className="row">
                    <div className="col">
                        <p className='btn btn-primary btn-lg'>Latest Properties</p>
                    </div>
                </div>
            </div>

            <div className="container mb-3">
                <div className="row g-3">
                    <House house={house1} details="12, Adebayo Street, Ado-Ekiti" facilities="A detached duplex" price="#200,000 - #300,000" type="FOR SALE" />
                    <House house={house2} details="25, Adebayo Street, Ado-Ekiti" facilities="2 bedroom flat" price="#200,000 - #300,000" type="FOR SALE" />
                    <House house={house3} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="#200,000 - #300,000" type="FOR RENT" />
                    <House house={house3} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="#200,000 - #300,000" type="FOR RENT" />
                    <House house={house3} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="#200,000 - #300,000" type="FOR RENT" />
                    <House house={house3} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="#200,000 - #300,000" type="FOR SALE" />
                    <House house={house3} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="#200,000 - #300,000" type="FOR RENT" />
                    <House house={house3} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="#200,000 - #300,000" type="FOR RENT" />
                    <House house={house3} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="#200,000 - #300,000" type="FOR SALE" />
                    <House house={house3} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="#200,000 - #300,000" type="FOR SALE" />
                    <House house={house3} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="#200,000 - #300,000" type="FOR RENT" />
                    <House house={house3} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="#200,000 - #300,000" type="FOR SALE" />
            </div>

            <div className='container d-flex justify-content-center align-items-center 100-w mt-3'>
                <div className="row">
                    <div className="col">
                        <p className='btn btn-primary btn-lg'>View More</p>
                    </div>
                </div>
            </div>
        </div>       
        
        </div>
    </section>
  )
}

export default Property





// {/* For price Section */}

// <div className="container border mt-3 mb-3 pt-3 rounded onile__for-price ">
// <div className='container d-flex justify-content-center align-items-center 100-w'>
//     <div className="row">
//         <div className="col">
//             <p className='btn btn-primary btn-lg'>Explore houses  available for price</p>
//         </div>
//     </div>
// </div>

// <div className="container mb-3">
//     <div className="row g-3">
//         <House house={house1} location="12, Adebayo Street, Ado-Ekiti" type="A fully detached duplex" price="#200,000 - #300,000" />
//         <House house={house2} location="25, Adebayo Street, Ado-Ekiti" type="2 bedroom flat" price="#200,000 - #300,000" />
//         <House house={house3} location="29, Adebayo Street, Ado-Ekiti" type="4 bedrrom bungalow" price="#200,000 - #300,000" />
//     </div>
// </div>

// <div className='container d-flex justify-content-center align-items-center 100-w'>
//     <div className="row">
//         <div className="col">
//             <p className='btn btn-primary btn-lg'>View More</p>
//         </div>
//     </div>
// </div>
