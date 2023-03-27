import React from 'react';
import './page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { Carousel } from 'react-bootstrap';


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
                < img src="./dondon.jpg " className="cover-banner" alt="image" />


            </div>
            <div className="text-home">
                <hr className="hr-home" />
                <p><FaQuoteLeft className="comma0" /></p>
                <p className="text-h" >
                    <span className="home-bold">B</span>ienvenue à notre hôtel de luxe situé au cœur de la ville.
                    Notre établissement offre des chambres élégantes et spacieuses dotées de toutes les
                    commodités modernes pour un séjour confortable et relaxant. Chaque chambre dispose
                    d'un grand lit confortable, d'une télévision à écran plat, d'un minibar, d'un coffre-fort et
                    d'une salle de bain privative équipée d'articles de toilette de qualité supérieure.
                </p>
                <br />
                <p className="text-h" >
                    <span className="home-bold">N</span>otre hôtel propose également une gamme complète de services,
                    tels qu'une réception ouverte 24h/24, un service de conciergerie, un centre d'affaires et un
                    service de blanchisserie. Les clients peuvent profiter de notre restaurant sur place, qui sert
                    une cuisine délicieuse et raffinée dans un cadre élégant. Pour se détendre, les clients peuvent
                    également utiliser notre spa, notre centre de remise en forme ou notre piscine intérieure chauffée.
                </p>
                <br />
                <p className="text-h" >
                    <span className="home-bold">Q</span>ue vous soyez en voyage d'affaires ou en vacances,
                    notre hôtel est l'endroit idéal pour séjourner.
                    Nous sommes impatients de vous accueillir bientôt et de vous offrir
                    une expérience inoubliable.
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
