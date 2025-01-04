import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LearningPath from "./pages/LearningPath";
import LevelPage from "./pages/LevelPage";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/level/:levelId" element={<LevelPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
