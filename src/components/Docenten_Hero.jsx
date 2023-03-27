import React from "react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <div className='text-white custom-img-school-hero'>
      <div className='bg-black/70'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-6 uppercase'>
          {/* Work smarter, not harder with our game-changing products. */}
          Bereid de leerlingen voor op het leven na school met FutureEd
        </p>
        <h1 className='md:text-6xl text-white sm:text-5xl text-4xl font-bold md:py-6'>
          Ontdek onze oplossingen
        </h1>
        
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Modernizeer tegelijkertijd het onderwijs met FutureEd's AI oplossingen
        </p>
        <HashLink smooth to='/support/#Contact'>
          <button className='bg-green-gradient w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Vraag Modules Aan</button>
        </HashLink> 
      </div>
      </div>
    </div>
  );
};

export default Hero;