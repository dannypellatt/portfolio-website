import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="bg-black w-screen flex items-center justify-center grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
      
      <div className="pt-8 pl-4 md:p-12 text-left md:m-10">
        <h1 className="text-6xl lg:text-8xl font-semibold text-white ">
          <span className="pulsate">D</span>anny
        </h1>
        <h1 className="text-6xl lg:text-8xl font-semibold text-white mb-2">
          P<span className="pulsate">e</span>llatt,
        </h1>
        <h1 className="text-6xl lg:text-8xl font-semibold text-white">
          De<span className="pulsate">v</span>eloper
        </h1>
      </div>

      <div className="text-2xl md:text-3xl text-white font-normal m-8">
        <h2 className='pb-4 md:py-12'>I build accessible and engaging digital platforms that delight users and drive business growth.</h2>
        <button className="btn btn-xs btn-lg bg-black text-white font-light rounded-full hover:text-black hover:bg-white"><Link href="#contact">Get in touch</Link></button>
      </div>

   </div>    
  );
};

export default HeroSection;
