// src/component/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from '../styleHome/Home.module.css';

import Navbar from "./navbar";      
import Home from "./Home";          
import Ontdek from "./Ontdek";
import Boeken from "./Boeken";
import Attractie from "./Attractie";
import Tickets from "./Tickets";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Ontdek" element={<Ontdek />} />
        <Route path="/Boeken" element={<Boeken />} />
        <Route path="/Attractie" element={<Attractie />} />
        <Route path="/Tickets" element = {<Tickets />} />
        
        {/* Voeg hier meer routes toe */}
      </Routes>
    </Router>
  );
}

export default App;
