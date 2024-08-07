import React from 'react';
import {RiFacebookBoxLine} from 'react-icons/ri';
import { TfiEmail } from "react-icons/tfi";
import { FcPhone } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Contact=()=>{
    return(
        <section id="contact">
            <h1>Contact Us</h1>
            <p>lorem ipsum dolor sit amet,</p>
            <p>lorem ipsum dolor sit amet,</p>
            <div className='container'>
                <img src='/about.jpg' alt='about'/>
                <div className="content">
                    <h3>Let's connect</h3>
                    <div>
                        <p><FcPhone /></p>
                        <span>:+91 0000000000</span>
                        
                    </div>
                    <div>
                        <p><TfiEmail /> </p>
                        <span>: agvg@gmai.com</span>
                    </div>
                    <div>
                        <p>Address </p>
                        <span>: ad c nagar unnao</span>
                    </div>
                    <ul>
                        <Link to={"/"} target="_blank"><RiFacebookBoxLine/></Link>
                        <Link to={"/"} target="_blank"><RiFacebookBoxLine/></Link>
                        <Link to={"/"} target="_blank"><RiFacebookBoxLine/></Link>

                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Contact;