// DarkMode.jsx
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = ({ isDarkMode, onToggle }) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={onToggle}>
      <div className="relative">
        <div className={`w-10 h-6 bg-gray-200 dark:bg-gray-800 rounded-full`} />
        <div
          className={`w-5 h-5 bg-black dark:bg-white rounded-full absolute top-1 left-1 transition-transform duration-300 transform translate-x-${
            isDarkMode ? "4" : "0"
          }`}
        />
      </div>
      <div
        className={`ml-2 ${
          isDarkMode ? "text-gray-200" : "text-gray-800 dark:text-gray-200"
        }`}
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </div>
    </div>
  );
};

export default DarkMode;
