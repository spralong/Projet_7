import React from "react";
import "./style/app.scss";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import FichLogement from "./pages/FichLogment";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
