/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="bg-[#f1f1f1] w-full h-[120vh] p-20 pb-10 flex"
    >
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="text-[7vw] leading-none font-semibold tracking-tighter">
          <h1 className="-mb-5">EYE-</h1>
          <h1>OPENING</h1>
        </div>
        <span className="text-[3vw] font-semibold">navi</span>
      </div>

      <div className="w-1/2">
        <div className="text-[7vw] leading-none font-semibold tracking-tighter">
          <h1>WEBSITES</h1>
        </div>
        <div className="w-full flex">
        <div className="w-1/2">
        <div className="text-[1.2vw]  pt-10">
          <p className="pb-5">S:</p>
          <p>Instagram</p>
          <p>Behance</p>
          <p>Facebook</p>
          <p>Linkedin</p>
        </div>
        <div className="text-[1.2vw] pt-10  ">
          <p className="pb-5">L:</p>
          <p>202-1965 W 4th Ave</p>
          <p>Vancouver, Canada</p>
        </div>
        <div className="text-[1.2vw] pt-10">
          <p className="pb-5">E:</p>
          <p>vishamanofficial@gmail.com</p>
          <p className="text-[#C1C1C1]">
            © navi design 2024. Legal Terms
          </p>
        </div>
        </div>
        <div className="w-1/2 flex items-center justify-end">
        <div className="text-[1.2vw]  pt-10">
          <p className="pb-5">M:</p>
          <p>Home</p>
          <p>Services</p>
          <p>Our Work</p>
          <p>About us</p>
          <p>Insights</p>
          <p>Contact us</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
