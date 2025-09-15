import React from "react";

const FeedbackPage = ({ onFeedback }) => {
  return (
    <div className="feedback-container">
      <h2>How was your experience?</h2>
      <div className="smiley-vertical">
        <button onClick={() => onFeedback("Excellent")} className="smiley">
          😀 <br /> Excellent
        </button>
        <button onClick={() => onFeedback("Good")} className="smiley">
          🙂 <br /> Good
        </button>
        <button onClick={() => onFeedback("Average")} className="smiley">
          😐 <br /> Average
        </button>
        <button onClick={() => onFeedback("Poor")} className="smiley">
          😞 <br /> Poor
        </button>
      </div>
    </div>
  );
};

export default FeedbackPage;
