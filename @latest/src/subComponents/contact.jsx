import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { FcPhone } from "react-icons/fc";
import { Link } from 'react-router-dom';
import {RiFacebookBoxLine} from 'react-icons/ri';

const Contact =()=>{
    return(
        <section id = 'contact_Mini'>
            <div className="super_container">
                <div className="container_1">
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
                <div className="container_2">
                    <h3>we'd: We hear form you</h3>
                    <form>
                        <div>
                            <input type="text" placeholder="Your Name"/>
                            <input type="text" placeholder="Email"/>
                            
                        </div>
                        <div>
                            <textarea rows="5" placeholder="Type Your Message"/>
                            <button type="submit">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;