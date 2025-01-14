import React from "react";
import "./ColorCodedCharts.css";

const ColorCodedCharts = () => {
  return (
    <div className="color-coded-charts">
      <h2 className="section-title">
        Tableaux Codés par Couleurs / جداول ملونة
      </h2>
      <p className="section-description">
        Visualisez la grammaire française avec des tableaux codés par couleurs
        pour les noms genrés et les temps verbaux.
        <br />
        تصور قواعد اللغة الفرنسية باستخدام الجداول الملونة للأسماء والأزمنة.
      </p>

      {/* Gendered Nouns Section */}
      <div className="chart-section">
        <h3 className="chart-title">Noms Genrés / الأسماء حسب الجنس</h3>
        <div className="chart">
          <div className="chart-item masculine">
            <p>Masculin / المذكر</p>
            <ul>
              <li>le chat (القطة)</li>
              <li>le livre (الكتاب)</li>
              <li>le chien (الكلب)</li>
            </ul>
          </div>
          <div className="chart-item feminine">
            <p>Féminin / المؤنث</p>
            <ul>
              <li>la maison (المنزل)</li>
              <li>la voiture (السيارة)</li>
              <li>la fleur (الزهرة)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Verb Tenses Section */}
      <div className="chart-section">
        <h3 className="chart-title">Temps Verbaux / الأزمنة</h3>
        <div className="chart">
          <div className="chart-item present">
            <p>Présent / المضارع</p>
            <ul>
              <li>je parle (أنا أتحدث)</li>
              <li>tu manges (أنت تأكل)</li>
              <li>il écrit (هو يكتب)</li>
            </ul>
          </div>
          <div className="chart-item past">
            <p>Passé / الماضي</p>
            <ul>
              <li>j'ai parlé (لقد تحدثت)</li>
              <li>tu as mangé (لقد أكلت)</li>
              <li>il a écrit (لقد كتب)</li>
            </ul>
          </div>
          <div className="chart-item future">
            <p>Futur / المستقبل</p>
            <ul>
              <li>je parlerai (سأتحدث)</li>
              <li>tu mangeras (سوف تأكل)</li>
              <li>il écrira (سوف يكتب)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorCodedCharts;
