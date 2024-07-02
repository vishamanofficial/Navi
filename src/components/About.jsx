/* eslint-disable no-unused-vars */
import React from 'react'

const About = () => { 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full py-24 px-20 bg-[#CDEA68] rounded-t-[2vw] '>
        <div className='mr-[14vw] '>
            <h1 className='font-["Neue Montreal"] text-[3.5vw] leading-[3.5vw]'>Navi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        </div>
        
        <div className='w-full border-t-[1px] pt-10 mt-20 border-[#9aa964] flex'>
            <div className='w-1/2'>
                <p className='text-[1.2vw]'>What you can expect:</p>
            </div>


            <div className='w-1/2 flex'>
            <div className='w-1/2'>
            <p className='text-[1.2vw]'>
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
            
            <p className='text-[1.2vw] mt-5'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className='w-1/2 text-[1.2vw] pl-48 pt-20'>
                <p className='pb-5'>S:</p>
                <p>Instagram</p>
                <p>Behance</p>
                <p>Facebook</p>
                <p>Linkedin</p>
            </div>
            </div>
        </div>


        <div className='w-full border-t-[1px] pt-10 mt-32 flex gap-5 border-[#9aa964]'>
            <div className='w-1/2'>
                <h1 className='text-[4vw] '>Our approach : </h1>
                <button className='flex items-center gap-10 mt-5 px-10 py-4 bg-zinc-900 text-white rounded-full'>READ MORE
                    <div className='w-3 h-3 rounded-full bg-slate-100'></div>
                </button>
            </div>
            <div className='w-1/2'>
                <img className='h-[70vh] rounded-3xl w-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
