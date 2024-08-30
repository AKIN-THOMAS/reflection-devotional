import React from "react";

const Introduction = ({ title, devotionalText, reference, text, author }) => (
  <div className="intro">
    <div className="scripture-text">
      <h3>{reference}</h3>
      <p>{text}</p>
    </div>
    <div className="devotional-content">
      <h2>{title}</h2>
      <p>{devotionalText}</p>
      <p className="author">Written by {author}</p>
    </div>
  </div>
);

export default Introduction;
