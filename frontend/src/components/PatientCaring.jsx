import React from "react";
import "./PatientCaring.css";

const PatientCaring = () => {
  return (
    <div className="patient-caring-container">
      <div className="content">
        <h4 className="subtitle">HELPING PATIENTS FROM AROUND THE GLOBE!!</h4>
        <h2 className="title">
          Patient <span className="highlight">Caring</span>
        </h2>
        <p className="description">
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <ul className="features-list">
          <li>Stay Updated About Your Health</li>
          <li>Check Your Results Online</li>
          <li>Manage Your Appointments</li>
        </ul>
      </div>
      <div className="images">
        <div className="top-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1661769167673-cfdb37f156d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image URL
            alt="Doctors consulting"
          />
          <div className="free-consultation">
            <span role="img" aria-label="Phone">
              📞
            </span>{" "}
            Free Consultation
            <p>Consultation with the best</p>
          </div>
        </div>
        <div className="bottom-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1664302336737-37fce6daca3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image URL
            alt="Doctor with patient"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;
