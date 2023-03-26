import React from 'react';
import './page.css';
import {Parallax} from 'react-parallax'

import pic_about from '../images/cover-banner1.jpg'
import parallax1 from '../images/Parallax/Hr.jpeg'
import picAbout from '../images/facdeHotel2.jpg'



export default function About() {
    return (
        <div className="about-wall">

            <div className="header-cover">
                <img src={picAbout} className="cover-banner" alt="pic_home" />
                <hr className="hr-cover1" />
                <p className="text-cover">About</p>
                <div className="border-text"></div>
                <hr className="hr-cover2"/>
            </div>
            <section class="section section-dark">
                <h2>
                    <p className="paralax-title">
                        WORDS OF MANAGEMENT</p>
                </h2>
                <p className="word-about">
                    Ezar is today one of the actors of the engineering in Africa. The versatile structure of our office allows us to adapt flexibly to the demands of its market. The motivation and effort of all Ezar's employees is the key to our performance. Given the needs
                    of the African continent, we have given priority to South-South collaboration. Our primary concern is to respond to needs by providing them with services adapted to evolve and build sustainability. Our services are increasingly well-known
                    thanks to the high degree of technical skill achieved by our staff and the result of continuous improvement of quality standards, enabling us to be a potential partner in engineering today and tomorrow.
                </p>
            </section>
            <div className="container-about1">
                <div className="box1 boxparallax">
                    <Parallax strength={300}>
                        <div style={{ height:'250px' , position:'relative' }}>
                        <img src={parallax1} style={{ height:'500px'}} alt='parallax1' />

                        </div>

                    </Parallax>

                </div>
                <div className="box1 p-hr">
                    <h2>
                        <p className="paralax-title">
                            HUMAN RESSOURCES
                        </p>
                    </h2>
                    <p class="hr-about">The quality and efficiency of the service rendered is at the heart of Ezar’s concerns. This is why the office is recruiting its engineers and technicians. Selected with great demand for their technical skills.</p>
                    <p class="hr-about">Ezar has a fairly large human potential that can develop specific capacities in relation to a expressed need.</p>
                </div>
                

            </div>
            <div className="pimg pimg1">
                <div className="ptext" >
                    <span className="border">
                        ENGINEERING
                    </span>
                </div>
                
            </div>
            <section className="section section-dark">
        <h2>
            <p className="paralax-title"> engineering</p>
        </h2>
        <p className="word-about">
            We deliver projects and provide engineering, procurement and construction expertise to the upstream, midstream, chemicals, power, and mining and minerals sectors. Thanks to the range of our services and the scope of our expertise, we work with our customers
            at every stage of their project – from initial concepts to sustaining and enhancing their assets
        </p>
    </section>
    <div className="pimg pimg2">
        <div className="ptext">
            <span className="border">
                MAINTENANCE  FACILITIES
            </span>
        </div>
    </div>
    <section className="section section-dark">
        <h2>
            <p className="paralax-title"> MAINTENANCE FOR OFFSHORE & ONSHORE FACILITIES </p>
        </h2>
        <p className="word-about">
            Ezar provided personnel to support offshore fixed and floating production facilities and onshore operational support base. Ezar's scope included: Operations and maintenance support and logistics services. Production superintendents, technicians, marine
            superintendents, mooring masters, maintenance technicians, logistics supervisors, materials controllers, deck foremen and radio operators, helicopter landing officers, construction superintendents, welding and fabrication trades, QA / QC technicians,
            and technical trainers Ongoing site services, performed under a reimbursable cost contract
        </p>
    </section>
    <div className="pimg pimg3">
        <div className="ptext">
            <span className="border">
                CONSTRUCTION
            </span>
        </div>
    </div>
    <section className="section section-dark">
        <h2>
            <p className="paralax-title"> ON SITE CONSTRUCTION</p>
        </h2>
        <p className="word-about">
            The construction activities cover Shop fabrication activities (steel structure, tanks and high pressure vessels, piping, shop fabrication) and Site construction (Civil works, steel structure, Mechanical erection, piping erection & hook-up, painting &
            blasting, electrical & instrumentation, control system). <br/> Once task matrix is defined and approved by Ezar and the subcontractor and / or partner (if any) the construction team is assigned and mobilized on site according to
            well studied mobilization plan gathering parameters of designated human resources composed by HSE team, supervisors, construction team… , the facilities and logistic forecasted onsite.
        </p>
    </section>
    <div className="pimg pimg4">
        <div className="ptext">
            <span className="border">
                PROJECT MANAGEMENT
            </span>
        </div>
    </div>
    <section className="section section-dark">
        <h2>
            <p className="paralax-title"> PROJECT MANAGEMENT
            </p>
        </h2>
        <p className="word-about">
            <span className="focal"> “The focal point is the project organization…”</span> <br/> <br/> Just four steps to meet the goal “succeed the project”, namely: planning, executing, monitoring and controlling, close out. Once a project is awarded, and
            in line with its Quality Management system Ezar develop a full comprehensive Project Execution Plan (PMP) composed by a detailed Project Execution Strategy and other subsidiary management plan including, integration, Scope, Time, Cost Control,
            Quality, Human resources, Communication, HSE, as well as production strategy including Engineering, development Procurement services, Construction & Supervision, Commissioning & Start-up.
        </p>
    </section>
    <div className="pimg pimg5">
        <div className="ptext">
            <span className="border">
                PROCUREMENT
            </span>
        </div>
    </div>
    <section className="section section-dark">
        <h2>
            <p className="paralax-title"> PROCUREMENT
            </p>
        </h2>
        <p className="word-about">
            Ezar develops and continually updates detailed files on the capabilities and capacities of a wide range of vendors and contractors throughout the world. Ezar can rapidly and reliably develop a contractor and vendor list to able to meet specific project
            requirements. Ezar procurement service is achieved in one of the following modes such as agent for the client, as a contractor in which Ezar directly issuing purchase orders and as support to the client’s purchasing department.
        </p>
    </section>
    <div class="grad2">
    </div>



</div>
    )
}
