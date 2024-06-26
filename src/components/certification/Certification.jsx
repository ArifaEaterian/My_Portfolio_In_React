/* eslint-disable no-unused-vars */
import React from 'react'

//css
import './Certification.css'

const Certification = () => {
    return (

        <div className='centeredSection' id='certification'>
            <h2 className="intro centeredText ">Certification</h2>
            <div className='cert_row'>
                <div className='cert_col'>
                    <img src='../../../public/media/img/Zebaq_Internship.jpg' alt='internship' />
                    <h5 className='cert_head'>WEB DEVELOPER INTERNSHIP</h5>
                    <p className='cert_dt'>Feb 2024 - May 2024</p>
                </div>
                <div className='cert_col'>
                    <img src='../../../public/media/img/Tutedude.com Mern Stack certificate.jpg' alt='internship' />
                    <h5 className='cert_head'>MERN STACK WEB DEVELOPMENT</h5>
                    <p className='cert_dt'>Jan 2024 - Mar 2024</p>
                </div>
                <div className='cert_col'>
                    <img src='../../../public/media/img/QSpider SW Testing.jpg' alt='internship' />
                    <h5 className='cert_head'>WEB DEVELOPER INTERNSHIP</h5>
                    <p className='cert_dt'>Feb 2024 - May 2024</p>
                </div>
                <div className='cert_col'>
                    <img src='../../../public/media/img/Lakshya Oracle.png' alt='internship' />
                    <h5 className='cert_head'>WEB DEVELOPER INTERNSHIP</h5>
                    <p className='cert_dt'>Feb 2024 - May 2024</p>
                </div>
            </div>

        </div>
    );
}
export default Certification;