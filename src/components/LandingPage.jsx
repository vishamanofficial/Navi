/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="h-auto w-auto bg-[#f1f1f1]  pt-1">
      <div className="textStructure mt-28 p-20">
        {["WE CREATE", "EYE-OPENING", "WEBSITES"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex ">
              {index == 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[1vw] w-[8vw] h-[5.4vw] rounded-md relative top-[1vw] overflow-hidden"
                ><img className="w-full h-full object-cover" src="https://digifloat.io/wp-content/uploads/2020/01/icons8-980x515.png" alt="" /></motion.div>
              )}
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
      <div className="border-t-[1px] border-zinc-600 mt-7 mb-9 flex justify-between items-center px-20 py-5 pb-10">
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
