import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-[#16273b] flex justify-between flex-wrap items-center py-3 md:py-0 px-6 md:px-20 '>
<span className='text-white text-5xl flex py-10 md:py-16 font-medium'>R<Image src="/img/favicons/royal.ico"  alt="logo for footer" width="47" height="20"  />YAL</span>
<div className=''>
    <p className='text-gray-400 '>Halifax, Nova Scotia, Canada</p>
  <p className='text-gray-600  '>© 2026 Royal Rentals. All rights reserved.</p>
  </div>
    </div>
  )
}

export default Footer