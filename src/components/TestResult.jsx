import React, { useState } from "react";
import { niveaux } from "../data/vocabulary"; // Ensure niveau1 is correctly defined here
import "./TestNiveau.css";

const TestNiveau = () => {
  const [currentNiveau, setCurrentNiveau] = useState("niveau1"); // Tracks current niveau
  const [results, setResults] = useState({}); // Tracks test results for words
  const [feedback, setFeedback] = useState(""); // General feedback
  const [recognizedWord, setRecognizedWord] = useState(""); // Last recognized word
  const [niveauComplete, setNiveauComplete] = useState(false); // Tracks if niveau is complete
  const [passRate, setPassRate] = useState(null); // Stores the pass rate for the niveau

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
    // Calculate pass rate
    const wordsTested = Object.keys(results);
    const correctAnswers = wordsTested.filter((word) => results[word]).length;
    const rate = (correctAnswers / vocabulary.length) * 100;
    setPassRate(rate);

    if (rate >= 80) {
      setNiveauComplete(true);
      alert("You passed this niveau! Moving to the next one.");
      if (currentNiveau !== "niveau6") {
        const nextNiveau = `niveau${parseInt(currentNiveau.slice(-1)) + 1}`;
        setCurrentNiveau(nextNiveau);
        setResults({});
        setFeedback("");
        setRecognizedWord("");
        setPassRate(null);
        setNiveauComplete(false);
      } else {
        alert("Congratulations! You completed all the niveaux!");
      }
    } else {
      setNiveauComplete(false);
      alert(
        `You did not pass. Pass Rate: ${rate.toFixed(
          2
        )}%. Please repeat the niveau.`
      );
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
              setPassRate(null);
              setNiveauComplete(false);
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
          <p>
            Pass Rate:{" "}
            {passRate !== null ? `${passRate.toFixed(2)}%` : "Calculating..."}
          </p>
          {niveauComplete ? (
            <button className="next-button" onClick={handleNiveauComplete}>
              Next Niveau
            </button>
          ) : (
            <button
              className="repeat-button"
              onClick={() => {
                setResults({});
                setFeedback("");
                setRecognizedWord("");
                setPassRate(null);
              }}
            >
              Repeat Niveau
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TestNiveau;
