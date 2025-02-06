import React from "react";
import { FaBookOpen, FaTasks, FaChartLine } from "react-icons/fa"; // Import icons
import "./AppShowcaseSection.css";

const AppShowcaseSection = () => {
  return (
    <section className="app-showcase-section">
      <div className="overlay">
        <h2 className="section-title">اكتشف تطبيقنا</h2>
        <div className="showcase-grid">
          <div className="showcase-item">
            <FaBookOpen className="icon" />
            <h3>تعلم من خلال المقاطع الصوتية</h3>
            <p>
              افتح قوة التعلم عبر المقاطع الصوتية لإتقان مفردات اللغة الفرنسية
              والنطق الصحيح.
            </p>
          </div>
          <div className="showcase-item">
            <FaTasks className="icon" />
            <h3>اختبارات تفاعلية للمستويات</h3>
            <p>تحدى نفسك مع اختبارات مشوقة مخصصة لكل مستوى تعلم.</p>
          </div>
          <div className="showcase-item">
            <FaChartLine className="icon" />
            <h3>تتبع تقدمك</h3>
            <p>حافظ على تحفيزك مع تتبع التقدم الفعلي وتحقيق الأهداف.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
