import React, { useState } from "react";
import { niveaux } from "../data/vocabulary";
import "./TestNiveau.css";

const TestNiveau = () => {
  const [currentNiveau, setCurrentNiveau] = useState("niveau1");
  const [recognizedWord, setRecognizedWord] = useState("");
  const [feedback, setFeedback] = useState("");

  const vocabulary = niveaux[currentNiveau];

  const startSpeechRecognition = (expectedWord) => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "fr-FR";

    recognition.onstart = () => setFeedback("Listening...");
    recognition.onspeechend = () => recognition.stop();
    recognition.onresult = (event) => {
      const spokenWord = event.results[0][0].transcript.toLowerCase();
      setRecognizedWord(spokenWord);

      if (spokenWord === expectedWord.toLowerCase()) {
        setFeedback("Correct! 🎉");
      } else {
        setFeedback(`Incorrect. You said: "${spokenWord}". Try again.`);
      }
    };
    recognition.onerror = () => setFeedback("Error occurred. Try again.");
    recognition.start();
  };

  return (
    <div className="test-niveau">
      <h2>Test Your Vocabulary - {currentNiveau.toUpperCase()}</h2>
      <div className="niveau-selector">
        {Object.keys(niveaux).map((niveau) => (
          <button
            key={niveau}
            className={`niveau-button ${
              niveau === currentNiveau ? "active" : ""
            }`}
            onClick={() => setCurrentNiveau(niveau)}
          >
            {niveau.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="cards">
        {vocabulary.map((word, index) => (
          <div key={index} className="card">
            <h3>{word}</h3>
            <button
              className="test-button"
              onClick={() => startSpeechRecognition(word)}
            >
              Test Voice
            </button>
          </div>
        ))}
      </div>

      <div className="feedback">
        {recognizedWord && <p>You said: "{recognizedWord}"</p>}
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default TestNiveau;
