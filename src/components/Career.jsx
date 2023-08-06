import React from 'react'
import { Link } from 'react-router-dom'

const Career = () => {
  return (
    <div className='container mt-5 mb-5 p-3 border'>
      <div className="row text-center m-2 p-5">
        <div className="col">
          <h1>Career</h1>
          <h3>This Section is under development. Please check back later. Thank you.</h3>
        </div>
      </div>

      <div className="container mb-1 text-end">
      <div className="row">
          <div className="col">
              <Link to='/'>Back Home</Link>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Career;
