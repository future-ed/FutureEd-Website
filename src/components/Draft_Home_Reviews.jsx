import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Reviews = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='h-[300px] w-[550px] mx-auto my-8'>
          <p className='text-[#00df9a] font-bold '>
            Reviews
        </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            	Test
            </h1>
          <p>
            Test
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>More information</button>
        </div>
        <img className='flex flex-col justify-center' src={Laptop} alt='/' />
      </div>
    </div>
  );
};

export default Reviews;