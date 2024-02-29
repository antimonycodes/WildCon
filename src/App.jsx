// App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  const handleDarkModeToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} onDarkModeToggle={handleDarkModeToggle} />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              isDarkMode={isDarkMode}
              onDarkModeToggle={handleDarkModeToggle}
            />
          }
        />
        <Route
          path="/gallery"
          element={
            <Gallery
              isDarkMode={isDarkMode}
              onDarkModeToggle={handleDarkModeToggle}
            />
          }
        />
        <Route
          path="/explore"
          element={
            <Explore
              isDarkMode={isDarkMode}
              onDarkModeToggle={handleDarkModeToggle}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              isDarkMode={isDarkMode}
              onDarkModeToggle={handleDarkModeToggle}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
