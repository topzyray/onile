import React from 'react'
import '../css/master.css'

const CarouselImage = ({imagesrc}) => {
  return (
    <div>
        <img className='carousel-img' src={imagesrc} alt="Carousel Images" />
    </div>
  )
}

export default CarouselImage