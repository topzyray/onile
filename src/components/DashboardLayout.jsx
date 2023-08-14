import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom'
import Listing from '../pages/Host/Listing'
import AddProperty from '../pages/Host/AddProperty'
import Account from '../pages/Host/Account'

const DashboardLayout = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link as={Link} to='/dashboard'>Listing</Nav.Link>
              <Nav.Link as={Link} to='/dashboard/addproperty' eventKey="link-1">Add Property</Nav.Link>
              <Nav.Link as={Link} to='/dashboard/account' eventKey="link-2">Account</Nav.Link>
            </Nav>
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <nav>
        <Link to='/dashboard/listing'>Listing</Link>
        <Link to='/dashboard/addproperty'>Add Property</Link>
        <Link to='/dashboard/account'>Account</Link>
      </nav> */}
            
    </>
  )
}

export default DashboardLayout