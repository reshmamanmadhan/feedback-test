// src/App.js
import React,{useState} from "react";
import FeedbackPage from "./components/FeedbackPage"; 
import ThankYouPage from "./components/ThankyouPage"; 
import "./App.css"; 

function App() {
   const [feedback, setFeedback] = useState("");

    const handleFeedback = (selectedFeedback) => {
    setFeedback(selectedFeedback);
  };

  const handleReset = () => {
    setFeedback("");
  };
  return (
    <div>
      {!feedback ? (
        <FeedbackPage onFeedback={handleFeedback} />
      ) : (
        <ThankYouPage feedback={feedback} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
