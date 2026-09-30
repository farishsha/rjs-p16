import Navigation from "./Navigation";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
    <header>
      <h1>My React Website</h1>
      <nav>
      <Navigation />
      </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About us />} />
        <Route path="/contact" element={<Contact us/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
