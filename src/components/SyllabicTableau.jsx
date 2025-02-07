import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { tableaux } from "../data/tableaux";
import "./SyllabicTableau.css";

const SyllabicTableau = () => {
  const { id } = useParams();
  const tableau = tableaux.find((t) => t.id === parseInt(id));
  const [activeLetter, setActiveLetter] = useState(tableau.sections[0].letter);
  const [feedbacks, setFeedbacks] = useState({});
  const [finalResult, setFinalResult] = useState(null); // Store the final pass/fail result

  // Clear feedback when the user navigates to a new letter or page
  useEffect(() => {
    setFeedbacks({});
    setFinalResult(null);
  }, [id, activeLetter]);

  if (!tableau) {
    return (
      <div className="syllabic-tableau">
        <h2>Tableau not found</h2>
        <p>The requested tableau does not exist. Please check the URL.</p>
      </div>
    );
  }

  const activeSection = tableau.sections.find(
    (section) => section.letter === activeLetter
  );

  // Handle voice test
  const handleVoiceTest = async (target, index, type) => {
    try {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = "fr-FR";
      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        const accuracy = calculateAccuracy(transcript, target.toLowerCase());
        const color = getAccuracyColor(accuracy);

        setFeedbacks((prevFeedbacks) => ({
          ...prevFeedbacks,
          [`${type}-${index}`]: { text: transcript, color, accuracy },
        }));

        checkFinalResult();
      };

      recognition.onerror = () => {
        setFeedbacks((prevFeedbacks) => ({
          ...prevFeedbacks,
          [`${type}-${index}`]: {
            text: "Voice recognition failed.",
            color: "#e74c3c",
            accuracy: 0,
          },
        }));
      };
    } catch (error) {
      setFeedbacks((prevFeedbacks) => ({
        ...prevFeedbacks,
        [`${type}-${index}`]: {
          text: "Speech recognition is not supported in your browser.",
          color: "#e74c3c",
          accuracy: 0,
        },
      }));
    }
  };

  // Calculate accuracy (simple letter match)
  const calculateAccuracy = (transcript, target) => {
    if (transcript === target) return 100;
    const common = transcript.split("").filter((char) => target.includes(char));
    return Math.floor((common.length / target.length) * 100);
  };

  // Get color based on accuracy
  const getAccuracyColor = (accuracy) => {
    return accuracy >= 80 ? "green" : accuracy >= 50 ? "orange" : "red";
  };

  // Check if the user passed or failed
  const checkFinalResult = () => {
    const accuracyValues = Object.values(feedbacks).map((f) => f.accuracy || 0);
    if (accuracyValues.length > 0) {
      const averageAccuracy =
        accuracyValues.reduce((sum, acc) => sum + acc, 0) /
        accuracyValues.length;
      setFinalResult(averageAccuracy >= 80 ? "✅ Passed" : "❌ Try Again");
    }
  };

  return (
    <div className="syllabic-tableau">
      <h2>{tableau.name}</h2>

      {/* Navigation Buttons */}
      <div className="letter-navigation">
        {tableau.sections.map((section) => (
          <button
            key={section.letter}
            className={`letter-button ${
              section.letter === activeLetter ? "active" : ""
            }`}
            onClick={() => setActiveLetter(section.letter)}
          >
            {section.letter.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Syllables Section */}
      <div className="syllable-section">
        <h3 className="section-title">
          Syllables for "{activeLetter.toUpperCase()}"
        </h3>
        <div className="syllable-grid">
          {activeSection.syllables.map((item, index) => (
            <div key={index} className="syllable-card">
              <h3>{item.syllable}</h3>
              <button
                className="audio-button"
                onClick={() => new Audio(item.audio).play()}
              >
                Play
              </button>
              <button
                className="voice-test-button"
                onClick={() =>
                  handleVoiceTest(item.syllable, index, "syllable")
                }
              >
                Test Voice
              </button>
              <div
                className="feedback-rectangle"
                style={{
                  backgroundColor:
                    feedbacks[`syllable-${index}`]?.color || "#ccc",
                }}
              >
                {feedbacks[`syllable-${index}`]?.accuracy
                  ? `${feedbacks[`syllable-${index}`]?.accuracy}%`
                  : "Pending"}
              </div>
              <p>{feedbacks[`syllable-${index}`]?.text || ""}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Words Section */}
      <div className="word-section">
        <h3 className="section-title">
          Words for "{activeLetter.toUpperCase()}"
        </h3>
        <div className="word-grid">
          {activeSection.words.map((item, index) => (
            <div key={index} className="word-card">
              <h3>{item.word}</h3>
              <button
                className="audio-button"
                onClick={() => new Audio(item.audio).play()}
              >
                Play
              </button>
              <button
                className="voice-test-button"
                onClick={() => handleVoiceTest(item.word, index, "word")}
              >
                Test Voice
              </button>
              <div
                className="feedback-rectangle"
                style={{
                  backgroundColor: feedbacks[`word-${index}`]?.color || "#ccc",
                }}
              >
                {feedbacks[`word-${index}`]?.accuracy
                  ? `${feedbacks[`word-${index}`]?.accuracy}%`
                  : "Pending"}
              </div>
              <p>{feedbacks[`word-${index}`]?.text || ""}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Result Display */}
      {finalResult && (
        <div className="final-result">
          <h2>Test Result: {finalResult}</h2>
        </div>
      )}
    </div>
  );
};

export default SyllabicTableau;
