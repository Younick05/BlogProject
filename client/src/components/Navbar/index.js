import React, {useState} from 'react';
// eslint-disable-next-line
import {NavLink} from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/


const Navbar = (props) => {

    const [search, setSearch]= useState(false);

  
    const submitSearch=(e)=>{
      e.preventDefault();
      alert('searched');
    }

    const openSearch =()=>{
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

  return(
    <div className='navbar'>
        <ul className='navbarMenu'>
            
            <li><NavLink to='/'><i class="fas fa-home"></i></NavLink></li>
            <li><NavLink to='/rashtriya'>राष्ट्रीय</NavLink></li>
            <li><NavLink to='/antrashtriya'>अंतराष्ट्रीय</NavLink></li>
            <li><NavLink to='/gwalior'>ग्वालियर</NavLink></li> 
            <li><NavLink to='/mpchattisgarh'>म.प्र. / छत्तीसगढ़ </NavLink></li> 
            <li><NavLink to='/rajnitik'>राजनीतिक</NavLink></li> 
            <li><NavLink to='/viral'>वायरल</NavLink></li> 
            <li><NavLink to='/health'>हेल्थ</NavLink></li> 
            <li><NavLink to='/sport'>स्पोर्ट</NavLink></li> 
            <li><NavLink to='/offer'>ऑफर</NavLink></li> 
            <li><NavLink to='/vigyapan'>विज्ञापन</NavLink></li> 

        </ul>
        <div className='search'>
            <form onSubmit={submitSearch}>
                <input type='text' className={searchClass} placeholder='Search'/>
                <img onClick={openSearch} className='searchIcon' src={require('../../assets/icons/search.png')} alt='search'/>
            </form>
        </div>
    </div>
   )

 }

export default Navbar