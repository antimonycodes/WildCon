import React from "react";
import Frog from "./Frog";
import Koala from "./Koala";
import Owl from "./Owl";

const HomeAbout = () => {
  return (
    <div className="w-full h-full bg-[#02823F] px-8 py-12 text-white font-Lexend flex flex-col items-center mt-6">
      <h3
        className="text-center font-Lexend text-[32px] font-normal mb-14"
        style={{
          textShadow: "10px 4px 4px rgba(0, 0, 0, 0.5)", // X, Y, Blur, Color
        }}
      >
        Did you know?
      </h3>
      <Frog />
      <Koala />
      <Owl />
    </div>
  );
};

export default HomeAbout;
