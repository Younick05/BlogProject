import React from 'react';
import './style.css';
/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className='logoContainer'>
      <div className='logo'>
       <img src={require('../../companyLogo/Yug-express-logo.jpg')} alt='yugexpress'></img>
      </div>
      <div className='adContainer'>
        <p>advetisment</p>
      </div>
    </div>
   )

 }

export default Logo