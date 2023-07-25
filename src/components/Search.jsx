import React from 'react'
import Button from 'react-bootstrap/Button'
import '../css/master.css'


function Search() {
  return (
    <section className='template d-flex justify-content-center align-items-center 100-vh onile__search'>
        <div className='onile__search-container p-5 m-5 rounded'>
            <div className='text-center text-white onile__search-container-heading'>
                <h1>Find your next home</h1>
                <p>Helping you find your perfect fit</p>
            </div>
            <div className='text-center'>
                <div className='d-flex justify-content-center align-items-center mb-2'>
                    <button type='button' className='btn btn-light btn-lg m-1 onile-btn-buy'>BUY</button>
                    <button type='button' className='btn btn-light btn-lg m-1 onile-btn-sell'>SELL</button>
                </div>
                <div className='onile__search-form'>
                    <form className='form_container'>
                        <input type="text" className='rounded' placeholder='Search by location or point of interest' />
                        <button type='button' className='btn btn-primary btn-lg m-1 ms-3 onile-btn-search'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search

{/* <section className='onile__search'>
        <div className='onile__search-container'>
            <div className='onile__search-container_heading'>
                <h1>Find your next home</h1>
                <p>Helping you find your perfect fit</p>
            </div>
            <div className='onile__search-container_action-btn'>
                <button>BUY</button>
                <button>SELL</button>
            </div>
            <div className='onile__search-container_search'>
                <form>
                    <input type="text" placeholder='Search by location or point of interest' />
                    <button>Search</button>
                </form>
            </div>

        </div>
    </section> */}