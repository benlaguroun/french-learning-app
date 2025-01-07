import React from "react";
import "./MindMaps.css";

const MindMaps = () => {
  const mindMapsData = [
    {
      title: "Present Tense Conjugations",
      description:
        "Explore regular and irregular verb conjugations in the present tense.",
      image: "/images/present-tense-mindmap.jpg",
    },
    {
      title: "Gendered Nouns",
      description:
        "Understand the rules for masculine and feminine nouns with examples.",
      image: "/images/gendered-nouns-mindmap.jpg",
    },
    {
      title: "Sentence Structure",
      description:
        "Learn how to structure sentences for questions, negations, and statements.",
      image: "/images/sentence-structure-mindmap.jpg",
    },
    {
      title: "Verb Tenses",
      description:
        "Dive into past, present, and future tenses with key examples.",
      image: "/images/verb-tenses-mindmap.jpg",
    },
  ];

  return (
    <div className="mind-maps-page">
      <h2 className="section-title">Interactive Mind Maps</h2>
      <p className="section-description">
        Explore grammar rules and verb conjugations with visual, interactive
        mind maps.
      </p>
      <div className="mind-maps-grid">
        {mindMapsData.map((map, index) => (
          <div key={index} className="mind-map-card">
            <img src={map.image} alt={map.title} className="mind-map-image" />
            <h3 className="mind-map-title">{map.title}</h3>
            <p className="mind-map-description">{map.description}</p>
            <button
              className="view-mind-map-button"
              onClick={() => alert(`Opening ${map.title}...`)}
            >
              View Mind Map
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindMaps;
