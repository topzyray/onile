import React, {useState, useEffect} from 'react';
import '../server'
import { Link } from 'react-router-dom'

import '../css/master.css'


function Property() {

    const [property, setProperty] = useState([])
    
    useEffect(() => {
        fetch("api/properties")
            .then(res => res.json())
            .then(data => setProperty(data.properties))
            .catch(err => console.error(err))
        }, [])

    const properyElements = property.slice(5).map(property => (
        <div className="col-12 col-md-6 col-lg-4" key={property.id}>
             <Link to={`properties/${property.id}`} style={{textDecoration: "none"}}>
                <div className="card onile-card" >
                    <div className="card-type">{property.type.toUpperCase()}</div>
                    <img src={property.houseImage} alt="Image of Houses" className='card-img-top img-responsive rounded-3' width={300} height={300} />
                    <div className="card-body">
                        <h5 className='card-title'>N{property.price}</h5>
                        <p className='card-text'>{property.details}</p>
                        <p className='card-text'>{property.facilities}</p>
                    </div>
                </div>
             </Link>
         </div>
    ))

  return (
    <section>
        <div className="container rounded-3 mt-5 mb-3 pt-3 onile__for-sale border">
            <div className='container'>
                <div className="row ">
                    <div className="col">
                        <div className="bg-primary fs-4 fw-bold mt-2 mb-2 pt-1 pb-1 text-light text-center">Latest Properties</div>
                    </div>
                </div>
            </div>

            <div className="container mb-3">
                <div className="row g-3">
                    {properyElements}
                </div>

                <div className='container d-flex justify-content-center align-items-center 100-w mt-3'>
                    <div className="row">
                        <div className="col">
                            <Link to='properties'><p className='btn btn-primary btn'>Explore More Properties</p></Link>
                        </div>
                    </div>
                </div>
            </div>       
        
        </div>
    </section>
  )
}

export default Property;