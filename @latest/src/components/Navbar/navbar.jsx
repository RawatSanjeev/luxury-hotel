import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);

  return (
    
      <nav className={navHeight ? "show nav" : "nav"}>
        <div className="Logo">Luxury Rental</div>
        <ul>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact us</Link>
          </li>
          <li>
            <Link to="/villas">Villas</Link>
          </li>
        </ul>
        <RxHamburgerMenu className='hamburger' onClick={() => setNavHeight(!navHeight)} />
      </nav>
    
  );
};

export default Navbar;
