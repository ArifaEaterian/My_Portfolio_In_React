/* eslint-disable no-unused-vars */
import React from 'react';

// css
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    return (

        <div className="centeredSection" id="skills">
            <h2 className="intro centeredText ">Skills</h2>
            <div className='skillSet'>
                <div className='skillCol'>
                    <FontAwesomeIcon icon={faHtml5} />
                    <h4>HTML5</h4>
                    <p>Skilled in HTML5 with expertise in semantic elements and multimedia features.</p>
                </div>
                <div className='skillCol'>
                    <FontAwesomeIcon icon={faCss3} />
                    <h4>CSS3</h4>
                    <p>Proficient in CSS, including responsive design, Flexbox, and Grid layout techniques.</p>
                </div>
                <div className='skillCol'>
                    <FontAwesomeIcon icon={faJs} />
                    <h4>JAVA SCRIPT</h4>
                    <p>Experienced in JavaScript, focusing on ES6+, DOM manipulation, and asynchronous programming.</p>
                </div>
            </div>

            <div className='skillSet'>
                <div className='skillCol'>
                    <FontAwesomeIcon icon={faReact} />
                    <h4>REACT JS</h4>
                    <p>Skilled in React.js, specializing in component-based architecture, state management, and hooks.</p>
                </div>
                <div className='skillCol'>
                    <FontAwesomeIcon icon={faNodeJs} />
                    <h4>NODE JS</h4>
                    <p>Proficient in Node.js, with expertise in building scalable server-side applications and RESTful APIs.</p>
                </div>
                <div className='skillCol'>
                    <FontAwesomeIcon icon={faGit} />
                    <h4>GIT</h4>
                    <p>Experienced with Git, including version control, branching strategies, and collaborative workflows.</p>
                </div>
            </div>
        </div>
    );
};
export default Skills;