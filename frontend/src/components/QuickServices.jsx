// QuickServices.jsx
import React from "react";
import "./QuickServices.css";

const QuickServices = () => {
  const services = [
    {
      id: 1,
      title: "Doctors",
      icon: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww",
      description: "Consult with expert doctors anytime.",
    },
    {
      id: 2,
      title: "Labs",
      icon: "https://plus.unsplash.com/premium_photo-1663011253265-9b5cb2b5ac92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFifGVufDB8fDB8fHww",
      description: "Get lab tests done at your doorstep.",
    },
    {
      id: 3,
      title: "Hospitals",
      icon: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
      description: "Find nearby hospitals with ease.",
    },
    {
      id: 4,
      title: "Medicine Order",
      icon: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D",
      description: "Order medicines online conveniently.",
    },
    {
      id: 5,
      title: "Ambulance",
      icon: "https://images.unsplash.com/photo-1588543385566-413e13a51a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1idWxhbmNlfGVufDB8fDB8fHww",
      description: "Book an ambulance for emergencies.",
    },
    
  ];

  return (
    <section className="quick-services">
      <div className="container">
        <h2 className="section-title">You may be looking for</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
