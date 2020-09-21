import React from 'react';
import '../styles/Hero.css';
import Card from './Card.js';
import Logo from './Logo.js';
import Navbar from './Navbar.js';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
      <Card>
        <div style={{ padding: '50px 0' }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
   )

 }

export default Hero