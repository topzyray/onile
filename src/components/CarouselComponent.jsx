import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage'
import '../css/master.css'

import ekiti_bg from '../assets/ekiti_bg.png'
import ekiti_ekdipa from '../assets/ekiti_ekdipa.jpeg'
import ekiti_rural from '../assets/ekiti_rural.jpg'
import ekiti_flyover from '../assets/ekiti_flyover.jpg'
import ekiti_logo from '../assets/ekiti_logo.png'

const CarouselComponent = () => {
  return (
    <Carousel fade className='border'>

      <Carousel.Item>
        <CarouselImage imagesrc={ekiti_ekdipa} />
        <Carousel.Caption className='d-flex justify-content-center align-items-center'>
            <div className='onile__search-container p-5 m-5 rounded'>
                <div className='text-center text-white onile__search-container-heading'>
                    <h1>Find your next home</h1>
                    <p>Helping you find your perfect fit</p>
                </div>
                <div className='text-center'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <button type='button' className='btn btn-light m-1'>BUY</button>
                        <button type='button' className='btn btn-light m-1'>SELL</button>
                    </div>
                    <div className='input-group mb-3'>
                        <input type="text" className="form-control" placeholder='Search properties' aria-label="Search properties" aria-describedby='button-addon' />
                        <button className="btn btn-primary" type='button' id='button-addon'>Search</button>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage imagesrc={ekiti_flyover} />
        <Carousel.Caption className='d-flex justify-content-center align-items-center'>
            <div className='onile__search-container p-5 m-5 rounded'>
                <div className='text-center text-white onile__search-container-heading'>
                    <h1>Find your next home</h1>
                    <p>Helping you find your perfect fit</p>
                </div>
                <div className='text-center'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <button type='button' className='btn btn-light m-1'>BUY</button>
                        <button type='button' className='btn btn-light m-1'>SELL</button>
                    </div>
                    <div className='input-group mb-3'>
                        <input type="text" className="form-control" placeholder='Search properties' aria-label="Search properties" aria-describedby='button-addon' />
                        <button className="btn btn-primary" type='button' id='button-addon'>Search</button>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage imagesrc={ekiti_bg} />
        <Carousel.Caption className='d-flex justify-content-center align-items-center'>
            <div className='onile__search-container p-5 m-5 rounded'>
                <div className='text-center text-white onile__search-container-heading'>
                    <h1>Find your next home</h1>
                    <p>Helping you find your perfect fit</p>
                </div>
                <div className='text-center'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <button type='button' className='btn btn-light m-1'>BUY</button>
                        <button type='button' className='btn btn-light m-1'>SELL</button>
                    </div>
                    <div className='input-group mb-3'>
                        <input type="text" className="form-control" placeholder='Search properties' aria-label="Search properties" aria-describedby='button-addon' />
                        <button className="btn btn-primary" type='button' id='button-addon'>Search</button>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage imagesrc={ekiti_rural} />
        <Carousel.Caption className='d-flex justify-content-center align-items-center'>
            <div className='onile__search-container p-5 m-5 rounded'>
                <div className='text-center text-white onile__search-container-heading'>
                    <h1>Find your next home</h1>
                    <p>Helping you find your perfect fit</p>
                </div>
                <div className='text-center'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <button type='button' className='btn btn-light m-1'>BUY</button>
                        <button type='button' className='btn btn-light m-1'>SELL</button>
                    </div>
                    <div className='input-group mb-3'>
                        <input type="text" className="form-control" placeholder='Search properties' aria-label="Search properties" aria-describedby='button-addon' />
                        <button className="btn btn-primary" type='button' id='button-addon'>Search</button>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage imagesrc={ekiti_logo} />
        <Carousel.Caption className='d-flex justify-content-center align-items-center'>
            <div className='onile__search-container p-5 m-5 rounded'>
                <div className='text-center text-white onile__search-container-heading'>
                    <h1>Find your next home</h1>
                    <p>Helping you find your perfect fit</p>
                </div>
                <div className='text-center'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <button type='button' className='btn btn-light m-1'>BUY</button>
                        <button type='button' className='btn btn-light m-1'>SELL</button>
                    </div>
                    <div className='input-group mb-3'>
                        <input type="text" className="form-control" placeholder='Search properties' aria-label="Search properties" aria-describedby='button-addon' />
                        <button className="btn btn-primary" type='button' id='button-addon'>Search</button>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
  }

export default CarouselComponent


{/* <Carousel fade className='border'>
      <Carousel.Item>
        <CarouselImage imagesrc={ekiti_ekdipa} />
        <Carousel.Caption className='d-flex justify-content-center align-items-center'>
            <div className='onile__search-container p-5 m-5 rounded'>
                <div className='text-center text-white onile__search-container-heading'>
                    <h1>Find your next home</h1>
                    <p>Helping you find your perfect fit</p>
                </div>
                <div className='text-center'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <button type='button' className='btn btn-light m-1'>BUY</button>
                        <button type='button' className='btn btn-light m-1'>SELL</button>
                    </div>
                    <div className='onile__search-form'>
                        <form className='form_container'>
                            <input type="text" className='input rounded' placeholder='Search properties' />
                            <button type='button' className='btn btn-primary m-1 ms-3'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imagesrc={ekiti_bg} />
        <Carousel.Caption className='d-flex justify-content-center align-items-center'>
            <div className='onile__search-container p-5 m-5 rounded'>
                <div className='text-center text-white onile__search-container-heading'>
                    <h1>Find your next home</h1>
                    <p>Helping you find your perfect fit</p>
                </div>
                <div className='text-center'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <button type='button' className='btn btn-light m-1'>BUY</button>
                        <button type='button' className='btn btn-light m-1'>SELL</button>
                    </div>
                    <div className='onile__search-form'>
                        <form className='form_container'>
                            <input type="text" className='input rounded' placeholder='Search properties' />
                            <button type='button' className='btn btn-primary m-1 ms-3'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imagesrc={ekiti_rural} />
        <Carousel.Caption className='d-flex justify-content-center align-items-center'>
            <div className='onile__search-container p-5 m-5 rounded'>
                <div className='text-center text-white onile__search-container-heading'>
                    <h1>Find your next home</h1>
                    <p>Helping you find your perfect fit</p>
                </div>
                <div className='text-center'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <button type='button' className='btn btn-light m-1'>BUY</button>
                        <button type='button' className='btn btn-light m-1'>SELL</button>
                    </div>
                    <div className='onile__search-form'>
                        <form className='form_container'>
                            <input type="text" className='input rounded' placeholder='Search properties' />
                            <button type='button' className='btn btn-primary m-1 ms-3'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imagesrc={ekiti_flyover} />
        <Carousel.Caption className='d-flex justify-content-center align-items-center'>
            <div className='onile__search-container p-5 m-5 rounded'>
                <div className='text-center text-white onile__search-container-heading'>
                    <h1>Find your next home</h1>
                    <p>Helping you find your perfect fit</p>
                </div>
                <div className='text-center'>
                    <div className='d-flex justify-content-center align-items-center mb-2'>
                        <button type='button' className='btn btn-light m-1'>BUY</button>
                        <button type='button' className='btn btn-light m-1'>SELL</button>
                    </div>
                    <div className='onile__search-form'>
                        <form className='form_container'>
                            <input type="text" className='input rounded' placeholder='Search properties' />
                            <button type='button' className='btn btn-primary m-1 ms-3'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}