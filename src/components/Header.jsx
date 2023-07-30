import React from 'react'
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand as={Link} to='/'><img src={logo} alt="logo" width={200} /></Navbar.Brand>
      </Container>

      <Container>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/signin'><Button variant="light" size='sm' className='fw-bold shadow text-secondary'>FOR SALE</Button></Nav.Link>
            <Nav.Link as={Link} to='/sign'><Button variant="light" size='sm' className='fw-bold shadow text-secondary'>FOR RENT</Button></Nav.Link>
            <Nav.Link as={Link} to='/signin'><Button variant="primary" size='sm'>Add Property</Button></Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/signin'><Button variant="outline-secondary" size='sm'>Sign In</Button></Nav.Link>
            <Nav.Link as={Link} to='/signup'><Button variant="primary" size='sm'>Sign Up</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

    // <nav className='navbar navbar-light'>
    //   <img src={logo} alt="logo" />
    //   <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'>Open</button>
    //   <div className='collapse navbar-collapse' id='navbarCollapse'>
    //     <ul className='navbar-nav'>
    //       <li className='btn btn-light'>FOR RENT</li>
    //       <li className='btn btn-light'>FOR SALE</li>
    //       <li className='btn btn-primary'>Add Propery</li>
    //     </ul>
    //     {/* <ul className='navbar-nav'>
    //       <li className='btn btn-light'>Sign in</li>
    //       <li className='btn btn-primary'>Sign up</li>
    //     </ul> */}
    //   </div>
    // </nav>

export default Header