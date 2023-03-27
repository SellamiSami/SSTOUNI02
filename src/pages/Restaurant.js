import React from 'react'
import './page.css';

import pic_about from '../images/51.jpg'


export default function Restaurant() {
    return (
        <div>

            <div className="header-cover z">
                < img src="./restau01.jpg " className="cover-banner" alt="image" />
                <hr className="hr-cover1" />
                <p className="text-cover">RESTAURANT</p>
                <div className="border-text"></div>
                <hr className="hr-cover2" />
            </div>
            <br />
            <br />
            <div className='container'>

                < img src="./restau01.jpg " className='restau-img ' alt="image" />

            </div>

        </div>
    )
}
