import React from 'react'
import hero1 from '../public/hero1.webp';
import image1 from '../public/units.webp';
import image2 from '../public/studio_apartment.webp';
import image3 from '../public/2_bedroom.webp'
import Image from 'next/image';
const OurContainar = () => {
    return (
        <div className='bg-[#16273b] py-20'>
            <h1 className='text-5xl font-bold text-center text-white'>OUR <span className='text-[#BCA468]'>CONTAINERS</span></h1>
            <p className='text-lg text-gray-400 font-normal text-center mt-4 mb-10'>Discover our range of high-quality shipping containers designed for durability and versatility.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:p-0 sm:p-8  p-7 max-w-4xl mx-auto'>
                <div className="relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 hover:bg-primary-foreground/10 transition-all group" style={{ opacity: 1, transform: 'none' }}>
                    <div className="absolute top-4 right-4"><span className="text-xs font-heading uppercase tracking-widest text-[#BCA468] bg-blue-900 px-3 py-1 rounded-full" data-ninja-font="oswald_regular_normal_t3n3y">Sale &amp; Rent</span></div>
                    <div className="w-full h-auto mb-5 rounded-md bg-accent/10 flex items-center justify-center">
                    <Image src={image1} alt="Used Container"   className="w-full h-auto text-[#BCA468]" />  
                    </div>
                    <h3 className="text-2xl font-heading uppercase text-primary-foreground mb-3" data-ninja-font="oswald_regular_normal_t3n3y">Used Containers</h3><p className="text-primary-foreground/60 leading-relaxed" data-ninja-font="system-ui_regular_normal_u3lzd">Affordable pre-owned containers in great condition. Perfect for storage, workshops, and more.</p></div>
                <div className="relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 hover:bg-primary-foreground/10 transition-all group" style={{ opacity: 1, transform: 'none' }}>
                    <div className="absolute top-4 right-4"><span className="text-xs font-heading uppercase tracking-widest text-[#BCA468] bg-blue-900 px-3 py-1 rounded-full" data-ninja-font="oswald_regular_normal_t3n3y">Sale &amp; Rent</span></div>
 <div className="w-full h-auto mb-5 rounded-md bg-accent/10 flex items-center justify-center">
                    <Image src={hero1} alt="Used Container"   className="w-full h-auto text-[#BCA468]" />  
                    </div>                    <h3 className="text-2xl font-heading uppercase text-primary-foreground mb-3" data-ninja-font="oswald_regular_normal_t3n3y">Brand New Containers</h3><p className="text-primary-foreground/60 leading-relaxed" data-ninja-font="system-ui_regular_normal_u3lzd">Factory-fresh containers with zero wear. Ideal for long-term projects requiring pristine condition.</p></div>
                <div className="relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 hover:bg-primary-foreground/10 transition-all group" style={{ opacity: 1, transform: 'none' }}><div className="absolute top-4 right-4">
                    <span className="text-xs font-heading uppercase tracking-widest text-[#BCA468] bg-blue-900 px-3 py-1 rounded-full" data-ninja-font="oswald_regular_normal_t3n3y">Custom Built</span></div>
 <div className="w-full h-auto mb-5 rounded-md bg-accent/10 flex items-center justify-center">
                    <Image src={image2} alt="Used Container"   className="w-full h-auto text-[#BCA468]" />  
                    </div>
                                        <h3 className="text-2xl font-heading uppercase text-primary-foreground mb-3" data-ninja-font="oswald_regular_normal_t3n3y">Modified Containers</h3>
                    <p className="text-primary-foreground/60 leading-relaxed" data-ninja-font="system-ui_regular_normal_u3lzd">Custom-built containers tailored to your needs — offices, pop-up shops, workshops, and more.</p></div>
                <div className="relative bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8 hover:bg-primary-foreground/10 transition-all group" style={{ opacity: 1, transform: 'none' }}>
                    <div className="absolute top-4 right-4"><span className="text-xs font-heading uppercase tracking-widest text-[#BCA468] bg-blue-900 px-3 py-1 rounded-full" data-ninja-font="oswald_regular_normal_t3n3y">Sale &amp; Rent</span></div>
 <div className="w-full h-auto mb-5 rounded-md bg-accent/10 flex items-center justify-center">
                    <Image src={image3} alt="Used Container"   className="w-full h-auto text-[#BCA468]" />  
                    </div>                    <h3 className="text-2xl font-heading uppercase text-primary-foreground mb-3" data-ninja-font="oswald_regular_normal_t3n3y">Refurbished Containers</h3>
                    <p className="text-primary-foreground/60 leading-relaxed" data-ninja-font="system-ui_regular_normal_u3lzd">Professionally restored containers that look and perform like new at a fraction of the cost.</p></div>
            </div>

        </div>
    )
}

export default OurContainar