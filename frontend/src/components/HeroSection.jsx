// HeroSection.jsx
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container grid">
        {/* Left Content */}
        <div className="hero-content">
          <h1>Skip the travel! Take Online <span>Doctor Consultation</span></h1>
          <p>
            Connect instantly with a 24/7 specialist or choose a scheduled date for your video consultation.
          </p>
          <div className="hero-buttons">
            <button className="primary">Create an Account</button>
            <button className="secondary">Search</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Doctor Consultation"
          />
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar container">
        <input type="text" placeholder="Search doctor, specialty, hospital..." />
        <select>
          <option value="specialty">Specialty</option>
          <option value="hospital">Hospital</option>
          <option value="location">Location</option>
        </select>
        <button className="primary">Search</button>
      </div>
    </section>
  );
};

export default HeroSection;
