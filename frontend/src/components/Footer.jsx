import React from 'react';
import './Footer.css'; // Optional: Add styling here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__contact">
          <h3 className="footer__title">HealthBridge</h3>
          <p>Chhatrapati SambhajiNagar ,Maharashtra</p>
          <p>431001</p>
          <p>Phone: +91 9876543210</p>
          <p>Email: info@HealthBridge.com</p>
        </div>

        <div className="footer__links">
          <h4 className="footer__subtitle">Departments</h4>
          <ul>
            <li>Oncology</li>
            <li>Orthopedic</li>
            <li>Neurology</li>
            <li>Cardiology</li>
          </ul>
        </div>

        <div className="footer__links">
          <h4 className="footer__subtitle">Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Our Pricing</li>
            <li>Our Doctors</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer__app">
          <h4 className="footer__subtitle">Download the App</h4>
          <p>Get the link to download the app:</p>
          <div className="footer__input-group">
            <input type="email" placeholder="Enter your email" />
            <button>Send Link</button>
          </div>
          <div className="footer__stores">
            {/* <img
              src="/path/to/google-play.png"
              alt="Google Play Store"
              className="footer__store-logo"
            /> */}
            <i class="fa-brands fa-google-play"></i>
            {/* <img
              src="/path/to/app-store.png"
              alt="Apple App Store"
              className="footer__store-logo"
            /> */}
            <i class="fa-brands fa-apple"></i>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© HealthBridge. All Rights Reserved.</p>
        <p>Design by Harshal Kolhe</p>
      </div>
    </footer>
  );
};

export default Footer;
