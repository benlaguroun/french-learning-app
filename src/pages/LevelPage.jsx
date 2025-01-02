import React, { useState } from "react";
import "./LevelPage.css";

const LevelPage = ({ levelId }) => {
  const syllablesForLevel = ["a", "e", "i", "o", "u", "ba", "be"]; // Example syllables
  const [feedback, setFeedback] = useState(null);
  const [testing, setTesting] = useState(false);
  const [activeAudio, setActiveAudio] = useState(null);

  const playPauseAudio = (syllable) => {
    if (activeAudio?.syllable === syllable && !activeAudio.paused) {
      activeAudio.audio.pause();
      setActiveAudio({ ...activeAudio, paused: true });
    } else {
      const audio = new Audio(`/audio/${syllable}.mp3`);
      audio.play();
      setActiveAudio({ syllable, audio, paused: false });

      audio.onended = () => {
        setActiveAudio(null);
      };
    }
  };

  const testVoice = (syllable) => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "fr-FR"; // Set to French
    recognition.start();
    setTesting(syllable);

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase();
      setTesting(false);
      if (spokenText === syllable.toLowerCase()) {
        setFeedback({ syllable, success: true });
      } else {
        setFeedback({ syllable, success: false });
      }
    };

    recognition.onerror = () => {
      setTesting(false);
      setFeedback(null);
      alert("Error occurred during speech recognition. Please try again.");
    };
  };

  return (
    <div className="level-page">
      <h2>Level {levelId}</h2>
      <p>
        Tap the buttons to listen to the syllable or test your pronunciation.
      </p>
      <div className="syllables-grid">
        {syllablesForLevel.map((syllable) => (
          <div key={syllable} className="syllable-card">
            <div className="syllable-title">{syllable}</div>
            <button
              className="listen-button"
              onClick={() => playPauseAudio(syllable)}
            >
              {activeAudio?.syllable === syllable && !activeAudio.paused
                ? "Pause"
                : "Listen"}
            </button>
            <button
              className="test-button"
              onClick={() => testVoice(syllable)}
              disabled={testing === syllable}
            >
              {testing === syllable ? "Listening..." : "Test Voice"}
            </button>
          </div>
        ))}
      </div>
      {feedback && (
        <div className={`feedback ${feedback.success ? "success" : "error"}`}>
          {feedback.success
            ? `Correct! You pronounced "${feedback.syllable}" correctly.`
            : `Try again! Your pronunciation of "${feedback.syllable}" was incorrect.`}
        </div>
      )}
    </div>
  );
};

export default LevelPage;
