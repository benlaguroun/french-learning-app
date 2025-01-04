import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"; // Social media icons
import "./AboutUsSection.css";

const AboutUsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section className="about-us-section">
      <h2>About Us</h2>
      <p>
        At French Learning App, we believe in making language learning
        accessible and engaging.
      </p>
      {showMore && (
        <div className="extra-content">
          <p>
            Our innovative syllable-based method helps learners of all levels
            master French effectively. Whether you're a beginner or looking to
            refine your skills, our app is designed to support you at every step
            of your learning journey.
          </p>
          <p>
            Join our community of language enthusiasts and take the first step
            towards fluency!
          </p>
        </div>
      )}
      <button onClick={toggleContent} className="read-more-btn">
        {showMore ? "Read Less" : "Read More"}
      </button>

      <div className="contact-info">
        <h3>Connect with Us</h3>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a href="mailto:contact@frenchlearningapp.com">
            <FaEnvelope className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
