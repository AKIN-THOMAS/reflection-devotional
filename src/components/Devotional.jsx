import React, { useState, useEffect } from "react";
import Introduction from "./Introduction";
import Scripture from "./Scripture";
import day6 from "../utils/day6.jpg";
import DevotionalContent from "./DevotionalContent";

const Devotional = () => {
  const [devotional, setDevotional] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setDate(formattedDate);
    console.log("Formatted Date:", formattedDate);

    fetch("/devotionals.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const devotionalForToday = data.devotionals[formattedDate];
        if (!devotionalForToday) {
          console.error(`No devotional found for date: ${formattedDate}`);
        }
        setDevotional(devotionalForToday);
      })
      .catch((error) => console.error("Error fetching devotionals:", error));
  }, []);

  if (!devotional) {
    return (
      <div className="firstpage">
        <Introduction
          title={"INTRODUCTION"}
          devotionalText={
            "Praise God! The third edition of the Reflection devotional is here and I am most excited that you are a partaker of this prepared blessing from Abba. The Reflection Devotional was birthed two years ago as a significant gift to humanity for my birth month and God in his infinite mercy has granted us the grace for continuity. I want to use this opportunity to say a big thank you to my friends who have partnered with me this year to make this dream a reality again. This devotional was written by 30 individuals who wrote as inspired by the Holy Spirit for your spiritual edification throughout the month of September. We appreciate God for this success and we say, to Him alone be all the glory. It has been our utmost prayer that as you use this devotional daily, you will have a closer walk with God and it will impact the remaining days of this year. Therefore,  we are fully assured that God has answered our prayers and you will be greatly blessed by this devotional. You can also forward your testimonies to reflectiondailydevotional@gmail.com for proper recording of the acts of God. As you behold Him daily, may you reflect His glory and show forth His beauty. Amen. Your Friend,"
          }
          reference={"2 Corinthians 3:18 NLT"}
          text={
            "“So all of us who have had that veil removed can see and reflect the glory of the Lord..."
          }
          author={"Aresiola Elizabeth."}
          image={day6}
        />
        <h1>Reflection Daily Devotional</h1>
        <p>Click on the button to view the Introduction</p>
      </div>
    );
  }

  return (
    <div className="devotional">
      <Introduction
        title={"INTRODUCTION"}
        devotionalText={
          "Praise God! The third edition of the Reflection devotional is here and I am most excited that you are a partaker of this prepared blessing from Abba. The Reflection Devotional was birthed two years ago as a significant gift to humanity for my birth month and God in his infinite mercy has granted us the grace for continuity. I want to use this opportunity to say a big thank you to my friends who have partnered with me this year to make this dream a reality again. This devotional was written by 30 individuals who wrote as inspired by the Holy Spirit for your spiritual edification throughout the month of September. We appreciate God for this success and we say, to Him alone be all the glory. It has been our utmost prayer that as you use this devotional daily, you will have a closer walk with God and it will impact the remaining days of this year. Therefore,  we are fully assured that God has answered our prayers and you will be greatly blessed by this devotional. You can also forward your testimonies to reflectiondailydevotional@gmail.com for proper recording of the acts of God. As you behold Him daily, may you reflect His glory and show forth His beauty. Amen. Your Friend,"
        }
        reference={"2 Corinthians 3:18 NLT"}
        text={
          "“So all of us who have had that veil removed can see and reflect the glory of the Lord..."
        }
        author={"Aresiola Elizabeth."}
        image={day6}
      />
      {devotional.scripture && (
        <Scripture
          reference={devotional.scripture.reference}
          text={devotional.scripture.text}
          image={devotional.image}
          day={devotional.day}
        />
      )}
      <DevotionalContent
        title={devotional.title}
        devotionalText={devotional.devotionalText}
        reflection={devotional.reflection}
        prayer={devotional.prayer}
        affirmation={devotional.affirmation}
        author={devotional.author}
      />
    </div>
  );
};

export default Devotional;
