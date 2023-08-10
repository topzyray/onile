import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const PropertyDetails = () => {

    const [propertyItem, setPropertyItem] = useState(null)

    console.log(propertyItem)

    const params = useParams()

    useEffect(() => {
        fetch(`/api/properties/${params.id}`)
            .then(res => res.json())
            .then(data => setPropertyItem(data.properties))
    }, [params.id])

  return (
    <div className="container d-flex justify-content-center rounded-3 mt-5 mb-3 pt-3 border">
        {propertyItem ? (
        <div className=" mb-3">
            <div className="row g-3 text-center">
                <div className="col" key={propertyItem.id}>
                    <div className="card" >
                        <div className="card-type">{(propertyItem.type).toUpperCase()}</div>
                        <img src={propertyItem.houseImage} alt="Image of Houses" className='card-img-top img-responsive rounded-3' />
                        <div className="card-body">
                            <h5 className='card-title'>N{propertyItem.price}</h5>
                            <p className='card-text'>{propertyItem.details}</p>
                            <p className='card-text'>{propertyItem.facilities}</p>
                        </div>
                        <div className="card-footer">
                            <Link to="mailto:support@onile.com" target='_blank'><button type='button' className='btn btn-outline-primary'>CONTACT AGENT/OWNER</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>) : <Spinner/>}
    </div>
  )
}

export default PropertyDetails