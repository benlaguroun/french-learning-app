import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { supabase } from "./supabaseClient";
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
import Register from "./pages/Register";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";

const App = () => {
  const [user, setUser] = useState(null);

  // Check if user is authenticated
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    // Listen for authentication state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div>
        <Header user={user} />
        <Routes>
          {/* Public Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Protected Routes */}
          {user ? (
            <>
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
              <Route
                path="/color-coded-charts"
                element={<ColorCodedCharts />}
              />
            </>
          ) : (
            // Redirect to login if user is not authenticated
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          <Route path="/about-us" element={<AboutUs />} /> {/* Add Route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
