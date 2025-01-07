import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LearningPath from "./pages/LearningPath";
import LevelPage from "./pages/LevelPage";
import TestNiveau from "./components/TestNiveau";
import TableauLettres from "./components/TableauLettres";
import InteractiveSyllable from "./components/InteractiveSyllable";
import TableauSelector from "./components/TableauSelector";
import SyllabicTableau from "./components/SyllabicTableau";
import VocabularyPage from "./components/VocabularyPage";
import MindMaps from "./components/MindMaps";
import ColorCodedCharts from "./components/ColorCodedCharts";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/level/:levelId" element={<LevelPage />} />
          <Route path="/test-niveau" element={<TestNiveau />} />
          <Route path="/tableau-lettres" element={<TableauLettres />} />
          <Route
            path="/interactive-syllable"
            element={<InteractiveSyllable />}
          />
          <Route path="/tableau-selector" element={<TableauSelector />} />
          <Route path="/tableau/:id" element={<SyllabicTableau />} />
          <Route path="/vocabulaire" element={<VocabularyPage />} />
          <Route path="/mind-maps" element={<MindMaps />} />
          <Route path="/color-coded-charts" element={<ColorCodedCharts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
