import React from "react";
import "./MedicalSpecialists.css";

const specialists = [
  {
    name: "Dr. Ahmad Khan",
    specialty: "Neurologist",
    image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww", // Replace with actual image URL
  },
  {
    name: "Dr. Heena Sachdeva",
    specialty: "Orthopedics",
    image: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
  },
  {
    name: "Dr. Ankur Sharma",
    specialty: "Medicine",
    image: "https://plus.unsplash.com/premium_photo-1681967000776-9c58dcb6526e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
  },
  {
    name: "Dr. Ahmad Khan",
    specialty: "Neurologist",
    image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww", // Replace with actual image URL
  },
  {
    name: "Dr. Heena Sachdeva",
    specialty: "Orthopedics",
    image: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
  },
  {
    name: "Dr. Ankur Sharma",
    specialty: "Medicine",
    image: "https://plus.unsplash.com/premium_photo-1681967000776-9c58dcb6526e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
  },
  {
    name: "Dr. Ahmad Khan",
    specialty: "Neurologist",
    image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww", // Replace with actual image URL
  },
  {
    name: "Dr. Heena Sachdeva",
    specialty: "Orthopedics",
    image: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
  },
  {
    name: "Dr. Ankur Sharma",
    specialty: "Medicine",
    image: "https://plus.unsplash.com/premium_photo-1681967000776-9c58dcb6526e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URL
  },
  // Add more specialists as needed
];

const MedicalSpecialists = () => {
  return (
    <div className="medical-specialists-container">
      <h2 className="heading">Our Medical Specialist</h2>
      <div className="specialists-grid">
        {specialists.map((specialist, index) => (
          <div key={index} className="specialist-card">
            <div className="image-container">
              <img src={specialist.image} alt={specialist.name} />
            </div>
            <div className="specialist-info">
              <h3 className="specialist-name">{specialist.name}</h3>
              <p className="specialist-specialty">{specialist.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalSpecialists;
