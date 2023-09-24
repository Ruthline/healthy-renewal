import React from 'react'
import Banner from '../header2/Banner.jpg';

const Header2 = () => {
  return (
    <header>
        <img 
         id="imgbanner" 
         src={Banner} 
         title="Healthy Renewal" 
         alt="Healthy Renewal"
         />    
    </header>
  )
};

export default Header2;
