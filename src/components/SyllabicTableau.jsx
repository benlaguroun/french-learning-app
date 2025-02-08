import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { tableaux } from "../data/tableaux";
import "./SyllabicTableau.css";

const SyllabicTableau = () => {
  const { id } = useParams();
  const tableau = tableaux.find((t) => t.id === parseInt(id));
  const [activeLetter, setActiveLetter] = useState(tableau.sections[0].letter);
  const [feedbacks, setFeedbacks] = useState({});
  const [finalResult, setFinalResult] = useState(null);

  useEffect(() => {
    setFeedbacks({});
    setFinalResult(null);
  }, [id, activeLetter]);

  if (!tableau) {
    return (
      <div className="syllabic-tableau">
        <h2>❌ الجدول غير موجود</h2>
        <p>⚠️ الجدول المطلوب غير متاح، يرجى التحقق من الرابط.</p>
      </div>
    );
  }

  const activeSection = tableau.sections.find(
    (section) => section.letter === activeLetter
  );

  // اختبار النطق الصوتي
  const handleVoiceTest = async (target, index, type) => {
    try {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = "fr-FR";
      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        const accuracy = calculateAccuracy(transcript, target.toLowerCase());
        const color = getAccuracyColor(accuracy);

        setFeedbacks((prevFeedbacks) => ({
          ...prevFeedbacks,
          [`${type}-${index}`]: { text: transcript, color, accuracy },
        }));

        checkFinalResult();
      };

      recognition.onerror = () => {
        setFeedbacks((prevFeedbacks) => ({
          ...prevFeedbacks,
          [`${type}-${index}`]: {
            text: "❌ فشل التعرف على الصوت",
            color: "#e74c3c",
            accuracy: 0,
          },
        }));
      };
    } catch (error) {
      setFeedbacks((prevFeedbacks) => ({
        ...prevFeedbacks,
        [`${type}-${index}`]: {
          text: "❌ المتصفح لا يدعم التعرف على الصوت",
          color: "#e74c3c",
          accuracy: 0,
        },
      }));
    }
  };

  // حساب نسبة الدقة
  const calculateAccuracy = (transcript, target) => {
    if (transcript === target) return 100;
    const common = transcript.split("").filter((char) => target.includes(char));
    return Math.floor((common.length / target.length) * 100);
  };

  // تحديد لون التقييم بناءً على الدقة
  const getAccuracyColor = (accuracy) => {
    return accuracy >= 80 ? "green" : accuracy >= 50 ? "orange" : "red";
  };

  // التحقق مما إذا كان المستخدم نجح أو فشل
  const checkFinalResult = () => {
    const accuracyValues = Object.values(feedbacks).map((f) => f.accuracy || 0);
    if (accuracyValues.length > 0) {
      const averageAccuracy =
        accuracyValues.reduce((sum, acc) => sum + acc, 0) /
        accuracyValues.length;
      setFinalResult(averageAccuracy >= 80 ? "✅ ناجح" : "❌ حاول مرة أخرى");
    }
  };

  return (
    <div className="syllabic-tableau" dir="rtl">
      <h2>{tableau.name}</h2>

      {/* أزرار التنقل بين الحروف */}
      <div className="letter-navigation">
        {tableau.sections.map((section) => (
          <button
            key={section.letter}
            className={`letter-button ${
              section.letter === activeLetter ? "active" : ""
            }`}
            onClick={() => setActiveLetter(section.letter)}
          >
            {section.letter.toUpperCase()}
          </button>
        ))}
      </div>

      {/* قسم المقاطع الصوتية */}
      <div className="syllable-section">
        <h3 className="section-title">
          المقاطع الصوتية للحرف "{activeLetter.toUpperCase()}"
        </h3>
        <div className="syllable-grid">
          {activeSection.syllables.map((item, index) => (
            <div key={index} className="syllable-card">
              <h3>{item.syllable}</h3>
              <button
                className="audio-button"
                onClick={() => new Audio(item.audio).play()}
              >
                🔊 استمع
              </button>
              <button
                className="voice-test-button"
                onClick={() =>
                  handleVoiceTest(item.syllable, index, "syllable")
                }
              >
                🎤 اختبار النطق
              </button>
              <div
                className="feedback-rectangle"
                style={{
                  backgroundColor:
                    feedbacks[`syllable-${index}`]?.color || "#ccc",
                }}
              >
                {feedbacks[`syllable-${index}`]?.accuracy
                  ? `${feedbacks[`syllable-${index}`]?.accuracy}%`
                  : "🕓 بانتظار النتيجة"}
              </div>
              <p>{feedbacks[`syllable-${index}`]?.text || ""}</p>
            </div>
          ))}
        </div>
      </div>

      {/* قسم الكلمات */}
      <div className="word-section">
        <h3 className="section-title">
          الكلمات المرتبطة بالحرف "{activeLetter.toUpperCase()}"
        </h3>
        <div className="word-grid">
          {activeSection.words.map((item, index) => (
            <div key={index} className="word-card">
              <h3>{item.word}</h3>
              <button
                className="audio-button"
                onClick={() => new Audio(item.audio).play()}
              >
                🔊 استمع
              </button>
              <button
                className="voice-test-button"
                onClick={() => handleVoiceTest(item.word, index, "word")}
              >
                🎤 اختبار النطق
              </button>
              <div
                className="feedback-rectangle"
                style={{
                  backgroundColor: feedbacks[`word-${index}`]?.color || "#ccc",
                }}
              >
                {feedbacks[`word-${index}`]?.accuracy
                  ? `${feedbacks[`word-${index}`]?.accuracy}%`
                  : "🕓 بانتظار النتيجة"}
              </div>
              <p>{feedbacks[`word-${index}`]?.text || ""}</p>
            </div>
          ))}
        </div>
      </div>

      {/* عرض النتيجة النهائية */}
      {finalResult && (
        <div className="final-result">
          <h2>نتيجة الاختبار: {finalResult}</h2>
        </div>
      )}
    </div>
  );
};

export default SyllabicTableau;
