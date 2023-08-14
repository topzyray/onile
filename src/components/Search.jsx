import React from 'react'
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
                    <button type='button' className='btn btn-light m-1'>BUY</button>
                    <button type='button' className='btn btn-light m-1'>SELL</button>
                </div>
                <div className='onile__search-form'>
                    <form className='form_container'>
                        <input type="text" className='input rounded' placeholder='Search by location or point of interest' />
                        <button type='button' className='btn btn-primary m-1 ms-3'>Search</button>
                        {/* <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="btn btn-primary" type="button" id="button-addon2">Button</button>
                        </div> */}
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