/* eslint-disable no-unused-vars */
import React from 'react';

import './ProgressBar.css';

const ProgressBar = (progress) =>{

    const progressContainer = {
        height: '15px',
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 20
      }
      const percentBar = {
        width: `${progress}%`,
        backgroundColor: 'purple',
        height: '100%',
        borderRadius: 20
      }
      


    return(

        <div style={progressContainer}>
            <div style={percentBar}></div>
        </div>
    );
}
export default ProgressBar