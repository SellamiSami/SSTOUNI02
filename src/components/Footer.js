import React, { Component } from 'react'
import logoFooter from '../images/logo-footer.png'
import {Link} from 'react-router-dom'

import { FaBullseye } from "react-icons/fa"
import { FaLocationArrow } from "react-icons/fa"
import { FaPhoneSquareAlt } from "react-icons/fa"
import { FaFax } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"



export default class Footer extends Component {
    render() {
        return (
            <div className='nav-footer'>
                <div className="social-footer">
                    <ul className="social-f">
                            <a href={'https://www.facebook.com/ezar.co.ltd/'}>
                        <li><FaFacebookSquare className="nav-icon social-media-f"/></li>
                            </a>
                            <a href={'https://www.linkedin.com/company/ezar-co-ltd//'}>
                        <li><FaLinkedin className="nav-icon social-media-f"/></li>
                            </a>
                            <a href={'https://www.youtube.com/channel/UC8Zmeunw75u8tZycgo8TgiQ'}>
                        <li><FaYoutube className="nav-icon social-media-f"/></li>
                            </a>
                            <a href={'https://www.youtube.com/channel/UC8Zmeunw75u8tZycgo8TgiQ'}>
                        <li><FaEnvelope className="nav-icon social-media-f"/></li>
                            </a>
                    </ul>

                </div>
               
                <div className="col-md-4 col-sm-12 footer-w lgo1">
                    <div className="serv serv11">
                        <p></p>
                        <Link to="/">
                            <img src={logoFooter} alt="Ezar Company" className="logo-footer"  />
                        </Link>
                        <p className="footer-text1">EZAR Company is a leading business actor in North Africa, having its Headquarters in Tunis, supplying a wide range of high quality services in several areas (Oil & Gas, Chemical Industry,Power generation, Water treatment, Medical
                            Equipment). EZAR Company is directed by a management board that defines major strategic orientations and supervises the management of the Group.</p>
                    </div>

                </div>
                <div className="col-md-4 col-sm-12 footer-w footer-sector">
                    <div className="serv serv2">
                        <div className='vertical-line-footer'>
                            <p className="footertitle"> Company Sectors </p>
                            <div className="footersector">
                                <Link to="/services" className="footer-infsec">
                                    <p className="footer-infsec"> <FaBullseye className="nav-icon footersec"/>  OIL & GAS </p>
                                </Link>
                                <Link to="/services" className="footer-infsec">
                                    <p className="footer-infsec"> <FaBullseye className="nav-icon footersec"/>  INDUSTRY</p>
                                </Link>
                                <Link to="/services" className="footer-infsec">
                                    <p className="footer-infsec"> <FaBullseye className="nav-icon footersec"/>  RENEWABLE ENERGY </p>
                                </Link>
                                <Link to="/services" className="footer-infsec">
                                    <p className="footer-infsec"> <FaBullseye className="nav-icon footersec"/>  MINING </p>
                                </Link>
                                <Link to="/services" className="footer-infsec">
                                    <p className="footer-infsec"> <FaBullseye className="nav-icon footersec"/>  WATER TREATMENT</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-sm-12 footer-w footer-contact">
                    <div className="serv serv3 serv3f">
                       <div className='vertical-line-footer '>
                            <p className="footertitle"> Contact Info </p>
                            <div className="footersector footersector1">
                                    <p className="footer-inf"> <FaLocationArrow className="nav-icon footersec2"/>  Head Office: Rd. 5 august Sfax Palace Building floor N°6 A61, Sfax - Tunisia. </p>
                                    <p className="footer-inf"> <FaLocationArrow className="nav-icon footersec2"/>  Libya Office: Dhat El Imad Tower Complex N 3 Floor N 5 PO Box 91650 Tripoli - Libya</p>
                                    <p className="footer-inf2"> <FaPhoneSquareAlt className="nav-icon footersec2"/>  +216 74 207 152 </p>
                                    <p className="footer-inf2"> <FaFax className="nav-icon footersec2"/>  +216 74 207 154 </p>
                                    <p className="footer-inf2"> <FaEnvelope className="nav-icon footersec2"/>  company@ezar-ltd.com</p>
                            </div>
                        </div>
                     </div>

                </div>



               
            </div>
        )
    }
}
