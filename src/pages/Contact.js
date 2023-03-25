import React from 'react'
import './page.css';
import MyMapComponent from '../components/Map'

import pic_about from '../images/63.jpg'


export default function Contact() {
    return (
        <div>

             <div className="header-cover">
                <img src={pic_about} className="cover-banner" alt="pic_home" />
                <hr className="hr-cover1" />
                <p className="text-cover">Contact</p>
                <div className="border-text"></div>
                <hr className="hr-cover2"/>
            </div>
            <div className="container-contact1">
                <div className="boxs bx10">
                    <MyMapComponent/>
                </div>
                <div className="boxs bx11">
                    <p className="contact-info ze">
                            Financial analysts and funds managers may contact:</p>
                        <p>
                            <h1>-</h1>
                        </p>
                        <p className="contact-info"><span className="span-contact">A.</span> Rd. 5 august Sfax Palace Building floor N°6 A61, Sfax - Tunisia.</p>
                        <p>
                            <h1>-</h1>
                        </p>
                        <p className="contact-info"><span className="span-contact">T.</span> +216 74 207 152</p>
                        <p>
                            <h1>-</h1>
                        </p>
                        <p className="contact-info"><span className="span-contact">F.</span> +216 74 207 154</p>
                        <p>
                            <h1>-</h1>
                        </p>
                        <p className="contact-info"><span className="span-contact">@.</span> Company@ezar-ltd.com</p>


                </div>
            </div>







            <div className="contact-section">
                <h1>Contact Us</h1>
                <div className="border"></div>
                <form className="contact-form" id="contactForm">
                    <input type="text" className="contact-form-text" placeholder="Name" id="name1" />
                    <input type="email" className="contact-form-text" placeholder="Email Address" id="mail1" />
                    <input type="number" className="contact-form-text" placeholder="Phone" id="phone1" />
                    <input type="text" className="contact-form-text" placeholder="Subject" id="subject1" />
                    <textarea className="contact-form-text" placeholder="Your message" id="message1"></textarea>
                    {/* <!-- <input type="submit" className="contact-form-btn" value="Send"> --> */}
                    <button onclick="submitForm" className="contact-form-btn">Submit</button>
                    {/* <!-- <button className="button contact-form-btn" type="submit"> Submit</button> --> */}

                </form>
            </div>



        </div>
    )
}
