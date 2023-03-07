import React from "react";
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='text-white custom-img-product-hero'>
      <div className='bg-black/70'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-6 uppercase'>
          {/* Work smarter, not harder with our game-changing products. */}
          Bereid je volledig voor op het echte leven met onze game-changing producten
        </p>
        <h1 className='md:text-6xl text-white sm:text-5xl text-4xl font-bold md:py-6'>
          Onze Producten
        </h1>
        
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
            Learn smarter, Learn faster, Learn better
        </p>
        <button className='bg-green-gradient w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'><Link to='/support'>Meld je aan</Link> </button>
      </div>
      </div>
    </div>
  );
};

export default Hero;