import React from 'react'
import { Carousel } from 'react-bootstrap';
import './card.css'

import carousel1 from '../images/147/bonatti/1.jpg'
import carousel2 from '../images/147/bonatti/2.jpg'
import carousel3 from '../images/147/bonatti/3.jpg'
import carousel4 from '../images/147/bonatti/4.jpg'
import carousel5 from '../images/147/bonatti/5.JPG'
import carousel6 from '../images/147/bonatti/6.JPG'


export default function carousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-blocks w-101"
                    src={carousel1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-blocks w-101"
                    src={carousel2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-blocks w-101"
                    src={carousel3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-blocks w-101"
                    src={carousel4}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-blocks w-101"
                    src={carousel5}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-blocks w-101"
                    src={carousel6}
                    alt="Third slide"
                    />
                </Carousel.Item>
                
                </Carousel>



        </div>
    )
}
