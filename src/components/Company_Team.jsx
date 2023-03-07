import React from 'react';
import Module from '../assets/landing_modules.jpeg';

const Team = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='h-[300px] w-[550px] mx-auto my-8'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            	From students for students
            </h1>
        </div>
        <img className='flex flex-col justify-center py-10' src={Module} alt='/' />
      </div>
    </div>
  );
};

export default Team;