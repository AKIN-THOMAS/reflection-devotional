import React from 'react';

const Scripture = ({ reference, text, image, day }) => (
  <div className="scripture-section">
    <div className="scripture-text">
      <h3>{reference}</h3>
      <p>{text}</p>
      <button>Day {day}</button>
    </div>
    <div className="scripture-image">
      <img src={image} alt="Scripture " />
    </div>
  </div>
);

export default Scripture;
