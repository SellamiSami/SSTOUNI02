import React from 'react'
import './page.css';
import { Parallax, Background } from 'react-parallax';
import Cards from '../components/Card'

import pic_about from '../images/73.jpg'
import pic_parallax from'../images/Parallax/project2.jpg'
import prj1 from '../images/147/IMG-20200130-WA0008.jpg'
import prj2 from'../images/147/team.jpg'
import prj3 from'../images/147/bosna/bos1.JPG'
import prj4 from'../images/147/bonatti/1.jpg'
import prj5 from'../images/147/bosna/bos2.JPG'
import prj6 from'../images/147/bonatti/2.jpg'




export default function Projects() {
    return (
        <div className="project">
            <div className="header-cover">
                <img src={pic_about} className="cover-banner" alt="pic_home" />
                <hr className="hr-cover1" />
                <p className="text-cover">Projects</p>
                <div className="border-text"></div>
                <hr className="hr-cover2"/>
            </div>
            <Parallax strength={300}>
            
                <Background className="custom-bg" >
                    <img src={pic_parallax} className='parallax-project' alt="fill murray"  />
                </Background>
                <div>
                    <Cards title="Tank T-147" 
                            content="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus."
                            image={prj1}/>
                    <Cards title="Tank-146"content="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus."
                            image={prj2}/>
                    <Cards title="T-3"content="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus."
                            image={prj3}/>
                    <Cards title="Piping Erection"content="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus."
                            image={prj4}/>
                    <Cards title="Piping Erection"content="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus."
                            image={prj5}/>
                    <Cards title="Piping Erection"content="Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus."
                            image={prj6}/>
                            
                </div>
            </Parallax>





        </div>
    )
}
