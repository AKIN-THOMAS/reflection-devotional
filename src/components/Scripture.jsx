import React from 'react';

const Scripture = ({ reference, text, image }) => (
  <div className="scripture-section">
    <div className="scripture-text">
      <h3>{reference}</h3>
      <p>{text}</p>
    </div>
    <div className="scripture-image">
      <img src={image} alt="Scripture Image" />
    </div>
  </div>
);

export default Scripture;
