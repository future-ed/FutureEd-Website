import React from 'react';
import Module from '../assets/landing_modules.jpeg';
import { HashLink } from 'react-router-hash-link';

const Modules = () => {
  return (
    <div id='Modules' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='h-[300px] w-[550px] mx-auto my-8'>
          <p className='text-[#00df9a] font-bold '>
            Lesmodules
        </p>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>
            	{/* Personal Finance, Taxes, Transport, Housing, Insurance, and Pension */}
              Science of life
            </h1>
          <p>
            {/* These are the 6 main topics that everyone encounters in life and we cover them all in our modules.
            We provide you with the knowledge and tools to inspire you to take control of your life and finances.
            Start finding the way you want to live by joining this tour! */}
            Voel je alsof je belangrijke informatie mist over persoonlijke financiën, persoonlijke ontwikkeling, verzekeringen, pensioen, huisvesting en auto's? 
            Dan is onze dienst perfect voor jou! Wij zorgen ervoor dat je niet belangrijke informatie mist die je niet op school mee krijgt!

          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
          <HashLink smooth to='/products/#ProductModule' > Meer informatie </HashLink>
          </button>
        </div>
        <img className='flex flex-col justify-center py-10' src={Module} alt='/' />
      </div>
    </div>
  );
};

export default Modules;