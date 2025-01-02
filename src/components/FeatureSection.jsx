import React from "react";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2>Our Features</h2>
      <div className="features">
        <div className="feature">
          <h3>Interactive Syllable Learning</h3>
          <p>
            Tap and learn syllables with visual aids to reinforce vocabulary.
          </p>
        </div>
        <div className="feature">
          <h3>Progressive Level Tests</h3>
          <p>
            Take classification tests from Niveau 1 to Niveau 5 with feedback.
          </p>
        </div>
        <div className="feature">
          <h3>Progress Tracking</h3>
          <p>
            Monitor your learning journey with comprehensive progress tracking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
