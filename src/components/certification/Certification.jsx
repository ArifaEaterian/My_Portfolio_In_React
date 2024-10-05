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
                    <img src='https://arifaeaterian.github.io//My_Portfolio_In_React2/assets/images/Zebaq_Internship.jpg' alt='internship' />
                    <h5 className='cert_head'>WEB DEVELOPER INTERNSHIP</h5>
                    <p className='cert_dt'>Feb 2024 - May 2024</p>
                </div>
                <div className='cert_col'>
                    <img src='https://arifaeaterian.github.io//My_Portfolio_In_React2/assets/images/Tutedude.com_Mern_Stack_certificate.jpg' alt='internship' />
                    <h5 className='cert_head'>MERN STACK WEB DEVELOPMENT</h5>
                    <p className='cert_dt'>Jan 2024 - Mar 2024</p>
                </div>
                <div className='cert_col'>
                    <img src='https://arifaeaterian.github.io//My_Portfolio_In_React2/assets/images/QSpider_SW_Testing.jpg' alt='internship' />
                    <h5 className='cert_head'>SOFTWARE TESTING (QSIDER)</h5>
                    <p className='cert_dt'>Jun 2019 - Nov 2019</p>
                </div>
                <div className='cert_col'>
                    <img src='https://arifaeaterian.github.io//My_Portfolio_In_React2/assets/images/Lakshya_Oracle.png' alt='internship' />
                    <h5 className='cert_head'>Oracle 11G</h5>
                    <p className='cert_dt'>May 2017 - Jun 2017</p>
                </div>
            </div>

        </div>
    );
}
export default Certification;