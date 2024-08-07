import React from 'react';

const Regions =()=>{
    return(
        
          <section id='regions'>
            <h2>Our Regions</h2>
            <p>lorem ipsum dolor sit amet, con</p>
            <div className='region_container'>
                <div className='card'>
                    <img src='/region1.jpg' alt='mountains'/>
                    <h2>Mountains</h2>
                    <p><span>90</span> Properties</p>

                </div>
                <div className='card'>
                    <img src='/region2.jpg' alt='coastline'/>
                    <h2>Coastline</h2>
                    <p><span>76</span> Properties</p>

                </div>
            </div>
          </section>
        
    )
}
export default Regions;