import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Abbos = () => {
  return (
    <div id = 'AbbosDocenten' className='mx-auto w-full bg-white'>
                <h1 className='text-4xl py-16 font-bold text-center text-black'>Pricing Lesmodules</h1>
    <div className='w-full px-4 py-8 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-3xl font-bold text-center py-8'>Basic🥉</h2>
              <p className='text-center text-4xl font-bold'>€399.99/maand</p>
              <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>6 modules</p>
                    <p className='py-2 border-b mx-8'>20 opdrachten</p>
                    <p className='py-2 border-b mx-8'>Standaard pakket </p>
                    <p className='py-2 border-b mx-8'>3 jaar contract</p>
                    <p className='py-2 border-b mx-8'>Account voor alleen docenten</p>
                    <p className='py-2 border-b mx-8'>Geen account voor leerlingen</p>
                </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><HashLink smooth to='/support/#Contact' >Start</HashLink></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-3xl font-bold text-center py-8'>Premium🥈</h2>
              <p className='text-center text-4xl font-bold'>€499.99/maand</p>
              <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>6 modules</p>
                    <p className='py-2 border-b mx-8'>20 opdrachten</p>
                    <p className='py-2 border-b mx-8'>Op maat aanpassingen </p>
                    <p className='py-2 border-b mx-8'>3 jaar contract</p>
                    <p className='py-2 border-b mx-8'>Account voor docenten</p>
                    <p className='py-2 border-b mx-8'>Account voor leerlingen</p>
                </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><HashLink smooth to='/support/#Contact' >Start</HashLink></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-3xl font-bold text-center py-8'>Platinum🥇</h2>
              <p className='text-center text-4xl font-bold'>€ op aanvraag</p>
              <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>6+ modules</p>
                    <p className='py-2 border-b mx-8'>20+ opdrachten</p>
                    <p className='py-2 border-b mx-8'>Toevoegingen naar wens</p>
                    <p className='py-2 border-b mx-8'>3 jaar contract</p>
                    <p className='py-2 border-b mx-8'>Account voor docenten</p>
                    <p className='py-2 border-b mx-8'>Account voor leerlingen</p>
                </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><HashLink smooth to='/support/#Contact' >Start</HashLink></button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Abbos;