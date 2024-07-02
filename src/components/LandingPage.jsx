/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="h-auto w-auto bg-[#f1f1f1]  pt-1">
      <div className="textStructure mt-28 p-20">
        {["WE CREATE", "EYE-OPENING", "WEBSITES"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex ">
              {index == 1 && (<div className="mr-[1vw] w-[8vw] rounded-md h-[5.4vw] bg-red-400 relative top-[1vw]" ></div>)}
              <h1
              key={index}
              className="text-[7.5vw] uppercase leading-[6.5vw] tracking-tighter font-['Founders Grotesk'] font-medium"
            >
              {item}
            </h1>
            </div>
            
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-7 flex justify-between items-center px-20 py-5 pb-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="font-normal tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-600 font-normal text-md capitalize rounded-full">
            <p>START THE PROJECT</p>
          </div>
          <div className="w-10 h-10 border-[2px] border-zinc-600 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
