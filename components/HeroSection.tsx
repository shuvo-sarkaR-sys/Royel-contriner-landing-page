"use client"
import React from 'react'
import '../app/globals.css'
import Image from 'next/image'
import HeroImage from '../public/heroimage.jpg';
const HeroSection = () => {
  return (
    <div  className='relative'>
        <div >
            <Image src={HeroImage} alt="Hero Image" className='w-full object-cover h-[75vh] md:h-[80vh]'/>
         </div>
        <div className='absolute w-full top-0 h-[75vh] md:h-[80vh] bg-black/60 pt-16 md:pt-12 pl-5 md:pl-24 text-white px-4'>
        <h1 className='md:text-7xl text-4xl font-oswald text-white  font-extrabold'>NEED A CONTAINER? <span className='text-yellow-500'>BUY <br /> OR RENT</span>-- WE'VE GOT YOU <br/> COVERED.</h1>
        <p className='text-lg font-normal mt-8'>Halifax's trusted source for new, used & refurbished shipping containers. Whether you need storage, workspace, or <br /> a custom build — Royal Rentals delivers.</p>
        <div className='mt-8 flex flex-wrap font-normal gap-5'>
            <a className="text-xl bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md border-white md:w-auto w-full text-center px-20 md:px-8 py-4" href="">GET A FREE QUOTE</a>
            <a className="text-xl border font-semibold hover:bg-white/10 rounded-md border-gray-400 md:w-auto w-full text-center px-20 md:px-8 py-4" href="">VIEW CONTAINERS</a>
        </div>
        </div>
    </div>
  )
}

export default HeroSection