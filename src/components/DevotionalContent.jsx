import React from "react";

const DevotionalContent = ({
  title,
  devotionalText1,
  devotionalText2,
  devotionalText3,
  devotionalText4,
  devotionalText5,
  devotionalText6,
  devotionalText7,
  devotionalText8,
  devotionalText9,
  devotionalText10,
  devotionalText11,
  devotionalText12,
  reflection,
  prayer,
  affirmation,
  author,
}) => (
  <div className="devotional-content">
    <h2>{title}</h2>
    {
      devotionalText1 && (
        <p>{devotionalText1}</p>
      )
    }
    {
      devotionalText2 && (
        <p>{devotionalText2}</p>
      )
    }
    {
      devotionalText3 && (
        <p>{devotionalText3}</p>
      )
    }
    {
      devotionalText4 && (
        <p>{devotionalText4}</p>
      )
    }
    {
      devotionalText5 && (
        <p>{devotionalText5}</p>
      )
    }
    {
      devotionalText6 && (
        <p>{devotionalText6}</p>
      )
    }
    {
      devotionalText7 && (
        <p>{devotionalText7}</p>
      )
    }
    {
      devotionalText8 && (
        <p>{devotionalText8}</p>
      )
    }
    {
      devotionalText9 && (
        <p>{devotionalText9}</p>
      )
    }
    {
      devotionalText10 && (
        <p>{devotionalText10}</p>
      )
    }
    {
      devotionalText11 && (
        <p>{devotionalText11}</p>
      )
    }
    {
      devotionalText12 && (
        <p>{devotionalText12}</p>
      )
    }

    {reflection && (
      <>
        <h4>Reflection:</h4>
        <p>{reflection}</p>
      </>
    )}

    {prayer && (
      <>
        <h4>Prayer:</h4>
        <p>{prayer}</p>
      </>
    )}

    {affirmation && (
      <>
        <h4>Affirmation:</h4>
        <p>{affirmation}</p>
      </>
    )}

    <p className="author">Written by {author}</p>
  </div>
);

export default DevotionalContent;
