import React from "react";
import vocabulaireData from "../data/vocabulaireData";
import "./VocabularyPage.css";

const VocabularyPage = () => {
  const playAudio = (audioPath) => {
    const audio = new Audio(audioPath);
    audio.play();
  };

  return (
    <div className="vocabulary-page">
      <h2 className="section-title">Vocabulary</h2>
      <div className="vocabulary-grid">
        {vocabulaireData.map((item, index) => (
          <div
            key={index}
            className="vocabulary-card"
            onClick={() => playAudio(item.audio)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="vocabulary-image"
            />
            <h3 className="vocabulary-name">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularyPage;
