import React, { useState, useEffect, useCallback } from "react";
import { niveaux } from "../data/vocabulary";
import "./TestNiveau.css";

const TestNiveau = () => {
  const [currentNiveau, setCurrentNiveau] = useState("niveau1");
  const [results, setResults] = useState({});
  const [testState, setTestState] = useState({
    recognizedWord: "",
    feedback: "",
  });
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const vocabulary = niveaux[currentNiveau];

  useEffect(() => {
    setResults({});
    setTestState({ recognizedWord: "", feedback: "" });
    setShowResult(false);
  }, [currentNiveau]);

  const startSpeechRecognition = useCallback((expectedWord) => {
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      setTestState({
        recognizedWord: "",
        feedback: "Speech recognition not supported in your browser.",
      });
      return;
    }

    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "fr-FR";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () =>
      setTestState({ recognizedWord: "", feedback: "🎤 Listening..." });

    recognition.onresult = (event) => {
      const spokenWord = event.results[0][0].transcript.toLowerCase();
      const isCorrect = spokenWord === expectedWord.toLowerCase();

      setResults((prevResults) => ({
        ...prevResults,
        [expectedWord]: isCorrect,
      }));

      setTestState({
        recognizedWord: spokenWord,
        feedback: isCorrect
          ? `✅ Correct! "${spokenWord}" matches "${expectedWord}"`
          : `❌ Incorrect. You said: "${spokenWord}", expected: "${expectedWord}". Try again!`,
      });
    };

    recognition.onerror = () =>
      setTestState({
        recognizedWord: "",
        feedback: "❌ Error occurred. Try again!",
      });

    recognition.start();
  }, []);

  const handleNiveauComplete = () => {
    const correctAnswers = Object.values(results).filter((res) => res).length;
    const finalScore = Math.round((correctAnswers / vocabulary.length) * 100);
    setScore(finalScore);
    setShowResult(true);
  };

  const handleNextLevel = () => {
    if (currentNiveau !== "niveau6") {
      setCurrentNiveau(`niveau${parseInt(currentNiveau.slice(-1)) + 1}`);
    }
    setShowResult(false);
  };

  return (
    <div className="test-niveau">
      <h2>Test Your Vocabulary - {currentNiveau.toUpperCase()}</h2>

      {/* Niveau Selector */}
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

      {/* Feedback Section */}
      <div className="feedback">
        {testState.recognizedWord && (
          <p>
            <strong>You said:</strong> "{testState.recognizedWord}"
          </p>
        )}
        <p>{testState.feedback}</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${
              (Object.keys(results).length / vocabulary.length) * 100
            }%`,
          }}
        />
      </div>

      {/* Vocabulary Cards */}
      <div className="cards">
        {vocabulary.map((word, index) => (
          <div key={index} className="card">
            <h3>{word}</h3>
            <button
              className="test-button"
              onClick={() => startSpeechRecognition(word)}
              disabled={results[word] !== undefined}
            >
              🎤 Test Voice
            </button>

            {/* Results for each word */}
            {results[word] !== undefined && (
              <p className={`test-result ${results[word] ? "pass" : "fail"}`}>
                {results[word] ? "✅ Passed" : "❌ Failed"}
              </p>
            )}

            {/* Repeat Button for Incorrect Answers */}
            {results[word] === false && (
              <button
                className="repeat-button"
                onClick={() => startSpeechRecognition(word)}
              >
                🔄 Try Again
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Niveau Completion Button */}
      {Object.keys(results).length === vocabulary.length && (
        <div className="niveau-summary">
          <button className="complete-button" onClick={handleNiveauComplete}>
            🎯 Complete Niveau
          </button>
        </div>
      )}

      {/* Results Modal */}
      {showResult && (
        <div className="result-modal">
          <div className="result-content">
            <h3>
              {score >= 80
                ? "🎉 Congratulations! You Passed!"
                : "❌ Try Again!"}
            </h3>
            <p>
              Your Score: <strong>{score}%</strong>
            </p>
            <div className="result-buttons">
              {score >= 80 ? (
                <button className="next-button" onClick={handleNextLevel}>
                  ➡️ Next Level
                </button>
              ) : (
                <button
                  className="retry-button"
                  onClick={() => setShowResult(false)}
                >
                  🔄 Retry Level
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestNiveau;
