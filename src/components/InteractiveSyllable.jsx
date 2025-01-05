import React, { useState } from "react";
import "./InteractiveSyllable.css";

const syllables = [
  { syllable: "ma", audio: "/audio/ma.mp3" },
  { syllable: "ta", audio: "/audio/ta.mp3" },
  { syllable: "pa", audio: "/audio/pa.mp3" },
  { syllable: "na", audio: "/audio/na.mp3" },
  { syllable: "ka", audio: "/audio/ka.mp3" },
  // Add more syllables as needed
];

const InteractiveSyllable = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

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

  return (
    <div className="interactive-syllable">
      <h2>Interactive Syllable Learning</h2>
      <div className="syllable-grid">
        {syllables.map((item, index) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSyllable;
