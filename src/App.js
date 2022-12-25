import React from "react";
import Menubar from "./portfolioWebsite/Menubar/Menubar";
import Home from "./portfolioWebsite/Home/Home";
import About from "./portfolioWebsite/About/About";
import Portfolio from "./portfolioWebsite/Portfolio/Portfolio";
import Certificate from "./portfolioWebsite/Certificate/Certificate";
import Services from "./portfolioWebsite/Services/Services";
import Contact from "./portfolioWebsite/Contact/Contact";
import "./app.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Menubar />
      <div className="section">
        {/* <Home />
        <About />
        <Portfolio />
        <Certificate />
        <Services />
        <Contact /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div> 
  );
}

export default App;
