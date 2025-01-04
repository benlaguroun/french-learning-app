import React from "react";
import { FaBookOpen, FaTasks, FaChartLine } from "react-icons/fa"; // Import icons
import "./AppShowcaseSection.css";

const AppShowcaseSection = () => {
  return (
    <section className="app-showcase-section">
      <div className="overlay">
        <h2 className="section-title">Discover Our App</h2>
        <div className="showcase-grid">
          <div className="showcase-item">
            <FaBookOpen className="icon" />
            <h3>Learn Through Syllables</h3>
            <p>
              Unlock the power of syllable-based learning for mastering French
              vocabulary and pronunciation.
            </p>
          </div>
          <div className="showcase-item">
            <FaTasks className="icon" />
            <h3>Interactive Level Tests</h3>
            <p>
              Challenge yourself with engaging tests tailored for each learning
              level.
            </p>
          </div>
          <div className="showcase-item">
            <FaChartLine className="icon" />
            <h3>Track Your Progress</h3>
            <p>
              Stay motivated with real-time progress tracking and goal
              milestones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
