import React from 'react';


const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => (
  <div>
    <h2>Feedback Statistics</h2>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {totalFeedback}</p>
    <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
  </div>
);


export default Feedback;
