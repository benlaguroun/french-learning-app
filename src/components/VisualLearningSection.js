import React from "react";
import { Link } from "react-router-dom";
import "./VisualLearningSection.css";
import { FaProjectDiagram, FaPalette, FaPlayCircle } from "react-icons/fa";

const VisualLearningSection = () => {
  return (
    <section className="visual-learning-section" dir="rtl">
      <h2 className="section-title">أدوات التعلم البصري</h2>
      <p className="section-description">
        عزز تجربتك التعليمية باستخدام أدواتنا التفاعلية لإتقان قواعد ومفردات
        اللغة الفرنسية.
      </p>
      <div className="learning-grid">
        <div className="learning-card">
          <FaProjectDiagram className="learning-icon" />
          <h3>الخرائط الذهنية</h3>
          <p>
            اكتشف قواعد النحو وتصريف الأفعال من خلال الخرائط الذهنية التفاعلية.
          </p>
          <Link to="/mind-maps">
            <button className="learn-more-button">المزيد من التفاصيل</button>
          </Link>
        </div>
        <div className="learning-card">
          <FaPalette className="learning-icon" />
          <h3>المخططات الملونة</h3>
          <p>
            فهم الأسماء المذكرة والمؤنثة وأزمنة الأفعال من خلال المخططات المرئية
            الجذابة.
          </p>
          <Link to="/color-coded-charts">
            <button className="learn-more-button">المزيد من التفاصيل</button>
          </Link>
        </div>
        <div className="learning-card">
          <FaPlayCircle className="learning-icon" />
          <h3>شروحات متحركة</h3>
          <p>
            استوعب المفاهيم النحوية الصعبة من خلال الرسوم المتحركة التوضيحية.
          </p>
          <button className="learn-more-button">المزيد من التفاصيل</button>
        </div>
      </div>
    </section>
  );
};

export default VisualLearningSection;
