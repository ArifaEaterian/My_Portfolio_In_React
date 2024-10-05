/* eslint-disable no-unused-vars */
import React from 'react';

//css
import "./ScrollToTop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



const ScrollToTop = () => {


const ScrollToTop = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
}

    return(
        <div className='scroll-to-top'>


            <div onClick={ScrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />

            </div>
        </div>
    );
}
export default ScrollToTop;