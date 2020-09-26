import React from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../logo';
import Navbar from '../Navbar';
/**
* @author
* @function 
**/

const Hero = (props) => {
  return(
    <Card>
        <Logo></Logo>
        <Navbar></Navbar>
    </Card>
   )

 }

export default Hero; 