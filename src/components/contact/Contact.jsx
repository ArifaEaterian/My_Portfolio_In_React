/* eslint-disable no-unused-vars */
import React from 'react';

//css
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../contactForm/ContactForm';

const Contact = () => {

    return (
        <div className='Sections'>
            <div className='socialIcons'>
                <h2 className="intro">Contact me</h2>

                <p>I would be delighted to hear from you. If you have any questions, comments, or inquiries, please do not hesitate to reach out.</p>

                <div className='contLinks'>

                    <a className="mailLink" href="#">
                        <FontAwesomeIcon icon={faLocationDot} className='conIcon conIcon2' />
                        Bhubaneswar, Odisha, 751021.</a>
                    <a className="mailLink" href="mailto:arifaiffat1995@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className='conIcon' />
                        arifaiffat1995@gmail.com</a>
                    <a className="contactNumber" href="tel:7751905656">
                        <FontAwesomeIcon icon={faPhone} className='conIcon' />
                        7751905656</a>
                    <a className="contactNumber" href="https://wa.me/9040165546">
                        <FontAwesomeIcon icon={faWhatsapp} className='conIcon conIcon2' />
                        9040165546</a>
                    <a className="contactNumber" href="https://www.linkedin.com/in/arifa-iffat-1a3a66173/">
                        <FontAwesomeIcon icon={faLinkedinIn} className='conIcon conIcon2' />
                        Arifa Iffat</a>
                </div>
            </div>
            <div className='contactForm'>
                <ContactForm/>
            </div>

        </div>
    );
}
export default Contact;