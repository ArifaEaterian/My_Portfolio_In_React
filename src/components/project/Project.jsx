/* eslint-disable no-unused-vars */
import React from 'react'

// css
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faExpand } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
    return (
        <>
        <div className='centeredSection'>
            <h2 className="intro centeredText " id='myprojects'>My Projects</h2>
            <div className='projRow'>
                <div className='projDetail'>

                    <h4 className="projTitle "><a href='https://github.com/ArifaEaterian/LearningFullStackWebDev/'><FontAwesomeIcon icon={faCaretRight} /> Random Password Generator</a></h4>
                    <p>Project Description:</p>
                    <p>Created a Random Password Generator using ReactJS. This app lets users generate secure passwords based on their chosen criteria, such as length and types of characters (uppercase, lowercase, numbers, special characters). It demonstrates skills in building interactive web applications with ReactJS.</p>

                    <div className='inDetailed'>
                        <div className="inDetail_con">
                            <p>Key Features:</p>

                            <ul>
                                <li>Customize password length and character types</li>
                                <li>Generate passwords instantly</li>
                                <li>Easy-to-use interface</li>
                            </ul>

                        </div>
                        <div className="inDetail_con">
                            <p>Technologies Used:</p>
                            <ul>
                                <li>ReactJS</li>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                            </ul>

                        </div>
                    </div>
                    <a href="https://github.com/ArifaEaterian/LearningFullStackWebDev/" target="_blank" className="socialLink"><FontAwesomeIcon icon={faExpand} /> View project </a>
                </div>

                <div className='projImg'>
                    <img src='../../../public/media/img/password-generator.jpg' alt='projectImg' />
                </div>
            </div>

            <div className='projRow'>
                <div className='projImg'>
                    <img src='../../../public/media/img/eaterian-wp.png' alt='projectImg' />
                </div>

                <div className='projDetail'>

                    <h4 className="projTitle "><a href='https://github.com/ArifaEaterian/LearningFullStackWebDev/'><FontAwesomeIcon icon={faCaretRight} /> Customizable Product WooCommerce Website</a></h4>
                    <p>Project Description:</p>
                    <p>Developed a WooCommerce website in WordPress where customers can customize product sizes according to their requirements. This project highlights the integration of WooCommerce with custom product options to enhance user experience and meet specific customer needs.</p>

                    <div className='inDetailed'>
                        <div className="inDetail_con">
                            <p>Key Features:</p>

                            <ul>
                                <li>Customizable product sizes</li>
                                <li>User-friendly shopping experience</li>
                                <li>Seamless WooCommerce integration</li>
                            </ul>

                        </div>
                        <div className="inDetail_con">
                            <p>Technologies Used:</p>
                            <ul>
                                <li>WordPress</li>
                                <li>WooCommerce</li>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>PHP</li>

                            </ul>

                        </div>
                    </div>
                    <a href="https://github.com/ArifaEaterian/LearningFullStackWebDev/" target="_blank" className="socialLink"><FontAwesomeIcon icon={faExpand} /> View project </a>
                </div>


            </div>
        
        </div>
        <section className='pGallery'>
        <div className="projGall">
            <img decoding="async" src="../../../public/media/img/Food ordering.png" alt="" />
            <img decoding="async" src="../../../public/media/img/bike project.png" alt="" />
            <img decoding="async" src="../../../public/media/img/NFT landing page.png" alt="" />
            <img decoding="async" src="../../../public/media/img/pixlab project.png " alt="" />
            <img decoding="async" src="../../../public/media/img/hospital project.png" alt="" />
            <img decoding="async" src="../../../public/media/img/e-guru.jpg" alt="" />
        </div>
        <div className='moreBtn centeredText'>
        <a href="https://github.com/ArifaEaterian/LearningFullStackWebDev/" target="_blank" className="socialLink"><FontAwesomeIcon icon={faExpand} /> More Projects </a>
        </div>
    </section>
    </>
    );
}
export default Project;