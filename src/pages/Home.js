import React from 'react';
import './page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { Carousel } from 'react-bootstrap';
import { FaEnvelope } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutubeSquare } from "react-icons/fa"

import cars1 from '../images/carousel/1.gif'
import cars2 from '../images/carousel/2.png'
import cars3 from '../images/carousel/3.png'
import cars4 from '../images/carousel/4.png'
import cars5 from '../images/carousel/5.jpg'
import cars6 from '../images/carousel/6.png'
import cars7 from '../images/carousel/7.png'





export default function Home() {
    return (
        <div className="home">
            <div className="social-home">
                < img src="./reception.jpg " className="cover-banner" alt="image" />
                <ul className="social-h">
                    <a href={'https://www.facebook.com/ezar.co.ltd/'}>
                        <li><FaFacebookSquare className="nav-icon social-media-h" /></li>
                    </a>
                    <a href={'https://www.linkedin.com/company/ezar-co-ltd//'}>
                        <li><FaLinkedin className="nav-icon social-media-h" /></li>
                    </a>
                    <a href={'https://www.youtube.com/channel/UC8Zmeunw75u8tZycgo8TgiQ'}>
                        <li><FaYoutubeSquare className="nav-icon social-media-h" /></li>
                    </a>
                    <a href={'https://www.youtube.com/channel/UC8Zmeunw75u8tZycgo8TgiQ'}>
                        <li><FaEnvelope className="nav-icon social-media-h" /></li>
                    </a>
                </ul>

            </div>
            <div className="text-home">
                <hr className="hr-home" />
                <p><FaQuoteLeft className="comma0" /></p>
                <p className="text-h" >
                    <span className="home-bold">W</span>e offer the full range of integrated services for EPC plants including: project management, process engineering, multi-disciplinary detailed engineering, procurement, industrial construction, commissioning and start-up. We also provide maintenance engineering and global service to increase your facilities performances.
                </p>
                <br />
                <p className="text-h" >
                    <span className="home-bold">W</span>e are particularly conversant with expertise in multidisciplinary liable to respect the project’s confidentiality with a mental of new business generation away of any direct or indirect corruption. We put on disposal a network of legal joint-ventured partners and suppliers with continuous assistance along project exaction. We deliver our services with an assurance of reasonable costs, reliable scheduling, and exceptional quality.
                </p>
                <br />
                <p className="text-h" >
                    <span className="home-bold">T</span>o meet the demands of strict budgets and tight deadlines, we have built teams of highly skilled international and local professionals and integrated the technology of today to exceed your expectations. We have the experience and manpower to complete your needs in a timely and cost-effective manner.
                </p>

                <p><FaQuoteRight className="comma1" /></p>
                <br />
                <br />
                <br />

                <hr className="hr-home" />
            </div>
            <div className="carrousel-home">
                <div className="partner">
                    <hr className="hr-home-partner" />
                    <p className="text-partner" style={{ fontSize: '24px', margin: '0 5px' }}>OUR PARTNERS</p>
                    <hr className="hr-home-partner" />
                </div>
                <br />
                <hr className="hr-home-carousel" />

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cars1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cars2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cars3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cars4}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cars5}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cars6}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cars7}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>




                <hr className="hr-home-carousel" />


            </div>
            <div className='graduation-home'>
                <div className='graduation-bottom'></div>
            </div>
        </div>
    )
}
