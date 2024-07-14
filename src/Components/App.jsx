// src/App.js
import React, { useState, useEffect } from 'react';
import Feedback from './Feedback.jsx';
import Options from './Options.jsx';
import Description from './Description.jsx';



const App = () => {
  const initialFeedback = JSON.parse(localStorage.getItem('feedback')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(initialFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description/>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};


export default App;
