/* eslint-disable no-unused-vars */
import React from 'react'

const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-auto pt-32 pb-32 flex items-center px-20 gap-5'>
      <div className='cardcontainer w-1/2 h-[60vh]'>
        <div className='card relative w-full h-full bg-[#004D43] rounded-2xl flex items-center justify-center'>
            <span className='text-[#CDEA68] text-[4vw] font-medium' >navi</span>
            <button className='absolute left-5 bottom-10 text-[#CDEA68] text-[1vw] px-5 py-1 border-[1px] border-[#CDEA68] rounded-full'>&copy; 2019-2022</button>
        </div>
      </div>
      <div className='cardcontainer w-1/2 h-[60vh] flex gap-5'>
      <div className='card relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center'>
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
      <button className='absolute left-5 bottom-10 text-white text-[1vw] px-5 py-1 border-[1px] border-white rounded-full'>RATING 5.0 ON CLUTCH</button>   
      </div>
      <div className='card relative w-1/2 h-full bg-[#212121] rounded-2xl flex items-center justify-center'>
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
      <button className='absolute left-5 bottom-10 text-white text-[1vw] px-5 py-1 border-[1px] border-white rounded-full'>BUSINESS BOOTCAMP ALUMNI</button>   
      </div>
     
      </div>
    </div>
  )
}

export default Cards
