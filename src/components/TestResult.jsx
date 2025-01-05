import React from "react";
import { useNavigate } from "react-router-dom";
import "./TestResult.css"; // Custom styles for TestResult

const TestResult = ({ niveau, result, passRate, onRetry, onNext }) => {
  const navigate = useNavigate();

  const handleRetry = () => {
    onRetry(niveau);
  };

  const handleNext = () => {
    onNext(niveau + 1);
    navigate(`/test-niveau/${niveau + 1}`); // Navigate to the next test niveau
  };

  const hasPassed = passRate >= 80; // Passing condition

  return (
    <div className="test-result">
      <h2>Test Result: Niveau {niveau}</h2>
      <p>Le Taux de validation de test = {passRate}%</p>

      {niveau <= 4 && (
        <p>
          Lettre (N{niveau}) = {result.correct}/{result.total}
        </p>
      )}

      {niveau === 5 && (
        <>
          <h3>Phrase (Niveau 5)</h3>
          <ul>
            <li>Respecter les liaisons = {result.respectLiaisons}</li>
            <li>Respecter les signes de ponctuation = {result.punctuation}</li>
            <li>Respecter L'intonation</li>
            <li>
              Articuler bien les mots = {result.correct}/{result.total}
            </li>
          </ul>
        </>
      )}

      {niveau === 6 && (
        <>
          <h3>Texte (Niveau 6)</h3>
          <ul>
            <li>Respecter les liaisons = {result.respectLiaisons}</li>
            <li>Respecter les signes de ponctuation = {result.punctuation}</li>
            <li>Respecter l'intonation</li>
            <li>
              Articuler bien les mots = {result.correct}/{result.total}
            </li>
          </ul>
        </>
      )}

      <div className="buttons">
        {!hasPassed ? (
          <button onClick={handleRetry} className="retry-button">
            Retry Test
          </button>
        ) : (
          <button onClick={handleNext} className="next-button">
            Proceed to Next Niveau
          </button>
        )}
      </div>
    </div>
  );
};

export default TestResult;
