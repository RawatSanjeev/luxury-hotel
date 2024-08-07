import React from 'react';
import About from '../../subComponents/about';

const AboutUs=()=>{
    return (
        <section id="aboutPage" className="page">
            <div className="container">
              <img src="/about.jpg" alt='about'/>
              <div className="content">
                  <h3>Your Peace Of Mind, Our Periority</h3>
                  <p>lorem ipsum</p>
                  <p>lorem201</p>
                
              </div>
            </div>
            <About/>
        </section> 
    );
};
export default AboutUs;