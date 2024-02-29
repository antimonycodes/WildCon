// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDarkModeToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      {/* Static Navbar */}
      <div className={`relative ${isDarkMode ? "dark" : ""}`}>
        <div
          className={`flex items-center justify-between px-12 py-3 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="w-[273px]">
            <Link to="/">
              <h1
                className="text-[3.5rem] bg-cover bg-center bg-clip-text text-transparent font-bold font-Kuolen w-full"
                style={{
                  backgroundImage: "url(/assets/logobg.png)",
                }}
              >
                WILDCON
              </h1>
            </Link>
          </div>
          <div
            className={`hidden md:flex items-center gap-16 text-black-200 list-none ${
              isDarkMode ? "dark:text-white" : ""
            } text-[25px] font-Lexend font-light`}
          >
            <Link to="/">
              <li
                className={`text-[#078844] ${
                  isDarkMode ? "dark:underline" : "underline"
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/gallery">
              <li>Gallery</li>
            </Link>
            <Link to="/explore">
              <li>Explore</li>
            </Link>
            <Link to="/about">
              <li>About us</li>
            </Link>
          </div>
          <div className="hidden md:block">
            <div
              className={`bg-[#078844] border border-none rounded-2xl text-white text-xs px-4 py-2 ${
                isDarkMode ? "dark:bg-gray-600" : ""
              }`}
            >
              Get a Quote
            </div>
          </div>
          <DarkMode isDarkMode={isDarkMode} onToggle={handleDarkModeToggle} />
        </div>
      </div>
      {/* Fixed Hamburger Menu */}
      <div className={`md:hidden ${isMenuOpen ? "dark" : ""}`}>
        <button
          onClick={handleMenuToggle}
          className="fixed top-[2.7rem] right-3 text-3xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isMenuOpen && (
          <div
            className={`fixed top-[5rem] right-0 w-[5rem] h-[15rem] ${
              isDarkMode ? "dark:bg-gray-800" : "bg-white"
            } bg-opacity-70 dark:bg-opacity-70 z-10`}
          >
            <ul
              className={`text-black-200 ${
                isDarkMode ? "dark:text-white" : ""
              } text-[25px] font-Lexend font-light`}
            >
              <Link to="/">
                <li
                  className={`text-[#078844] ${
                    isDarkMode ? "dark:underline" : "underline"
                  }`}
                  onClick={handleMenuToggle}
                >
                  Home
                </li>
              </Link>
              <Link to="/gallery">
                <li onClick={handleMenuToggle}>Gallery</li>
              </Link>
              <Link to="/explore">
                <li onClick={handleMenuToggle}>Explore</li>
              </Link>
              <Link to="/about">
                <li onClick={handleMenuToggle}>About us</li>
              </Link>
            </ul>
            {/* <DarkMode isDarkMode={isDarkMode} onToggle={handleDarkModeToggle} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
