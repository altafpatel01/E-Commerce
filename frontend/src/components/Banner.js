import React from "react";
import img1 from "../asset/Banners/Rectangle 1.png";
import logo from "../asset/images/Meubel House_Logos-05.png";
const Banner = ({ text }) => {
  return (
    <div className=" text-black   border w-full h-64 relative">
      <img src={img1} alt="banner" className="w-full h-full object-cover" />
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/* <div className="flex flex-col h-32 items-center justify-center  text-center"> */}
        <img src={logo} alt="banner" className=" mx-auto " />
        <h1 className="text-4xl my-2 font-bold">{text}</h1>
        <div>
          <span className="text-gray-700">Home</span>
          <span className="text-gray-500">{" > "}</span>
          <span className="text-gray-700">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
