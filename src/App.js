import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage/Homepage";
import AboutPage from "./components/AboutSection";
import Footer from "./components/Footer"
import OurBranch from "./components/ourbranch";
import Admission from "./components/admission";
import Academics from "./components/academics";
import "./App.css"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path = "/branch" element={<OurBranch/>}/>
        <Route path = "/academics" element={<Academics/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}
