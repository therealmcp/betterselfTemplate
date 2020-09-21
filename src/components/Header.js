import React from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
      <nav className="headerMenu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
      <div>
        Social Media Links
      </div>
    </header>
   )

 }

export default Header