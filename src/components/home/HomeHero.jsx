import React from "react";

const HomeHero = () => {
  return (
    <div className="w-full h-[600px] bg-home-bg bg-cover bg-center bg-no-repeat ">
      <div class="absolute w-full h-[600px] bg-gradient-to-tr from-black "></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1
          className="text-[64px] text-white dark:text-black mb-4 font-Lexend font-extrabold leading-[80px]"
          style={{
            WebkitTextStroke: "2px #037439",
          }}
        >
          Preserve And Protect Wildlife
        </h1>
        <p className="text-white dark:text-zinc-950 font-Lexend text-[28px]">
          Wildlife should not only be consumed, they should be conserved.
        </p>
      </div>
      {/*  */}
    </div>
  );
};

export default HomeHero;
