import React from 'react'
import './page.css';

import pic_about from '../images/51.jpg'


export default function Services() {
    return (
        <div>

             <div className="header-cover z">
                <img src={pic_about} className="cover-banner" alt="pic_home" />
                <hr className="hr-cover1" />
                <p className="text-cover">SERVICES</p>
                <div className="border-text"></div>
                <hr className="hr-cover2"/>
            </div>
            <div className="container-services z">
         <div className="box bx1 z">
            <div className="title">Process</div>
            <div className="text-inside">
                <li>Piping flow diagram PFD</li>
                <li>Piping & Instrumentation diagram PID</li>
                <li>Cause & Effect diagram</li>
                <li>Operation manual</li>
                <li>Functional analysis</li>
            </div>
        </div>
        <div className="box bx2 z">
            <div className="title">Piping</div>
            <div className="text-inside">
                <li>Flexibility check report</li>
                <li>Piping routings and isometric drawing</li>
                <li>Piping routings and isometric drawing</li>
                <li>Piping classes and valves specification</li>
                <li>Piping material lists</li>
            </div>
        </div>
        <div className="box bx3 z">
            <div className="title">Mechanical</div>
            <div className="text-inside">
                <li>Design of static equipments (Tanks, Pressure Vessels…)</li>
                <li>Design of belts conveyors</li>
                <li>Technical specification of rotory machines (Pumps, Mixers,…) and Skids</li>
                <li>General arrangement drawings</li>
            </div>
        </div>
        <div className="box bx4 z">
            <div className="title">Civil & Structure</div>
            <div className="text-inside">
                <li>Site leveling & drawing system design</li>
                <li>Steel structure design</li>
                <li>Equipements foundations design (static/dynamic</li>
                <li>Static /Dynamic design for building structures</li>
            </div>
        </div>
        <div className="box bx5 z">
            <div className="title">Control & Instrumentation</div>
            <div className="text-inside">
                <li>Architectural & synoptic diagram</li>
                <li>Control system and specification instruments</li>
                <li>In/Outs lists</li>
                <li>Control system arrangement and interconnection details</li>
                <li>Instruments material list</li>
                <li>Instrument cable routing</li>
            </div>
        </div>
        <div className="box bx6 z">
            <div className="title">Electricity</div>
            <div className="text-inside">
                <li>Single line diagram</li>
                <li>Earthing system design</li>
                <li>Electrical block diagram</li>
                <li>Power synoptic</li>
                <li>Cathodic protection design</li>
                <li>Electrical equipments specifications</li>
                <li>Electrical material list</li>
            </div>
        </div>

    </div>
            <div className='graduation-home'>
                <div className='graduation-bottom-serv'></div>
            </div> 
        </div>
    )
}
