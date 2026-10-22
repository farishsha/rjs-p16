import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My React Website</h1>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
