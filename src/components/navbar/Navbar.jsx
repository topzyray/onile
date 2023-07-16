import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

import './navbar.css'

const Menu = () => (
  <>
    <p><a href="#home">FOR SALE</a></p>
    <p><a href="#wonile">FOR RENT</a></p>
    <p><a href="#possibility">Add Property</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
 
  return (
    <nav className="onile__navbar">
      <div className="onile__navbar-links">
        <div className="onile__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="onile__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="onile__navbar-sign">
        <p>Sign up</p>
        <button type="button">Sign in</button>
      </div>
      <div className="onile__navbar-menu">
        {toggleMenu
          ? <RiCloseLine style={{color: "#fff", background: "#000"}} size={35} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line style={{color: "#fff", background: "#000"}} size={35} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='onile__navbar-menu_container scale-up-center'>
            <div className='onile__navbar-menu_container-links'>
              <Menu  />
              <div className="onile__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;