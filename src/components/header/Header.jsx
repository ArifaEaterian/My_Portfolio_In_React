// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faTimes  } from '@fortawesome/free-solid-svg-icons';

//import css
import "./Header.css";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
            setIsOpen(!isOpen);
    }

    return (
        <>
            <header>
                <h1 className="header">My Portfolio</h1>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#myprojects">My Projects</a></li>
                        <li><a href="#certification">Certification</a></li>
                        <li><a href="#contact">Contact me</a></li>
                    </ul>

                </nav>
                <div className='resTogBtn'>
                        <button className='menu-toggle' onClick={toggleMenu}>
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                        </button>
                </div>
            </header>
        </>

    );

}
export default Header;