import React from 'react';
import { Link } from 'react-router-dom'

import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';
import house4 from '../assets/house4.jpg';
import house5 from '../assets/house5.jpg';
import house6 from '../assets/house6.jpg';
import house7 from '../assets/house7.jpg';
import house8 from '../assets/house8.jpg';
import house9 from '../assets/house9.jpg';
import house10 from '../assets/house10.jpg';
import house11 from '../assets/house11.jpg';
import house12 from '../assets/house12.jpg';
import house13 from '../assets/house13.jpg';
import house14 from '../assets/house14.jpg';

import '../css/master.css'

const House = ({house, details, type, facilities, price}) => {
    return (

        // Individual Cards

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card onile-card">
                <div className="card-type">{type}</div>
                <img src={house} alt="Image of Houses" className='card-img-top img-responsive rounded-3' width={300} height={300} />
                <div className="card-body">
                    <h5 className='card-title'>N{price}</h5>
                    <p className='card-text'>{details}</p>
                    <p className='card-text'>{facilities}</p>
                </div>
                <div className="card-footer">
                    <button type='button' className='btn btn-outline-primary' onClick={() => alert('Send e-Mail to: support@onile.com')}>View Details</button>
                </div>
            </div>
        </div>
    )
};

const AllProperties = () => {
  return (
    <section>
        <div className="container rounded-3 mt-3 mb-3 pt-3 onile__for-sale border">
            <div className='container d-flex justify-content-between align-items-start 100-w mb-4'>
                <div className="row">
                    <div className="col">
                        <h1 className='fw-bold fs-2 mt-2 mb-2 p-2 text-dark'>Property Listings</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to='/'>Back Home</Link>
                    </div>
                </div>
            </div>

            <div className="container mb-5 border">
                <div className="bg-primary fs-5 fw-bold mt-2 mb-2 pt-1 pb-1 text-light text-center">Property Available for Rent</div>
                <div className="row g-3">
                    <House house={house3} details="Block 11, GRA, Ado-Ekiti" facilities="4 bedroom bungalow" price="1,300,000" type="FOR RENT" />
                    <House house={house4} details="29, Aladegbaye Avenue, Ikere-Ekiti" facilities="4 bedrrom bungalow" price="250,000" type="FOR RENT" />
                    <House house={house5} details="Opposite Fed. Univ., Ido-Ekiti" facilities="4 block of 3 bedroom flat" price="300,000" type="FOR RENT" />
                    <House house={house7} details="51, Iyin road, Ado-Ekiti" facilities="4 bedroom bungalow" price="1,100,000" type="FOR RENT" />
                    <House house={house8} details="7, Ikere road, Ado-Ekiti" facilities="2 bedroom bungalow" price="200,000" type="FOR RENT" />
                    <House house={house11} details="29, Adebayo Street, Ado-Ekiti" facilities="4 bedrrom bungalow" price="190,000" type="FOR RENT" />
                </div>
            </div>

            <hr className='border border-dark mb-5'/>

            <div className="container mb-4 border">
                <div className="bg-primary fs-5 fw-bold mt-2 mb-2 pt-1 pb-1 text-light text-center">Property Available for Sale</div>
                <div className="row g-3">
                    <House house={house1} details="12, Adebayo Street, Ado-Ekiti" facilities="5 bedroom flat" price="12,000,000" type="FOR SALE" />
                    <House house={house2} details="2, Akinola Street, Ado-Ekiti" facilities="5 bedroom flat" price="8,500,000" type="FOR SALE" />
                    <House house={house6} details="33, Iworoko Area, Ado-Ekiti" facilities="4 bedroom bungalow" price="29,000,000" type="FOR SALE" />
                    <House house={house9} details="5, GRA, Ado-Ekiti" facilities="3 bedroom bungalow" price="30,000,000" type="FOR SALE" />
                    <House house={house10} details="29, GRA, Ado-Ekiti" facilities="4 bedroom bungalow" price="42,000,000" type="FOR SALE" />
                    <House house={house12} details="2, Palace road, Are-Ekiti" facilities="4 bedrrom bungalow" price="8,300,000" type="FOR SALE" />
                    <House house={house13} details="59, Afao road, Ado-Ekiti" facilities="30 room hotel" price="55,000,000" type="FOR SALE" />
                    <House house={house14} details="6, GRA, Ado-Ekiti" facilities="5 bedroom bungalow" price="42,000,000" type="FOR SALE" />
                </div>
            </div>

            <div className="container mb-5 text-end">
                <div className="row">
                    <div className="col">
                        <Link to='/'>Back Home</Link>
                    </div>
                </div>
            </div> 
        </div>        
    </section>
  )
}

export default AllProperties