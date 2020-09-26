import React from 'react';
import './style.css';
import Card from '../UI/Card';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <div>
        <Card>
            <div className='footerContainer'>
                <div className='footerLogo'>
                    <img src={require('../../companyLogo/Yug-express-logo.jpg')} alt='yugexpress'></img>
                </div>
                <div className="SocialMediaLogo">
                    <NavLink to="#"><i class="fab fa-facebook-f"></i></NavLink>
                    <NavLink to="#"><i class="fab fa-twitter"></i></NavLink>
                    <NavLink to="#"><i class="fab fa-google-plus-g"></i></NavLink>
                    <NavLink to="#"><i class="fab fa-instagram"></i></NavLink>
                    <NavLink to="#"><i class="fab fa-pinterest-p"></i></NavLink>
                    <NavLink to="#"><i class="fab fa-youtube"></i></NavLink>
                </div>  
            </div>    
        </Card>
    </div>
   )

 }

export default Footer