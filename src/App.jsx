// App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About s />} />
      </Routes>
    </>
  );
}

export default App;
