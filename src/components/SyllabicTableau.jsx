import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tableaux } from "../data/tableaux";
import "./SyllabicTableau.css";

const SyllabicTableau = () => {
  const { id } = useParams();
  const tableau = tableaux.find((t) => t.id === parseInt(id));
  const [activeLetter, setActiveLetter] = useState(tableau.sections[0].letter); // Default to the first letter
  const [feedback, setFeedback] = useState(""); // State to show feedback after testing voice

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
  const handleVoiceTest = async (target) => {
    try {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = "fr-FR"; // Set language to French
      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        if (transcript === target.toLowerCase()) {
          setFeedback(`Correct! You said "${transcript}".`);
        } else {
          setFeedback(`Try again! You said "${transcript}".`);
        }
      };

      recognition.onerror = () => {
        setFeedback("Voice recognition failed. Please try again.");
      };
    } catch (error) {
      setFeedback("Speech recognition is not supported in your browser.");
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
                onClick={() => handleVoiceTest(item.syllable)}
              >
                Test Voice
              </button>
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
                onClick={() => handleVoiceTest(item.word)}
              >
                Test Voice
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback */}
      <div className="feedback">
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default SyllabicTableau;
