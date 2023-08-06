import React, { useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import logo from '../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  return (
    <Navbar expand="lg" className="bg-body-primary border border-secondary" sticky="top" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to='/'><img src={logo} alt="logo" width={140} /></Navbar.Brand>
      </Container>

      <Container>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/properties'><Button variant="light" className='fw-bold text-dark shadow'>FOR SALE</Button></Nav.Link>
            <Nav.Link as={Link} to='/properties'><Button variant="light" className='fw-bold text-dark shadow'>FOR RENT</Button></Nav.Link>
            <Nav.Link as={Link} to='https://docs.google.com/forms/d/e/1FAIpQLSeyTSCuuT6n4idy9QmQNb_3D9kmHfk8BJHfe-4XQ2j5JJYl0Q/viewform?usp=sf_link' target='_blank'><Button variant="primary" className='fw-bold shadow'>Add Property</Button></Nav.Link>
          </Nav>
          <Nav className="me-auto">
            {!isLoggedIn && <Nav.Link as={Link} to='/signin'><Button variant="outline-secondary" className='fw-bold text-dark shadow'>Sign In</Button></Nav.Link>}
            {!isLoggedIn && <Nav.Link as={Link} to='/signup'><Button variant="primary" className='fw-bold shadow'>Sign Up</Button></Nav.Link>}
          </Nav>
          <Nav className="me-auto">
            {isLoggedIn && <Nav.Link as={Link} to='/dashboard'><Button variant="outline-secondary" className='fw-bold text-dark shadow'><FaRegEnvelope/></Button></Nav.Link>}
            {isLoggedIn && <Nav.Link as={Link} to='/dashboard'><Button variant="outline-secondary" className='fw-bold text-dark shadow'><CgProfile /> Name</Button></Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
