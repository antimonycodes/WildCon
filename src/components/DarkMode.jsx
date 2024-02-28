import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Replace with the appropriate icons from the library

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark" : ""}`}>
      <button
        onClick={handleModeToggle}
        className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md"
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </div>
  );
};

export default DarkMode;
