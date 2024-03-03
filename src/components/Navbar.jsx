// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode/DarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    // document.documentElement.classList.toggle("dark");
    console.log("Dark Mode State:", !darkMode);
    console.log("html Element Classes:", document.documentElement.classList);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(() => {
  //   const storedTheme = localStorage.getItem("theme");
  //   return storedTheme === "dark";
  // });

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleDarkModeToggle = () => {
  //   const newTheme = "light" : "dark";
  //   setIsDarkMode(!isDarkMode);
  //   localStorage.setItem("theme", newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme);
  // };

  return (
    <div>
      {/* Static Navbar */}
      <div className="">
        <div className="flex items-center justify-between px-12 py-3 bg-white dark:bg-black">
          <div className="w-[120px] xl:w-[273px]">
            <Link to="/">
              <h1
                className="text-[1rem] xl:text-[3.5rem] bg-cover bg-center bg-clip-text text-transparent font-bold font-Kuolen w-full"
                style={{
                  backgroundImage: "url(/assets/logobg.png)",
                }}
              >
                WILDCON
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-16 text-black-200 list-none dark:text-white  text-[25px] font-Lexend ">
            <Link to="/">
              <li className=" text-[#078844] underline">Home</li>
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
          <div className=" flex items-center gap-4">
            <div className="bg-[#078844] border border-none rounded-2xl text-white text-xs px-4 py-2 ">
              Get a Quote
            </div>
            <div className=" border-l border-x-red-200">
              <DarkMode onClick={toggleDarkMode} />
            </div>
          </div>

          {/* Fixed Hamburger Menu */}
          <div className="md:hidden isMenuOpen ">
            <button
              onClick={handleMenuToggle}
              className="fixed top-[2.7rem] right-3 text-3xl cursor-pointer"
            >
              {isMenuOpen ? (
                <FaTimes className=" dark:text-white" />
              ) : (
                <FaBars className=" dark:text-white" />
              )}
            </button>
            {isMenuOpen && (
              <div
                className="fixed top-[5rem] right-0 w-[5rem] h-[15rem] 
              dark:bg-gray-800 bg-white
            bg-opacity-70 dark:bg-opacity-70 z-10"
              >
                <ul
                  className="text-black-200 
                
              text-[25px] font-Lexend "
                >
                  <Link to="/">
                    <li
                      className="text-[#078844] 
                   underline"
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
