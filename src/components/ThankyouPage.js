import React from "react";

const ThankYouPage = ({ feedback, onReset }) => {

    const getMessage = (feedback) => {
    switch (feedback) {
      case "Excellent":
        return "We’re thrilled to know you had an excellent experience!";
      case "Good":
        return "Glad you had a good experience. We’ll keep improving!";
      case "Average":
        return "Thanks for your honest feedback. We’ll work on getting better.";
      case "Poor":
        return "Sorry we fell short this time. Your feedback helps us improve.";
      default:
        return "Thank you for sharing your feedback!";
    }
  };

  return (
    <div className="thankyou-container">
      <h2>Thank you for your feedback!</h2>
      <p>
        You selected: <strong>{feedback}</strong>
      </p>
      <p>{getMessage(feedback)}</p>
      <button onClick={onReset} className="back-button">
        Go Back
      </button>
    </div>
  );
};

export default ThankYouPage;
