import React from 'react';
import './Statistics.css'; // Optional: Add styling here

const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      <h2 className="statistics__title">Our Families</h2>
      <p className="statistics__description">
        Caring for the health of you and your family. We work with you to
        develop individualized care plans, including managing chronic diseases.
      </p>
      <div className="statistics__grid">
        {stats.map((stat, index) => (
          <div className="statistics__card" key={index}>
            <h3 className="statistics__value">{stat.value}+</h3>
            <p className="statistics__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
