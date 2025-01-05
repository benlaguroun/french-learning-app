import React, { useState } from "react";
import { niveaux } from "../data/vocabulary"; // Make sure `niveaux` contains all your vocabulary data
import "./TestNiveau.css";

const TestNiveau = () => {
  const [currentNiveau, setCurrentNiveau] = useState("niveau1"); // Tracks current niveau
  const [results, setResults] = useState({}); // Tracks test results for words
  const [feedback, setFeedback] = useState(""); // General feedback
  const [recognizedWord, setRecognizedWord] = useState(""); // Last recognized word

  const vocabulary = niveaux[currentNiveau]; // Get vocabulary for current niveau

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
        setResults((prevResults) => ({
          ...prevResults,
          [expectedWord]: true,
        }));
        setFeedback("Correct! 🎉");
      } else {
        setResults((prevResults) => ({
          ...prevResults,
          [expectedWord]: false,
        }));
        setFeedback(`Incorrect. You said: "${spokenWord}". Try again.`);
      }
    };
    recognition.onerror = () => setFeedback("Error occurred. Try again.");
    recognition.start();
  };

  const handleNiveauComplete = () => {
    // Check if the user passed the niveau
    const wordsTested = Object.keys(results);
    const correctAnswers = wordsTested.filter((word) => results[word]).length;
    const passRate = (correctAnswers / vocabulary.length) * 100;

    if (passRate >= 80) {
      if (currentNiveau !== "niveau6") {
        alert("You passed this niveau! Moving to the next one.");
        const nextNiveau = `niveau${parseInt(currentNiveau.slice(-1)) + 1}`;
        setCurrentNiveau(nextNiveau);
        setResults({});
        setFeedback("");
        setRecognizedWord("");
      } else {
        alert("Congratulations! You completed all the niveaux!");
      }
    } else {
      alert("You did not pass. Please repeat the level.");
      setResults({});
      setFeedback("");
      setRecognizedWord("");
    }
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
            onClick={() => {
              setCurrentNiveau(niveau);
              setResults({});
              setFeedback("");
              setRecognizedWord("");
            }}
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
              disabled={results[word] !== undefined}
            >
              Test Voice
            </button>

            {/* Show results under the card */}
            {results[word] !== undefined && (
              <p className={`test-result ${results[word] ? "pass" : "fail"}`}>
                {results[word] ? "Passed ✅" : "Failed ❌"}
              </p>
            )}

            {/* Repeat button for incorrect results */}
            {results[word] === false && (
              <button
                className="repeat-button"
                onClick={() => startSpeechRecognition(word)}
              >
                Repeat Test
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="feedback">
        {recognizedWord && <p>You said: "{recognizedWord}"</p>}
        <p>{feedback}</p>
      </div>

      {Object.keys(results).length === vocabulary.length && (
        <div className="niveau-summary">
          <button className="complete-button" onClick={handleNiveauComplete}>
            Complete Niveau
          </button>
        </div>
      )}
    </div>
  );
};

export default TestNiveau;
