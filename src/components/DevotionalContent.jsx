import React from 'react';

const DevotionalContent = ({ title, devotionalText, reflection, prayer, affirmation, author }) => (
  <div className="devotional-content">
    <h2>{title}</h2>
    <p>{devotionalText}</p>
    <h4>Reflection:</h4>
    <p>{reflection}</p>
    <h4>Prayer:</h4>
    <p>{prayer}</p>
    <h4>Affirmation:</h4>
    <p>{affirmation}</p>
    <p className="author">Written by {author}</p>
  </div>
);

export default DevotionalContent;