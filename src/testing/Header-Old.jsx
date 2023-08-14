import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.png';

const Menu = () => (
  <div className='onile__navbar-links'>
    <p><a href="/sale">FOR SALE</a></p>
    <p><a href="/rent">FOR RENT</a></p>
    <p id='button'><a href="/add_property">Add Property</a></p>
  </div>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
 
  return (
    <nav className="onile__navbar">
      <div className="onile__navbar-links_logo">
          <img src={logo} alt="logo" />
      </div>
      <div className="onile__navbar-links_container">
          <Menu />
      </div>
      <div className="onile__navbar-sign">
        <p>Sign up</p>
        <button>Sign in</button>
        {/* <button type="button">Sign in</button> */}
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