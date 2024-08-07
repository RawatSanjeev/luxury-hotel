import React from 'react';
import {villas} from '../../villas';
import {Link} from 'react-router-dom';
import {RxDot} from 'react-icons/rx';
import {IoIosPeople} from 'react-icons/io';
import {FaBed} from 'react-icons/fa';
import {FaBath} from 'react-icons/fa6';
import {BiArea} from 'react-icons/bi';

const Villas = () =>{
    return (
        <section id="allVillas" className='page'>
            <h1>ALL VILLAS</h1>
            <p>{villas.length}Properties</p>
            <div className='villasContainer'>
                {
                    villas.map((element) => {
                        return (
                            <Link to ={'/villa/${element.id}'} className='card' key={element.id}>
                                <img src={element.image} alt={element.name}/>
                                <div className ='location_text'>
                                    <span>{element.location}</span>
                                    <span><RxDot/></span>
                                    <span>{element.category}</span>

                                </div>
                                <div className ='title_text'>
                                    {element.name}
                                </div>
                                <div className ='specifications'>
                                    <div className ='spec'>
                                        <IoIosPeople/>
                                        <span>
                                            {element.guests}
                                            Guests
                                        </span>
                                    </div>
                                    <div className ='spec'>
                                        <FaBed/>
                                        <span>
                                            {element.bedrooms}
                                            Bedrooms
                                        </span>
                                    </div>
                                    <div className ='spec'>
                                        <BiArea/>
                                        <span>
                                            {element.squareMeter}
                                            squareMeter
                                        </span>
                                    </div>
                                    <div className ='spec'>
                                        <FaBath/>
                                        <span>
                                            {element.bathrooms}
                                            Bathrooms
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        )
                    
                    })
                }

            </div>
        </section>
    )
}
export default Villas;