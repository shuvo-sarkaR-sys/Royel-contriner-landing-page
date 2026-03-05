"use client"
import React from 'react'

const Service = () => {
  return (
    <div className='py-20'>
        <h1 className='md:text-5xl text-4xl font-bold text-center '>WHY ROYAL RENTALS <span className='text-[#BCA468]'>BEST?</span></h1>
        <p className='text-lg text-color text-center mt-4'>{"We're Halifax's go-to for reliable, affordable container solutions."}</p>
        <div className='md:px-20 px-7 pt-12 flex gap-10 justify-center flex-wrap '>
            <div className=' flex flex-col  box-1  rounded-xl border-[#fdf6e6] items-center text-center'>
                <div className='bg-[#BCA468] border p-3 icon-1 rounded-full hover:bg-yellow-300 flex items-center justify-center transition-colors'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 text-[#BCA468]    ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>
</div>
                <h1 className='text-2xl font-semibold mt-4 font-oswald'>Quality Guaranteed</h1>
                <p className='text-color text-md '>Every container is thoroughly inspected <br />to ensure it meets our high-quality <br /> standards before delivery.</p>  
            </div>
              <div className=' flex flex-col box-1  rounded-xl border-[#fdf6e6] items-center text-center'>
                <div className='bg-[#BCA468] border p-3 icon-1 rounded-full hover:bg-yellow-300 flex items-center justify-center transition-colors'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-truck text-[#BCA468]" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
</div>
                <h1 className='text-2xl font-semibold mt-4 font-oswald'>Fast Delivery</h1>
                <p className='text-color  text-md'>Local Halifax-based operations mean <br />faster turnaround and delivery across<br /> Nova Scotia.</p>  
            </div>
              <div className=' flex flex-col box-1  rounded-xl border-[#fdf6e6] items-center text-center'>
                <div className='bg-[#BCA468] border p-3 icon-1 rounded-full hover:bg-yellow-300 flex items-center justify-center  text-[#BCA468] transition-colors'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-[#BCA468]    ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

</div>
                <h1 className='text-2xl font-semibold mt-4 font-oswald'>Best Pricing</h1>
                <p className='text-color  text-md'>Competitive rates on new, used, and <br />refurbished containers — buy or rent <br /> to fit your budget.</p>  
            </div>
              <div className=' flex flex-col box-1 border rounded-xl border-[#fdf6e6] items-center text-center'>
                <div className='bg-[#BCA468]  p-3 icon-1 rounded-full hover:bg-yellow-300 flex items-center justify-center transition-colors'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-[#BCA468]   ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

</div>
                <h1 className='text-2xl font-semibold mt-4 font-oswald'>Flexible Rentals</h1>
                <p className='text-color text-md '>Short-term or long-term rental options <br />with no hidden fees. Scale up or down <br /> as you need.</p>  
            </div>
        </div>
    </div>
  )
}

export default Service