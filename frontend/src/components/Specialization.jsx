import React from 'react';
import './Specialization.css'; // You can style the component with a CSS file

const SpecializationCard = ({ icon, title }) => (
  <div className="specialization-card">
    <div className="icon">{icon}</div>
    <div className="title">{title}</div>
  </div>
);

const Specialization = () => {
  const specializations = [
    { icon: '🏥', title: 'Dentistry' },
    { icon: '🩺', title: 'Primary Care' },
    { icon: '❤️', title: 'Cardiology' },
    { icon: '📟', title: 'MRI Resonance' },
    { icon: '🧪', title: 'Blood Test' },
    { icon: '🛡️', title: 'Psicologist' }, // Adjusted spelling to match the image
    { icon: '🔬', title: 'Laboratory' },
    { icon: '🦴', title: 'X-Ray' },
  ];

  return (
    <div className="specialization-container">
      <h2 className="heading">Find By Specialisation</h2>
      <div className="specialization-grid">
        {specializations.map((specialization, index) => (
          <SpecializationCard
            key={index}
            icon={specialization.icon}
            title={specialization.title}
          />
        ))}
      </div>
      <button className="view-all-button">View All</button>
    </div>
  );
};

export default Specialization;
