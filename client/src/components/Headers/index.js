import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function 
**/





const Header = (props) => {
  
  
  let monthNumber = (new Date().getMonth());
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let monthName = monthNames[monthNumber];

  let dayNames = ["Sunday","Monay","Tuesday","Wednesday","Thursay","Friday","Saturday"];
  let dayNumber = (new Date().getDay());
  let dayName = dayNames[dayNumber];

  let date = new Date().getDate();
  let year = new Date().getFullYear();

  const postUrl = `www.facebook.com`;

    return (
      <div className="header">
        <div>
          <p>{dayName}, {monthName}  {date}, {year}</p>
        </div>
        <div>
        <a href={`https://www.facebook.com/sharer.php?u=${postUrl}`}><i className="fab fa-facebook-f"></i></a>
        <a href={`https://api.whatsapp.com/send?text=[post-title]${postUrl}`}><i className="fab fa-twitter"></i></a>
        <NavLink to="#"><i className="fab fa-google-plus-g"></i></NavLink>
        <NavLink to="#"><i className="fab fa-instagram"></i></NavLink>
        <NavLink to="#"><i className="fab fa-pinterest-p"></i></NavLink>
        <NavLink to="#"><i className="fab fa-youtube"></i></NavLink>
        </div>
      </div>
    );
  }
export default Header;
