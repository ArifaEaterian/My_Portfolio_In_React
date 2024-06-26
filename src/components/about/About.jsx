/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faLinkedinIn, faNodeJs, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';
//css
import './About.css';

const About = () => {

    return (
        <div className='Sections' id='about'>
            <div className='aboutSec_1'>
                    <p className="iam">I’m a</p>
                    <h2 className="intro">Full Stack Web Developer</h2>                    
                    <p className='skills'><FontAwesomeIcon icon={faHtml5}/><FontAwesomeIcon icon={faCss3}/>
                    <FontAwesomeIcon icon={faSquareJs}/><FontAwesomeIcon icon={faReact}/>
                    <FontAwesomeIcon icon={faNodeJs}/><FontAwesomeIcon icon={faGithub}/></p>
                    <div className='links'>
                        <a href='#' target='_blank' className='socialLink'><FontAwesomeIcon icon={faLinkedinIn} className="socialIcon" /> Linked-In</a>
                        <a href='#' target='_blank' className='socialLink'><FontAwesomeIcon icon={faGithub} className="socialIcon" /> Git-hub</a>
                    </div>
            </div>
                
            <div className='aboutSec_2'>
                    <img src={`${process.env.PUBLIC_URL}/media/img/headerImg-500x500.png`} alt='headerimg' className='headerImg' />
                </div>

        </div>
    );
}
export default About