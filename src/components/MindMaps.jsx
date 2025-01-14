import React from "react";
import "./MindMaps.css";

const MindMaps = () => {
  const mindMapsData = [
    {
      title: "Les Conjugaisons au Présent / التصريفات في الزمن الحاضر",
      description:
        "Découvrez les verbes réguliers et irréguliers au présent avec des exemples.",
      arabicDescription:
        "تعرف على الأفعال المنتظمة وغير المنتظمة في الزمن الحاضر مع أمثلة.",
      image: "/images/present-tense-mindmap.jpg",
    },
    {
      title: "Les Noms Genrés / الأسماء حسب الجنس",
      description:
        "Comprenez les règles pour les noms masculins et féminins avec des exemples.",
      arabicDescription: "فهم قواعد الأسماء المذكرة والمؤنثة مع أمثلة توضيحية.",
      image: "/images/gendered-nouns-mindmap.jpg",
    },
    {
      title: "La Structure des Phrases / تركيب الجمل",
      description:
        "Apprenez à structurer des phrases pour les questions, les négations et les affirmations.",
      arabicDescription: "تعلم كيفية تركيب الجمل للأسئلة والنفي والإيجاب.",
      image: "/images/sentence-structure-mindmap.jpg",
    },
    {
      title: "Les Temps Verbaux / الأزمنة",
      description:
        "Plongez dans les temps passé, présent et futur avec des exemples clés.",
      arabicDescription:
        "تعرف على الأزمنة: الماضي، الحاضر، والمستقبل مع أمثلة واضحة.",
      image: "/images/verb-tenses-mindmap.jpg",
    },
  ];

  return (
    <div className="mind-maps-page">
      <h2 className="section-title">
        Cartes Mentales Interactives / الخرائط الذهنية التفاعلية
      </h2>
      <p className="section-description">
        Découvrez les règles de grammaire et les conjugaisons grâce à des cartes
        mentales interactives et visuelles.
        <br />
        استكشف قواعد اللغة والتصريفات من خلال الخرائط الذهنية التفاعلية
        والمرئية.
      </p>
      <div className="mind-maps-grid">
        {mindMapsData.map((map, index) => (
          <div key={index} className="mind-map-card">
            <img src={map.image} alt={map.title} className="mind-map-image" />
            <h3 className="mind-map-title">{map.title}</h3>
            <p className="mind-map-description">
              {map.description}
              <br />
              {map.arabicDescription}
            </p>
            <button
              className="view-mind-map-button"
              onClick={() => alert(`فتح ${map.title}...`)}
            >
              View Mind Map / عرض الخريطة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindMaps;
