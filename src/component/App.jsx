// src/component/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/App.css";

import Navbar from "./navbar";      
import Home from "./Home";          
import Contact from "./Contact";
import Boeken from "./Boeken";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Boeken" element={<Boeken />} />
        
        {/* Voeg hier meer routes toe */}
      </Routes>
    </Router>
  );
}

export default App;
