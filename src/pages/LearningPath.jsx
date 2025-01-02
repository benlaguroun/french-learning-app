import React from "react";
import { useNavigate } from "react-router-dom";
import "./LearningPath.css";

const levels = [
  { id: 1, name: "Level 1", image: "/images/level1.jpg" },
  { id: 2, name: "Level 2", image: "/images/level1.jpg" },
  { id: 3, name: "Level 3", image: "/images/level1.jpg" },
  { id: 4, name: "Level 4", image: "/images/level1.jpg" },
  { id: 5, name: "Level 5", image: "/images/level1.jpg" },
];

const LearningPath = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/level/${id}`);
  };

  return (
    <div className="learning-path">
      <h2>Select Your Level</h2>
      <div className="levels-grid">
        {levels.map((level) => (
          <div
            key={level.id}
            className="level-card"
            onClick={() => handleCardClick(level.id)}
          >
            <img
              src={level.image}
              alt={`${level.name}`}
              className="level-image"
            />
            <div className="level-info">
              <h3>{level.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
