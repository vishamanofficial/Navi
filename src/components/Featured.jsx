/* eslint-disable no-unused-vars */
import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-10">
        <h1 className='font-["Neue Montreal"] text-[4vw] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="casrds flex w-full gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[80vh]">
            <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-[20%] text-[#CDEA68] z-[9] text-[7vw] font-bold">
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-5 w-5 rounded-full bg-black"></div>
              <span className="text-[1.2vw]">FYDE</span>
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="flex items-center  gap-3 m-5 ml-0">  
            <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">AUDIT</span>
            <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">COPYWRITING</span>
            <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">SALES DESK</span>
            <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">SLIDES DESIGN</span>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[80vh]">
            <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-[20%] text-[#CDEA68] z-[9] text-[7vw] font-bold">
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-5 w-5 rounded-full bg-black"></div>
              <span className="text-[1.2vw]">VISE</span>
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center  gap-3 m-5 ml-0">  
            <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">AGENCY</span>
            <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">COMPANY PRESENTATION</span>
            </div>
          </div>
        </div>


        <div className="casrds flex w-full gap-10 mt-40">
          <div className="cardcontainer relative w-1/2 h-[80vh]">
            <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-[20%] text-[#CDEA68] z-[9] text-[7vw] font-bold">
              {"TRAWA".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-5 w-5 rounded-full bg-black"></div>
              <span className="text-[1.2vw]">TRAWA</span>
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center  gap-3 m-5 ml-0">  
            <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">BRANDED IDENTITY</span>
            <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">DESIGN RESSEARCH</span>
            <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">INVESTER DECK</span>
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[80vh] mb-32">
            <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-[5%] text-[#CDEA68] z-[9] text-[7vw] font-bold leading-none">
              {"BLEND".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-5 w-5 rounded-full bg-black"></div>
              <span className="text-[1.2vw]">PREMIUM BLEND</span>
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className="flex items-center  gap-3 m-5 ml-0">  
              <span className="text-[1vw] font-medium py-1 px-5 border-[1px] rounded-3xl border-zinc-800">BRANDED TEMPLATE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
