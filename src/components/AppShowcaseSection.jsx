import React from "react";
import "./AppShowcaseSection.css";

const AppShowcaseSection = () => {
  return (
    <section className="app-showcase-section">
      <div className="overlay">
        <h2 className="section-title">Discover Our App</h2>
        <div className="showcase-grid">
          <div className="showcase-item">
            <img src="/images/syllable-learning.png" alt="Syllable Learning" />
            <p>
              Syllable-based learning with visual aids for easy understanding.
            </p>
          </div>
          <div className="showcase-item">
            <img src="/images/level-tests.png" alt="Level Tests" />
            <p>Engaging tests to classify your level and track progress.</p>
          </div>
          <div className="showcase-item">
            <img src="/images/progress-tracking.png" alt="Progress Tracking" />
            <p>Track your learning journey with detailed progress insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
