import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
      <div className="container-fluid" style={{height: "100%"}}>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link as={Link} to='/dashboard' style={{width: "50%", border: "1px solid blue", padding: "0.5rem"}}>Listing</Nav.Link>
              <Nav.Link as={Link} to='/dashboard/addproperty' eventKey="link-1">Add Property</Nav.Link>
              <Nav.Link as={Link} to='/dashboard/account' eventKey="link-2">Account</Nav.Link>
            </Nav>
          </div>
          <div className="col" style={{width: "70%", height: "70vh", border: "2px solid blue", borderRadius: "2rem", margin: "2rem"}}>
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