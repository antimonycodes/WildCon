import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div>
      {/* Static Navbar */}
      <div className="relative">
        <div className="flex items-center justify-between px-12 py-3 bg-white shadow-md">
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
          {/* List for larger screens */}
          <div className="hidden md:flex items-center gap-16 text-black-200 text-[25px] font-Lexend font-light">
            <Link to="/">
              <li className="text-[#078844] underline">Home</li>
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
          {/* Get a Quote button */}
          <div className="hidden md:block">
            <div className="bg-[#078844] border border-none rounded-2xl text-white text-xs px-4 py-2">
              Get a Quote
            </div>
          </div>
          <DarkMode />
        </div>
      </div>
      {/* Fixed Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          className="fixed top-[2.7rem] right-3 text-3xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isMenuOpen && (
          <div className="fixed top-[5rem] right-0 w-[5rem] h-[15rem] bg-white bg-opacity-70 z-10">
            {/* <div className="absolute top-16 right-0 bg-white shadow-md"> */}
            <ul className="text-black-200 text-[25px] font-Lexend font-light">
              <Link to="/">
                <li
                  className="text-[#078844] underline"
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
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
