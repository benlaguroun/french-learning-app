import React from "react";
import "./ColorCodedCharts.css";

const ColorCodedCharts = () => {
  return (
    <div className="color-coded-charts">
      <h2 className="section-title">Color-Coded Charts</h2>
      <p className="section-description">
        Visualize French grammar with color-coded charts for gendered nouns and
        verb tenses.
      </p>

      {/* Gendered Nouns Section */}
      <div className="chart-section">
        <h3 className="chart-title">Gendered Nouns</h3>
        <div className="chart">
          <div className="chart-item masculine">
            <p>Masculine</p>
            <ul>
              <li>le chat (the cat)</li>
              <li>le livre (the book)</li>
              <li>le chien (the dog)</li>
            </ul>
          </div>
          <div className="chart-item feminine">
            <p>Feminine</p>
            <ul>
              <li>la maison (the house)</li>
              <li>la voiture (the car)</li>
              <li>la fleur (the flower)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Verb Tenses Section */}
      <div className="chart-section">
        <h3 className="chart-title">Verb Tenses</h3>
        <div className="chart">
          <div className="chart-item present">
            <p>Present Tense</p>
            <ul>
              <li>je parle (I speak)</li>
              <li>tu manges (you eat)</li>
              <li>il écrit (he writes)</li>
            </ul>
          </div>
          <div className="chart-item past">
            <p>Past Tense</p>
            <ul>
              <li>j'ai parlé (I spoke)</li>
              <li>tu as mangé (you ate)</li>
              <li>il a écrit (he wrote)</li>
            </ul>
          </div>
          <div className="chart-item future">
            <p>Future Tense</p>
            <ul>
              <li>je parlerai (I will speak)</li>
              <li>tu mangeras (you will eat)</li>
              <li>il écrira (he will write)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorCodedCharts;
