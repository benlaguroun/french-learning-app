import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-content">
          <h1>من نحن؟</h1>
          <p>
            مرحبًا بك في تطبيق تعلم الفرنسية! نقدم لك طريقة مبتكرة وسهلة لتعلم
            اللغة الفرنسية بسرعة وفعالية.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>كيف يعمل التطبيق؟</h2>
        <div className="steps">
          <div className="step">
            <h3>📚 التعلم بالمقاطع الصوتية</h3>
            <p>
              يعتمد تطبيقنا على التعلم بالمقاطع الصوتية، مما يسهل عليك نطق
              الكلمات بشكل صحيح من خلال الاستماع والتكرار.
            </p>
          </div>
          <div className="step">
            <h3>📝 اختبارات تفاعلية</h3>
            <p>
              اختبر مستواك من خلال اختبارات تفاعلية تعزز الفهم وتساعدك على تذكر
              الكلمات والعبارات بسهولة.
            </p>
          </div>
          <div className="step">
            <h3>📊 تتبع تقدمك</h3>
            <p>
              يمكنك متابعة تقدمك والتعرف على النقاط التي تحتاج إلى تحسينها في
              رحلتك لتعلم اللغة الفرنسية.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>🎯 لماذا يجب عليك استخدام تطبيقنا؟</h2>
        <ul>
          <li>✅ تعلم سريع وسهل من خلال المقاطع الصوتية التفاعلية.</li>
          <li>✅ طرق بصرية مبتكرة مثل الخرائط الذهنية والمخططات الملونة.</li>
          <li>✅ يناسب جميع المستويات، من المبتدئين إلى المتقدمين.</li>
          <li>✅ يدعم اللغة العربية لتسهيل التعلم.</li>
          <li>✅ نظام تتبع ذكي يساعدك على تحقيق أهدافك اللغوية.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
