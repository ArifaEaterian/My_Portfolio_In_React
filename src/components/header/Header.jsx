// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faTimes  } from '@fortawesome/free-solid-svg-icons';

//import css
import "./Header.css";
import { Link } from 'react-scroll';

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
                        <li><Link to="about" scroll="true" duration={500}>About</Link></li>
                        <li><Link to="skills" scroll="true" duration={500}>Skills</Link></li>
                        <li><Link to="experience" scroll="true" duration={500}>Experience</Link></li>
                        <li><Link to="myprojects" scroll="true" duration={500}>My Projects</Link></li>
                        <li><Link to="certification" scroll="true" duration={500}>Certification</Link></li>
                        <li><Link to="contact" scroll="true" duration={500}>Contact me</Link></li>
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