import React from 'react';
import Module from '../assets/landing_modules.jpeg';
import { HashLink } from 'react-router-hash-link';

const ModulesHome = () => {
  return (
    <div id='ModulesDocenten' className='w-full bg-white py-16 px-4'>
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
          Wil je jouw leerlingen voorbereiden op de toekomst in de maatschappij? Dan is onze dienst perfect voor jou! Wij hebben unieke en interactieve lesmodules ontworpen om leerlingen een introductie te geven voor de leven na je schooltijd.
          </p>
          <HashLink smooth to='/products-schools/#ProductModuleDocenten' >
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
