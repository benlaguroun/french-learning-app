import React, { useState } from "react";
import "./MindMaps.css";

const MindMaps = () => {
  const mindMapsData = [
    {
      title: "Les Conjugaisons au Présent",
      arabicTitle: "التصريفات في الزمن الحاضر",
      description: "Découvrez les verbes réguliers et irréguliers au présent.",
      arabicDescription:
        "تعرف على الأفعال المنتظمة وغير المنتظمة في الزمن الحاضر.",
      image: "/images/present-tense-mindmap.jpg",
    },
    {
      title: "Les Noms Genrés",
      arabicTitle: "الأسماء حسب الجنس",
      description: "Comprenez les règles pour les noms masculins et féminins.",
      arabicDescription: "فهم قواعد الأسماء المذكرة والمؤنثة.",
      image: "/images/gendered-nouns-mindmap.jpg",
    },
    {
      title: "La Structure des Phrases",
      arabicTitle: "تركيب الجمل",
      description: "Apprenez à structurer des phrases correctement.",
      arabicDescription: "تعلم كيفية تركيب الجمل بشكل صحيح.",
      image: "/images/sentence-structure-mindmap.jpg",
    },
    {
      title: "Les Temps Verbaux",
      arabicTitle: "الأزمنة",
      description: "Explorez les temps passé, présent et futur.",
      arabicDescription: "استكشف الأزمنة: الماضي، الحاضر، والمستقبل.",
      image: "/images/verb-tenses-mindmap.jpg",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="mind-maps-page">
      <h2 className="section-title">🌟 الخرائط الذهنية التفاعلية</h2>
      <p className="section-description">
        📌 استخدم الخرائط الذهنية لفهم القواعد بشكل ممتع وبسيط!
      </p>

      <div className="mind-maps-container">
        {mindMapsData.map((map, index) => (
          <div
            key={index}
            className={`mind-map-card ${
              expandedIndex === index ? "expanded" : ""
            }`}
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            <img src={map.image} alt={map.title} className="mind-map-image" />
            <div className="mind-map-text">
              <h3>{map.arabicTitle}</h3>
              <p>{map.arabicDescription}</p>
              {expandedIndex === index && (
                <div className="expanded-content">
                  <h3>{map.title}</h3>
                  <p>{map.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindMaps;
