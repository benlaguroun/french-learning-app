import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2 className="section-title">Our Features</h2>
      <div className="features">
        <div className="feature">
          <h3>Progressive Level Tests</h3>
          <p>
            Take classification tests from Niveau 1 to Niveau 5 with feedback.
          </p>
          <Link to="/test-niveau">
            <button className="feature-button">Explore Tests</button>
          </Link>
        </div>
        <div className="feature">
          <h3>Interactive Syllable Learning</h3>
          <p>
            Tap and learn syllables with visual aids to reinforce vocabulary.
          </p>
          <button className="feature-button">Learn More</button>
        </div>
        <div className="feature">
          <h3>Tableau des Lettres</h3>
          <p>
            Learn all letters interactively with animations and spelling guides.
          </p>
          <Link to="/tableau-lettres">
            <button className="feature-button">Explore Letters</button>
          </Link>
        </div>
        <div className="feature">
          <h3>Progress Tracking</h3>
          <p>
            Monitor your learning journey with comprehensive progress tracking.
          </p>
          <button className="feature-button">Track Progress</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
