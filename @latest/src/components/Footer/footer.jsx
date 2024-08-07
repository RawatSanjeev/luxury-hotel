import React from 'react';
import {Link,useLocation} from 'react-router-dom';

const Footer = () =>{
    const location = useLocation();
    const isHomePage = location.pathname==='/';
    return (
        <>
          <footer className={
              isHomePage?"homePage_footer otherPage_footer":"otherPage_footer"
          }>
            <div className="container">
                <h4>Luxury Rental</h4>
                <p>lorem ipsum dolor sit amet, consectetur adip</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Terms and Conditions</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </div>
            <div className='container'>
                <h4>Contact with us</h4>
                <p>+91-0000000000</p>
                <p>address</p>
                <p>Copyright 2020 Luxury Rental</p>
            </div>

        </footer>

        
        </>
    );
};
export default Footer;