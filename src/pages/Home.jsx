import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import FeatureSection from "../components/FeatureSection";
import AboutUsSection from "../components/AboutUsSection";
import AppShowcaseSection from "../components/AppShowcaseSection";
import VisualLearningSection from "../components/VisualLearningSection"; // Fixed import path
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>مرحبًا بك في تطبيق تعلم اللغة الفرنسية</h1>
          <p>
            اتقن اللغة الفرنسية من خلال التعلم عبر المقاطع الصوتية، والاختبارات
            وتتبع التقدم.
          </p>
          <button className="cta-button" onClick={() => navigate("/about-us")}>
            ابدأ الآن
          </button>
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
