import React from "react";
import { Link } from "react-router-dom";
import "./VisualLearningSection.css";
import { FaProjectDiagram, FaPalette, FaPlayCircle } from "react-icons/fa";

const VisualLearningSection = () => {
  return (
    <section className="visual-learning-section">
      <h2 className="section-title">Visual Learning Tools</h2>
      <p className="section-description">
        Enhance your learning experience with our interactive tools for
        mastering French grammar and vocabulary.
      </p>
      <div className="learning-grid">
        <div className="learning-card">
          <FaProjectDiagram className="learning-icon" />
          <h3>Mind Maps</h3>
          <p>
            Explore grammar rules and verb conjugations with interactive mind
            maps.
          </p>
          <Link to="/mind-maps">
            <button className="learn-more-button">Learn More</button>
          </Link>
        </div>
        <div className="learning-card">
          <FaPalette className="learning-icon" />
          <h3>Color-Coded Charts</h3>
          <p>
            Understand gendered nouns and verb tenses with visually appealing
            charts.
          </p>
          <Link to="/color-coded-charts">
            <button className="learn-more-button">Learn More</button>
          </Link>
        </div>
        <div className="learning-card">
          <FaPlayCircle className="learning-icon" />
          <h3>Animated Explanations</h3>
          <p>Grasp tricky grammar concepts with step-by-step animations.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default VisualLearningSection;
