import React, { useState } from "react";
import vocabulaireData from "../data/vocabulaireData";
import "./VocabularyPage.css";

const VocabularyPage = () => {
  const [selectedLetter, setSelectedLetter] = useState("All");

  const playAudio = (audioPath) => {
    const audio = new Audio(audioPath);
    audio.play();
  };

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const filteredData =
    selectedLetter === "All"
      ? vocabulaireData
      : vocabulaireData.filter((item) =>
          item.name.toUpperCase().startsWith(selectedLetter)
        );

  return (
    <div className="vocabulary-page">
      <h2 className="section-title">Vocabulary</h2>

      {/* Alphabet Filter */}
      <div className="alphabet-list">
        <button
          className={`alphabet-button ${
            selectedLetter === "All" ? "active" : ""
          }`}
          onClick={() => setSelectedLetter("All")}
        >
          All
        </button>
        {alphabets.map((letter) => (
          <button
            key={letter}
            className={`alphabet-button ${
              selectedLetter === letter ? "active" : ""
            }`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Vocabulary Grid */}
      <div className="vocabulary-grid">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
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
          ))
        ) : (
          <p className="no-results">
            No vocabulary items for "{selectedLetter}".
          </p>
        )}
      </div>
    </div>
  );
};

export default VocabularyPage;
