/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
  return (
    <div className='backdrop-blur-lg drop-shadow-xl fixed z-[999] w-full px-20 py-5 flex justify-between items-center font-["Neue Montreal"]'>
      <div className="logo">
        <span className="text-[2.5vw] font-semibold">navi</span>
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-[1.25vw] capitalize font-normal ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
