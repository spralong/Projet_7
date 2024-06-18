import React from "react";
// import "./styles/app.scss";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
// import About from "./pages/about/About";
import Home from "./pages/Home";
// import FichLogement from "./pages/logement/FichLogment";
// import NoPage from "./pages/error/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
