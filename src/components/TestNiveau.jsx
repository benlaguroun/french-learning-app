import React, { useState, useEffect, useCallback } from "react";
import { niveaux } from "../data/vocabulary";
import "./TestNiveau.css";

const TestNiveau = () => {
  const [currentNiveau, setCurrentNiveau] = useState("niveau1");
  const [results, setResults] = useState({});
  const [testState, setTestState] = useState({
    recognizedWord: "",
    feedback: "",
  });
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const vocabulary = niveaux[currentNiveau];

  useEffect(() => {
    setResults({});
    setTestState({ recognizedWord: "", feedback: "" });
    setShowResult(false);
  }, [currentNiveau]);

  const startSpeechRecognition = useCallback((expectedWord) => {
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      setTestState({
        recognizedWord: "",
        feedback: "التعرف على الصوت غير مدعوم في متصفحك.",
      });
      return;
    }

    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "fr-FR";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () =>
      setTestState({ recognizedWord: "", feedback: "🎤 استمع..." });

    recognition.onresult = (event) => {
      const spokenWord = event.results[0][0].transcript.toLowerCase();
      const isCorrect = spokenWord === expectedWord.toLowerCase();

      setResults((prevResults) => ({
        ...prevResults,
        [expectedWord]: isCorrect,
      }));

      setTestState({
        recognizedWord: spokenWord,
        feedback: isCorrect
          ? `✅ صحيح! "${spokenWord}" يطابق "${expectedWord}"`
          : `❌ خطأ. لقد قلت: "${spokenWord}"، الكلمة المطلوبة: "${expectedWord}". حاول مرة أخرى!`,
      });
    };

    recognition.onerror = () =>
      setTestState({
        recognizedWord: "",
        feedback: "❌ حدث خطأ. حاول مرة أخرى!",
      });

    recognition.start();
  }, []);

  const handleNiveauComplete = () => {
    const correctAnswers = Object.values(results).filter((res) => res).length;
    const finalScore = Math.round((correctAnswers / vocabulary.length) * 100);
    setScore(finalScore);
    setShowResult(true);
  };

  const handleNextLevel = () => {
    if (currentNiveau !== "niveau6") {
      setCurrentNiveau(`niveau${parseInt(currentNiveau.slice(-1)) + 1}`);
    }
    setShowResult(false);
  };

  return (
    <div className="test-niveau">
      <h2>اختبر مفرداتك - {currentNiveau.toUpperCase()}</h2>

      {/* اختيار المستوى */}
      <div className="niveau-selector">
        {Object.keys(niveaux).map((niveau) => (
          <button
            key={niveau}
            className={`niveau-button ${
              niveau === currentNiveau ? "active" : ""
            }`}
            onClick={() => setCurrentNiveau(niveau)}
          >
            {niveau.toUpperCase()}
          </button>
        ))}
      </div>

      {/* قسم الملاحظات */}
      <div className="feedback">
        {testState.recognizedWord && (
          <p>
            <strong>لقد قلت:</strong> "{testState.recognizedWord}"
          </p>
        )}
        <p>{testState.feedback}</p>
      </div>

      {/* شريط التقدم */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${
              (Object.keys(results).length / vocabulary.length) * 100
            }%`,
          }}
        />
      </div>

      {/* بطاقات الكلمات */}
      <div className="cards">
        {vocabulary.map((word, index) => (
          <div key={index} className="card">
            <h3>{word}</h3>
            <button
              className="test-button"
              onClick={() => startSpeechRecognition(word)}
              disabled={results[word] !== undefined}
            >
              🎤 اختبار النطق
            </button>

            {/* نتيجة الاختبار لكل كلمة */}
            {results[word] !== undefined && (
              <p className={`test-result ${results[word] ? "pass" : "fail"}`}>
                {results[word] ? "✅ ناجح" : "❌ فشل"}
              </p>
            )}

            {/* زر إعادة المحاولة للكلمات غير الصحيحة */}
            {results[word] === false && (
              <button
                className="repeat-button"
                onClick={() => startSpeechRecognition(word)}
              >
                🔄 حاول مرة أخرى
              </button>
            )}
          </div>
        ))}
      </div>

      {/* زر إكمال المستوى */}
      {Object.keys(results).length === vocabulary.length && (
        <div className="niveau-summary">
          <button className="complete-button" onClick={handleNiveauComplete}>
            🎯 إنهاء المستوى
          </button>
        </div>
      )}

      {/* نافذة النتيجة */}
      {showResult && (
        <div className="result-modal">
          <div className="result-content">
            <h3>{score >= 80 ? "🎉 مبروك! لقد نجحت!" : "❌ حاول مرة أخرى!"}</h3>
            <p>
              درجتك: <strong>{score}%</strong>
            </p>
            <div className="result-buttons">
              {score >= 80 ? (
                <button className="next-button" onClick={handleNextLevel}>
                  ➡️ المستوى التالي
                </button>
              ) : (
                <button
                  className="retry-button"
                  onClick={() => setShowResult(false)}
                >
                  🔄 إعادة المحاولة
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestNiveau;
