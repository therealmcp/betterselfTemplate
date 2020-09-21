import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  // const [scrolled, setScrolled] = React.useState(false);

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 200) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  // })

  // let navbarClasses = ['navbar'];

  // if (scrolled) {
  //   navbarClasses.push('scrolled');
  // }

  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert('Searched');
  }

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search ? 'searchInput active' : 'searchInput';

  return(
    <div>
      <div className="logo">
          Logo Div
      </div>

      <nav className="navigation">
          {/* your navigation */}
      </nav>
      <div className="navbar">
        <ul className="navbarMenu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
        </ul>
        <div className="search">
          <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="Search" />
            <img onClick={openSearch} className="searchIcon" src={require('../assets/icons/search.png')} alt="Search" />
          </form>
        </div>
      </div>
    </div>
   )

 }

export default Navbar