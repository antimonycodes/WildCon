import React from "react";

const Koala = () => {
  return (
    <>
      <div className="flex gap-10 mb-[5rem]">
        <div className="basis-[40%]">
          <img
            src="/assets/koala.png"
            alt=""
            className=" w-full object-cover"
          />
        </div>
        <div className="basis-[60%] my-8">
          <h1 className="text-[42px] mb-4 mr-4 leading-[52.5px]">
            Frogs drink water through their <br /> skin
          </h1>
          <h3 className="text-[26px] leading-[30px]">
            They absorb water directly through their skin in an area known as
            the 'drinking patch' located on their belly and the underside of
            their thighs.
          </h3>
          <p className=" text-right text-[24px] mr-6">See more...</p>
        </div>
      </div>
    </>
  );
};

export default Koala;
