/* eslint-disable no-unused-vars */
import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Ad from "./components/Ad";
import Review from "./components/Review";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-black bg-[#f1f1f1]">
      <Navbar/>
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Review />
      <Cards />
      <Ad />
      <Footer />
    </div>
  );
};

export default App;
