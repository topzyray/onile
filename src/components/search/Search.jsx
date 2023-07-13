import React from 'react'
import './search.css'

function Search() {
  return (
    <section className='onile__search'>
        <div className='onile__search-container'>
            <div className='onile__search-container_heading'>
                <h1>Find your next home</h1>
                <p>Helping you find your perfect fit</p>
            </div>
            <div className='onile__search-container_action-btn'>
                <button>BUY</button>
                <button>SELL</button>
                <button>SHORTLET</button>
            </div>
            <div className='onile__search-container_search'>
                <form>
                    <input type="text" placeholder='Search by location or point of interest' />
                    <button>Search</button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Search