import React from "react";
import FeatureSection from "../components/FeatureSection";
import AboutUsSection from "../components/AboutUsSection";
import AppShowcaseSection from "../components/AppShowcaseSection";
import VisualLearningSection from "../components/VisualLearningSection"; // Corrected path
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to French Learning App</h1>
          <p>
            Master French through syllable-based learning, interactive tests,
            and progress tracking!
          </p>
          <button className="cta-button">Get Started Now</button>
        </div>
      </header>
      <FeatureSection />
      <AppShowcaseSection />
      <VisualLearningSection />
      <AboutUsSection />
    </div>
  );
};

export default Home;
