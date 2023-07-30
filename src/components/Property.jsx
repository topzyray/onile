import React from 'react'
import Button from 'react-bootstrap/Button'
import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'
import house5 from '../assets/house5.jpg'
import house6 from '../assets/house6.jpg'
import house7 from '../assets/house7.jpg'
import house8 from '../assets/house8.jpg'
import house9 from '../assets/house9.jpg'
import house10 from '../assets/house10.jpg'
import house11 from '../assets/house11.jpg'
import house12 from '../assets/house12.jpg'
import house13 from '../assets/house13.jpg'
import house14 from '../assets/house14.jpg'

import '../css/master.css'


function House({house, details, type, facilities, price}) {
    return (

        // Individual Cards

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-type">{type}</div>
                <img src={house} alt="Image of Houses" className='card-img-top rounded-3' width={300} height={300} />
                <div className="card-body">
                    <h5 className='card-title'>N{price}</h5>
                    <p className='card-text'>{details}</p>
                    <p className='card-text'>{facilities}</p>
                </div>
                <div className="card-footer">
                    <button type='button' className='btn btn-outline-primary' onClick={() => alert('Call +234701234567911 for more details')}>View Details</button>
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
                    <House house={house1} details="12, Adebayo Street, Ado-Ekiti" facilities="5 bedroom flat" price="12,000,000" type="FOR SALE" />
                    <House house={house2} details="2, Akinola Street, Ado-Ekiti" facilities="5 bedroom flat" price="8,500,000" type="FOR SALE" />
                    <House house={house3} details="Block 11, GRA, Ado-Ekiti" facilities="4 bedroom bungalow" price="1,300,000" type="FOR RENT" />
                    <House house={house4} details="29, Aladegbaye Avenue, Ikere-Ekiti" facilities="4 bedrrom bungalow" price="250,000" type="FOR RENT" />
                    <House house={house5} details="Opposite Fed. Univ., Ido-Ekiti" facilities="4 block of 3 bedroom flat" price="300,000" type="FOR RENT" />
                    <House house={house6} details="33, Iworoko Area, Ado-Ekiti" facilities="4 bedroom bungalow" price="29,000,000" type="FOR SALE" />
                    <House house={house7} details="51, Iyin road, Ado-Ekiti" facilities="4 bedroom bungalow" price="1,100,000" type="FOR RENT" />
                    <House house={house8} details="7, Ikere road, Ado-Ekiti" facilities="2 bedroom bungalow" price="200,000" type="FOR RENT" />
                    <House house={house9} details="5, GRA, Ado-Ekiti" facilities="3 bedroom bungalow" price="30,000,000" type="FOR SALE" />
                    <House house={house10} details="29, GRA, Ado-Ekiti" facilities="4 bedroom bungalow" price="42,000,000" type="FOR SALE" />
                    <House house={house11} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="190,000" type="FOR RENT" />
                    <House house={house12} details="2, Palace road, Are-Ekiti" facilities="4 bedrrom bungalow" price="8,300,000" type="FOR SALE" />
                    <House house={house13} details="59, Afao road, Ado-Ekiti" facilities="30 room hotel" price="55,000,000" type="FOR SALE" />
                    <House house={house14} details="6, GRA, Ado-Ekiti" facilities="5 bedroom bungalow" price="42,000,000" type="FOR SALE" />
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
