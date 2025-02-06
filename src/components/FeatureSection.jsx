import React from "react";
import { Link } from "react-router-dom";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2 className="section-title">ميزاتنا</h2>
      <div className="features">
        <div className="feature">
          <h3>اختبارات تدرج المستوى</h3>
          <p>خذ اختبارات التصنيف من المستوى 1 إلى المستوى 5 مع ملاحظات.</p>
          <Link to="/test-niveau">
            <button className="feature-button">استكشاف الاختبارات</button>
          </Link>
        </div>
        <div className="feature">
          <h3>تعلم المقاطع التفاعلي</h3>
          <p>
            اضغط وتعلم المقاطع الصوتية باستخدام وسائل بصرية لتعزيز المفردات.
          </p>
          <Link to="/tableau-selector">
            <button className="feature-button">تعلم المقاطع</button>
          </Link>
        </div>
        <div className="feature">
          <h3>لوحة الحروف</h3>
          <p>
            تعلم جميع الحروف بطريقة تفاعلية مع الرسوم المتحركة وأدلة الهجاء.
          </p>
          <Link to="/tableau-lettres">
            <button className="feature-button">استكشاف الحروف</button>
          </Link>
        </div>
        <div className="feature">
          <h3>مُنشئ المفردات</h3>
          <p>استكشف بطاقات المفردات مع الصور والأسماء والصوت لكل كلمة.</p>
          <Link to="/vocabulaire">
            <button className="feature-button">استكشاف المفردات</button>
          </Link>
        </div>
        <div className="feature">
          <h3>تتبع التقدم</h3>
          <p>راقب رحلة تعلمك من خلال تتبع التقدم الشامل.</p>
          <button className="feature-button">تتبع التقدم</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
