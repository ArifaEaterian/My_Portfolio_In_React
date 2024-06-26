/* eslint-disable no-unused-vars */
import React from 'react';

//css
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section id='footer'>
            <footer>
                <div className='copyRight'>
                    <p>All Right Reserved | &copy; 2024</p>
                </div>
                <div className='footIcon'>
                    <a className="mailLink" href="#">
                        <FontAwesomeIcon icon={faLocationDot} className='conIcon conIcon2' />
                    </a>
                    <a className="mailLink" href="mailto:arifaiffat1995@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className='conIcon' />
                    </a>
                    <a className="contactNumber" href="tel:7751905656">
                        <FontAwesomeIcon icon={faPhone} className='conIcon' />
                    </a>
                    <a className="contactNumber" href="https://wa.me/9040165546">
                        <FontAwesomeIcon icon={faWhatsapp} className='conIcon conIcon2' />
                    </a>
                    <a className="contactNumber" href="https://www.linkedin.com/in/arifa-iffat-1a3a66173/">
                        <FontAwesomeIcon icon={faLinkedinIn} className='conIcon conIcon2' />
                    </a>
                </div>
            </footer>
        </section>
    );
}
export default Footer;