import React from 'react';

const About =()=>{
    return (
        <section id='aboutUs_Mini'>
            <div className='first_container'>
                <div className='content'>
                    <h1>ABOUT US</h1>
                    <p>aesthetically designed convention hotel comprising 44 Premium rooms along with multiple banquets, courtyard, board room & conference halls, restaurants and lounge.</p>
                    <p>We re dedicated to blending comfort and convenience to provide you with the attention and luxury you deserve. </p>
                    <p>Featuring impeccable accommodations and an attentive staff, we guarantee youll have a pleasant experience here. Explore what we have to offer and book a room today.</p>
                    <p>If you</p>
                </div>
                <button>We strive to offer you best possible homes to stay!</button>
            </div>
            <div className="second_container">
                <div className="image_1">
                    <img src='/people.jpg' alt='people'/>
                </div>
                <div className="image_2">
                    <img src='/people2.jpg' alt='people2'/>
                </div>
            </div>
        </section>
    )
}
export default About;