/* eslint-disable no-unused-vars */
import React from 'react'

//css
import './Experience.css';

const Experience = () => {

    return (
        <div className='centeredSection' id='experience'>
            <h2 className="intro centeredText ">Experience</h2>
            <div className='exp_cont_row'>
                <div className="exp_cont">
                    <h3 className="expHeading"><span className='num'>1</span> Jr. Web Developer at Zebaq Pvt. Ltd. </h3>
                    <p>At Bhubaneswar, Odisha. <br />3rd June 2024 – Present</p>
                    <p>Live Projects: 
                        <span className='livePro'><a href="https://evvaracafe.com/" target="_blank" rel="noopener noreferrer">Evvaracafe</a></span>,
                        <span className='livePro'><a href="https://a-bestinsurance.com/" target="_blank" rel="noopener noreferrer">A-BestInsurance</a></span>,
                        <span className='livePro'><a href="https://zamasama.com/" target="_blank" rel="noopener noreferrer">Zamasama </a></span> and more.
                    </p>

                    <p><span className="coloredText"><strong>Role &amp; Responsibilities:</strong></span></p>
                    <ul>
                        <li>Front-End Development: Designed and developed responsive user interfaces using HTML, CSS, and JavaScript.</li>
                        <li>Content Management: Managed website content using WordPress, including plugin configuration like ‘W3 Total Cache.’</li>
                        <li>Code Optimization: Contributed to code reviews and optimized website performance.</li>
                        <li>Back-End Integration: Collaborated with back-end developers to integrate APIs.</li>
                    </ul>
                    <p><span className="coloredText"><strong>Skills Developed:</strong></span></p>
                    <ul>
                        <li>Proficiency in HTML, CSS, JavaScript, and WordPress.</li>
                        <li>Understanding of back-end technologies and API integration.</li>
                        <li>Experience in code optimization and performance enhancement.</li>
                        <li>Strong teamwork and communication skills.</li>
                    </ul>
                </div>
                
                <div className="exp_cont">
                    <h3 className="expHeading"><span className='num'>2</span> Web Developer Intern at Zebaq Pvt. Ltd.</h3>
                    <p>Duration: 3 months (Free Internship)</p>
                    <p>At Bhubaneswar, Odisha. <br />Feb 2024 – May 2024</p>
                    <p><span className="coloredText"><strong>Role &amp; Responsibilities:</strong></span></p>
                    <ul>
                        <li>Front-End Development: Designed and developed responsive user interfaces using HTML, CSS, and JavaScript.</li>
                        <li>Back-End Integration: Collaborated with back-end developers to integrate APIs.</li>
                        <li>Code Optimization: Contributed to code reviews and optimized website performance.</li>
                        <li>Content Management: Managed website content using WordPress, including plugin configuration like ‘W3 Total Cache.’</li>
                    </ul>
                    <p><span className="coloredText"><strong>Skills Developed:</strong></span></p>
                    <ul>
                        <li>Proficiency in HTML, CSS, JavaScript, and WordPress.</li>
                        <li>Understanding of back-end technologies and API integration.</li>
                        <li>Experience in code optimization and performance enhancement.</li>
                        <li>Strong teamwork and communication skills.</li>
                    </ul>

                </div>
            </div>
            <div className='exp_cont_row'>
                <div className="exp_cont">
                    <h3 className="expHeading"><span className='num'>3</span> Computer Teacher</h3>
                    <p>School: Utkal mani Vidya Mandir</p>
                    <p>At Bhubaneswar, Odisha. <br />Dec 2021 – Dec 2023</p>
                    <p><span className="coloredText"><strong>Role &amp; Responsibilities:</strong></span></p>
                    <ul>
                        <li>Instructing student in various computer science concepts and practical applications.</li>
                    </ul>
                </div>
                <div className="exp_cont">
                    <h3 className="expHeading"><span className='num'>4</span> System Analyst</h3>
                    <p>Foiwe Info Global Solutions</p>
                    <p>At Bangaluru. <br />Feb 2019 – March 2021</p>
                    <p><span className="coloredText"><strong>Role &amp; Responsibilities:</strong></span></p>
                    <ul>
                        <li>Verifying and qualifying data while preventing duplicity, and performing ETL operations to provide useful results by combining data from multiple sources.</li>
                    </ul>
                </div>
            </div>
        </div>
    );

}
export default Experience