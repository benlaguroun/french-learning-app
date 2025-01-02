import React from "react";
import "./LevelPage.css";

const syllables = {
  1: ["a", "e", "i", "o", "u"],
  2: ["ba", "be", "bi", "bo", "bu"],
  3: ["cha", "che", "chi", "cho", "chu"],
  4: ["ma", "me", "mi", "mo", "mu"],
  5: ["pa", "pe", "pi", "po", "pu"],
};

const LevelPage = ({ levelId }) => {
  const syllablesForLevel = syllables[levelId];

  const playAudio = (syllable) => {
    const audio = new Audio(`/audio/${syllable}.mp3`);
    audio.play();
  };

  return (
    <div className="level-page">
      <h2>Level {levelId}</h2>
      <p>Tap the syllables to hear their pronunciation.</p>
      <div className="syllables-grid">
        {syllablesForLevel.map((syllable) => (
          <div
            key={syllable}
            className="syllable-card"
            onClick={() => playAudio(syllable)}
          >
            {syllable}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelPage;
