import React from 'react';
import Module from '../assets/landing_modules.jpeg';
import { HashLink } from 'react-router-hash-link';

const ModulesHome = () => {
  return (
    <div id='Modules' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='float-left h-[300px] w-[550px] mx-auto my-8' src={Module} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>
            Lesmodules
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            	Science of life
          </h1>
          <p>
          Wil je jouw studenten voorbereiden op de toekomst? Dan is onze dienst perfect voor jou! Wij zorgen ervoor dat je geen belangrijke informatie mist die je niet op school mee krijgt!
          </p>
          <HashLink smooth to='/products/#ProductModule' >
          <button className='bg-black text-[#00df9a]  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Meer informatie
          </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default ModulesHome;
