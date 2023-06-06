import React from 'react';
import './heading.css'
//import image
import logo from './luxe_looks.png';

// create header component
function Header({ signedIn }) {
  return (
    <header>
      <img className='header-logo' src={logo} alt="company-logo" />
      <h1>Hand woven, quality garments, for your daily needs..</h1>
      {signedIn ? (
        <h5>Welcome User365</h5>
      ) : (
        <a href="">Sign In/Register</a>
      )
      }
    </header>
  );
}

export default Header;