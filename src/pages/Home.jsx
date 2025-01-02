import React from "react";
import FeatureSection from "../components/FeatureSection";
import AboutUsSection from "../components/AboutUsSection";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to French Learning App</h1>
        <p>
          Master French through syllable-based learning, interactive tests, and
          progress tracking!
        </p>
      </header>
      <FeatureSection />
      <AboutUsSection />
    </div>
  );
};

export default Home;
