import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tableaux } from "../data/tableaux";
import "./SyllabicTableau.css";

const SyllabicTableau = () => {
  const { id } = useParams();
  const tableau = tableaux.find((t) => t.id === parseInt(id));
  const [currentAudio, setCurrentAudio] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [recognizedWord, setRecognizedWord] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleAudioPlay = (audioPath, index) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
      setActiveIndex(null);

      // If the same card is clicked, stop and return
      if (activeIndex === index) return;
    }

    const newAudio = new Audio(audioPath);
    newAudio.play();
    setCurrentAudio(newAudio);
    setActiveIndex(index);

    newAudio.onended = () => {
      setCurrentAudio(null);
      setActiveIndex(null);
    };
  };

  const handleVoiceTest = (expectedSyllable) => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "fr-FR";

    recognition.onstart = () => setFeedback("Listening...");
    recognition.onspeechend = () => recognition.stop();
    recognition.onresult = (event) => {
      const spokenWord = event.results[0][0].transcript.toLowerCase();
      setRecognizedWord(spokenWord);

      if (spokenWord === expectedSyllable.toLowerCase()) {
        setFeedback("Correct! 🎉");
      } else {
        setFeedback(`Incorrect. You said: "${spokenWord}". Try again.`);
      }
    };
    recognition.onerror = () => setFeedback("Error occurred. Try again.");
    recognition.start();
  };

  return (
    <div className="syllabic-tableau">
      <h2>{tableau.name}</h2>
      <div className="syllable-grid">
        {tableau.syllables.map((item, index) => (
          <div
            key={index}
            className={`syllable-card ${activeIndex === index ? "active" : ""}`}
          >
            <h3>{item.syllable}</h3>
            <button
              className="audio-button"
              onClick={() => handleAudioPlay(item.audio, index)}
            >
              {activeIndex === index ? "Stop" : "Play"}
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
      <div className="feedback">
        {recognizedWord && <p>You said: "{recognizedWord}"</p>}
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default SyllabicTableau;
