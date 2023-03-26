import React from "react";

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
          Laat leerlingen 10 jaar voorsprong krijgen op maatschappijgenoten
        </p>
        <a href="https://docs.google.com/forms/d/1EAAHF5Sm5Fw2548eh5jqTvVQLP3s_3_-RUqC6lEDaLQ/viewform?edit_requested=true">
          <button className='bg-green-gradient w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Vraag Modules Aan</button>
        </a> 
      </div>
      </div>
    </div>
  );
};

export default Hero;