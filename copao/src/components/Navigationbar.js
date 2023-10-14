import React, { useState } from 'react';
import '../css/Navigationbar.css';

function Navigationbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><a className="navbar-logo-link" href="/admindashboard">COPAO</a></div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <ul>
        <li><a href="/">Products</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/contact">Contact us</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/Aboutus">About us</a></li>
          <li><a href="/">Contact us</a></li>
          <li><a href="/">Our clients</a></li>
          <li><a href="/">Carrer</a></li>
          <li><a href="/home">Home</a></li>
        </ul>
      </div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  )
}

export default Navigationbar
