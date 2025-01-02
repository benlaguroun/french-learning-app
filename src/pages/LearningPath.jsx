import React from "react";
import "./LearningPath.css";
import { useNavigate } from "react-router-dom";

const levels = [
  { id: 1, title: "Niveau 1" },
  { id: 2, title: "Niveau 2" },
  { id: 3, title: "Niveau 3" },
  { id: 4, title: "Niveau 4" },
  { id: 5, title: "Niveau 5" },
];

const LearningPath = () => {
  const navigate = useNavigate();

  const handleLevelClick = (levelId) => {
    navigate(`/level/${levelId}`);
  };

  return (
    <div className="learning-path">
      <h2>Your Learning Path</h2>
      <div className="levels-grid">
        {levels.map((level) => (
          <div
            key={level.id}
            className="level-card"
            onClick={() => handleLevelClick(level.id)}
          >
            <h3>{level.title}</h3>
            <p>Start Learning</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
