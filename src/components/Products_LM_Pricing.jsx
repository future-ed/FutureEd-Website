import React from 'react';

const Abbos = () => {
  return (
    <div id = 'Abbos' className='mx-auto w-full bg-white'>
          <h1 className='text-4xl py-16 font-bold text-center text-black'>Pricing Lesmodules</h1>
    <div className='w-full px-4 py-8 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-3xl font-bold text-center py-8'>Basic🥉</h2>
              <p className='text-center text-4xl font-bold'>€9.99/maand</p>
              <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>6 modules</p>
                    <p className='py-2 border-b mx-8'>20 opdrachten</p>
                    <p className='py-2 border-b mx-8'>Geen feedback op opdrachten </p>
                    <p className='py-2 border-b mx-8'>Geen maandelijkse online Q&A sessie</p>
                    <p className='py-2 border-b mx-8'>Geen persoonlijke begeleiding</p>
                </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://docs.google.com/forms/d/1EAAHF5Sm5Fw2548eh5jqTvVQLP3s_3_-RUqC6lEDaLQ/viewform?edit_requested=true">Start</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-3xl font-bold text-center py-8'>Premium🥈</h2>
              <p className='text-center text-4xl font-bold'>€19.99/maand</p>
              <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>6 modules</p>
                    <p className='py-2 border-b mx-8'>20 opdrachten</p>
                    <p className='py-2 border-b mx-8'>Wel feedback op opdrachten </p>
                    <p className='py-2 border-b mx-8'>Geen maandelijkse online Q&A sessie</p>
                    <p className='py-2 border-b mx-8'>Geen persoonlijke begeleiding</p>
                </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://docs.google.com/forms/d/1EAAHF5Sm5Fw2548eh5jqTvVQLP3s_3_-RUqC6lEDaLQ/viewform?edit_requested=true">Start</a></button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-3xl font-bold text-center py-8'>Platinum🥇</h2>
              <p className='text-center text-4xl font-bold'>€29.99/maand</p>
              <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>6 modules</p>
                    <p className='py-2 border-b mx-8'>20 opdrachten</p>
                    <p className='py-2 border-b mx-8'>Wel feedback op opdrachten </p>
                    <p className='py-2 border-b mx-8'>Wel maandelijkse online Q&A sessie</p>
                    <p className='py-2 border-b mx-8'>Wel persoonlijke begeleiding</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://docs.google.com/forms/d/1EAAHF5Sm5Fw2548eh5jqTvVQLP3s_3_-RUqC6lEDaLQ/viewform?edit_requested=true">Start</a></button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Abbos;