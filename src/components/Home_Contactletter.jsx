import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Contactletter = () => {
  return (
    <div className='sm: px-16 xl:px-0 bg-white'>
    <div className='w-full py-16 text-black px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4 mx-10'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Heb je interesse of wil je meer informatie?
          </h1>
          <p>
            Stuur ons een bericht en wij nemen zo snel mogelijk contact met je op.
          </p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            {/* <input
              className='p-3 flex w-full rounded-md text-black border-2 border-gray-300'
              type='email'
              placeholder='Enter Email'
            /> */}
            <button className='bg-black text-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
            <HashLink smooth to='/support/#Contact' >Neem contact op</HashLink>
            </button>
          </div>
          {/* <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contactletter;