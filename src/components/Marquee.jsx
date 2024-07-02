/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (

    <div data-scroll data-scroll-section data-scroll-speed=".1"  className="w-full py-24 rounded-t-[2vw] text-white bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-[#025b4d] tracking-tighter flex gap-16 whitespace-nowrap overflow-hidden">
      {["WE ARE NAVI", "WE ARE NAVI","WE ARE NAVI", "WE ARE NAVI"].map((item, idx) => (
          <motion.h1
            key={idx}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className="text-[25vw] font-['Founders Grotesk'] tracking-tighter leading-none uppercase font-semibold -mt-[2.5vw]"
          >
            {item}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
