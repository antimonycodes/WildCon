// Homepage.jsx
import React, { useState } from "react";
import HomeHero from "../components/home/HomeHero";
import HomeAbout from "../components/home/HomeAbout";
import HomeGallery from "../components/home/HomeGallery";

const Homepage = () => {
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
    <div>
      <HomeHero isDarkMode={isDarkMode} onToggle={handleDarkModeToggle} />
      <HomeAbout />
      <HomeGallery />
    </div>
  );
};

export default Homepage;
