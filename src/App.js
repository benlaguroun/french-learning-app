import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@mui/material";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Welcome to the French Learning App</h1>
        <p>Start learning French today with interactive lessons and tests!</p>
      </Container>
      <Footer />
    </>
  );
};

export default App;
