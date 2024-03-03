import React from "react";
import "./HomeGallery.css";
const HomeGallery = () => {
  return (
    <div className=" w-full h-fit bg-[#D8E4FC] px-10 py-12">
      <h1 className=" text-center font-bold font-Lexand">Gallery</h1>
      <h4 className=" text-center  font-Lexand font-normal mb-4">
        Scroll through beautiful images of Wild Animals from different classes.
      </h4>
      <div className="grid">
        {/* <div className="grid-images"> */}
        <img src="/assets/buffalo.png" alt="buffalo " className="buffalo" />
        <img src="/assets/lion.png" alt="buffalo" className="lion" />
        <img src="/assets/zebra.png" alt="buffalo" className="zebra" />
        <img src="/assets/drill-monkey.png" alt="buffalo" className="monkey" />
        <img src="/assets/antelope.png" alt="buffalo" className="antelope" />
        <img src="/assets/gazelle.png" alt="buffalo" className="gazelle" />
        <img src="/assets/leopard.png" alt="buffalo" className="leopard" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomeGallery;
