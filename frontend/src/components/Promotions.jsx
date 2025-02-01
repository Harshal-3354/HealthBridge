// Promotions.jsx
import React from "react";
import "./Promotions.css";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "Get ₹100 OFF",
      description: "On your first online doctor consultation.",
      image: "https://plus.unsplash.com/premium_photo-1661769167673-cfdb37f156d8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Flat 30% OFF",
      description: "On diagnostic lab tests. Book now!",
      image: "https://plus.unsplash.com/premium_photo-1723044801510-c6a6c2087d85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGxhYiUyMHRlc3RzfGVufDB8fDB8fHww",
    },
  ];

  return (
    <section className="promotions">
      <div className="container">
        <div className="promotions-grid">
          {promotions.map((promo) => (
            <div key={promo.id} className="promotion-card">
              <img src={promo.image} alt={promo.title} className="promotion-image" />
              <div className="promotion-content">
                <h3>{promo.title}</h3>
                <p>{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
