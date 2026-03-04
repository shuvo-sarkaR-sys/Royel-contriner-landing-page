"use client"
import React from 'react'
import '../app/globals.css'
import Image from 'next/image'
import HeroImage from '../public/heroimage.jpg';
import hero1 from '../public/hero1.webp';
import hero2 from '../public/units.webp';
import hero3 from '../public/hero3.webp';
const HeroSection = () => {
  return (
    <div  className='relative'>
        <div className='flex h-[75vh] md:h-[80vh]' >
            <Image src={hero1} alt="20ft Container" className='w-1/3 overflow-hidden object-cover '/>    
            <Image src={hero2} alt="Hero Image" className='w-1/3 object-cover'/>
            <Image src={hero3} alt="Hero Image" className='w-1/3 object-cover'/>

         </div>
        <div className='absolute w-full top-0 h-[75vh] md:h-[80vh] bg-black/60 pt-16 md:pt-12 pl-5 md:pl-24 text-white px-4'>
        <h1 className='md:text-7xl text-4xl font-oswald text-white  font-extrabold'>NEED A CONTAINER? <span className='text-[#B8A472]'>BUY <br className='md:block hidden' /> OR RENT</span>-- {"WE'VE"} GOT YOU <br className='md:block hidden'/> COVERED.</h1>
        <p className='text-lg font-normal mt-4 md:mt-8'>{"Halifax's"} trusted source for new, used & refurbished shipping containers. Whether you need storage, workspace, or <br className='md:block hidden' /> a custom build — Royal Rentals delivers.</p>
        <div className='mt-8 flex flex-wrap font-normal gap-5'>
            <a className="text-xl bg-[#BCA468] hover:bg-yellow-600 text-black font-semibold rounded-md border-white md:w-auto w-full text-center px-20 md:px-8 py-4" href="">GET A FREE QUOTE</a>
            <a className="text-xl border font-semibold hover:bg-white/10 rounded-md border-gray-400 md:w-auto w-full text-center px-20 md:px-8 py-4" href="">VIEW CONTAINERS</a>
        </div>
        </div>
    </div>
  )
}

export default HeroSection