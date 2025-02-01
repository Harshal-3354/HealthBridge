// HeaderNavbar.jsx
import React from "react";
import "./HeaderNavbar.css"; // Add custom styles here if needed

const HeaderNavbar = () => {
  return (
    <header className="header-navbar">
      <nav className="container-fluid">
        <ul>
          <li><strong> <i className="fa-solid fa-heart-pulse"></i>HealthBridge</strong></li>
        </ul>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login" role="button" className="secondary">Login</a></li>
          <li><a href="#signup" role="button" className="primary">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavbar;
