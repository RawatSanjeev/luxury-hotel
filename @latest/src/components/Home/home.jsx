import React from 'react';
import HeroSection from '../../subComponents/heroSection';
import TopVillas from '../../subComponents/topvillas';
import Regions from '../../subComponents/regions';
import OurSpecialities from '../../subComponents/ourSpecialities';
import Host from '../../subComponents/host';
import About from '../../subComponents/about';
import Contact from '../../subComponents/contact';

const Home = () => {
    return (
        
          <article className="page">
            <HeroSection/>
            <TopVillas/>
            <Regions/>
            <OurSpecialities/>
            <Host/>
            <About/>
            <Contact/>
          </article>
            
        
    );

};

export default Home;
