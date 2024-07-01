/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink, faLocationDot, faPhone,  } from '@fortawesome/free-solid-svg-icons';

//css
import './Qualification.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ProgressBar from "@ramonak/react-progress-bar";

// import ProgressBar from '../progressBar/ProgressBar';


const Qualification = () => {


    return (
        <div className='Sections'>

            <div className='qualSec_1'>
                <img src='https://arifaeaterian.github.io//My_Portfolio_In_React/assets/images/ARIFA IFFAT.jpg' className='profileImg' />
                <div className='details'>
                    <p className="iam">I’m</p>
                    <h2 className="intro">ARIFA IFFAT</h2>
                    <div className='contLinks'>

                        <a class="mailLink" href="#">
                            <FontAwesomeIcon icon={faLocationDot} className='conIcon conIcon2' />
                            Bhubaneswar, Odisha, 751021.</a>
                        <a class="mailLink" href="mailto:arifaiffat1995@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className='conIcon' />
                            arifaiffat1995@gmail.com</a>
                        <a class="contactNumber" href="tel:7751905656">
                            <FontAwesomeIcon icon={faPhone} className='conIcon' />
                            7751905656</a>
                        <a class="contactNumber" href="https://wa.me/9040165546">
                            <FontAwesomeIcon icon={faWhatsapp} className='conIcon conIcon2' />
                            9040165546</a>
                    </div>
                </div>
            </div>
            <div className='qualSec_2'>
                <div>
                    <h2 class="intro">Education</h2>
                    <p>I am passionate about becoming a MERN stack web developer, dedicated to mastering MongoDB, Express.js, React, and Node.js to build dynamic, responsive, and scalable web applications. If you’re looking for a driven and skilled developer to join your team, hire me!</p>
                    <div class="well">
                        <h6>MCA - 85%</h6>
                        <ProgressBar completed={85} bgColor={'#973784'}	 />
                        {/* <ProgressBar progress="85"/> */}
                        
                        <h6>BCA - 80%</h6>
                        {/* <ProgressBar/> */}
                        <ProgressBar completed={80} bgColor={'#973784'}/>

                        <h6>+2 Board - 63%</h6>
                        {/* <ProgressBar/> */}
                        <ProgressBar completed={63} bgColor={'#973784'} />
                        
                        <h6>10th board - 79%</h6>
                        {/* <ProgressBar/> */}
                        <ProgressBar completed={79} bgColor={'#973784'} />
                        
                    </div>
                    <a href="#contact" target="_blank" class="socialLink">
                    <FontAwesomeIcon icon={faLink} />  Hire me </a>
                </div>

            </div>

        </div>
    );
}
export default Qualification