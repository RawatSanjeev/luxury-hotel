import React from 'react';
import {villas} from '../../villas';
import { useParams } from 'react-router-dom';


const SingleVilla = () => {
    const {id} = useParams();
    const numericId = Number(id);
    const filteredVilla = villas.filter((villa)=>villa.id===numericId)[0];
    return (
        <section className="page" id='singleVilla' >
            <div className="container">
                <h3>{filteredVilla.name}</h3>
                <div className="images">
                    <div className='villaImg'>
                        <img src={filteredVilla.image} alt={filteredVilla.name}/>
                    </div>
                    <div className='otherImgs'>
                        <div>
                            
                            <img src='/landing.jpg' alt='landing'/>
                            <img src='/people.jpg' alt='people'/>
                        </div>
                        <div>
                            
                            <img src='/people2.jpg' alt='people2'/>
                            <img src='/villa10.jpg' alt='villa'/>
                        </div>
                    </div>

                </div>
                <h4>{filteredVilla.location}</h4>
                <p>
                    {filteredVilla.bathrooms} Bathrooms /{filteredVilla.bedrooms} Bedrooms / {filteredVilla.rooms} Rooms / {filteredVilla.squareMeter} squareMeter
                </p>
                <div className='checkin_out'>
                    <h5>Check-in:<span>9:00 AM</span></h5>
                    <h5>Check-out<span>12:00 PM</span></h5>
                </div>
                <div className="location">
                  <h4>LOCATION</h4>
                  <iframe
                    title={`Villa ${villa.name} Map`}
                    src="https://www.google.com/maps/embed?..."
                    style={{ width: "100%", height: "400px", border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
            </div>
        </section>
    )
}

export default SingleVilla;