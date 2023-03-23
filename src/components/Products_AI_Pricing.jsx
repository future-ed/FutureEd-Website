import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { HashLink } from 'react-router-hash-link';

const PricingAI = () => {
  return (
    <div id = 'PricingAI' className='mx-auto w-full bg-white'>
                <h1 className='text-4xl py-16 font-bold text-center text-black'>Pricing Lesmodules</h1>
    <div className='w-full px-4 py-8 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <PricingCard emoji='📅' title='Rooster Generator' subtitle='€ op aanvraag' condition1='Aanpasbare constraints' condition2='Prijs afhankelijk van schoolgrootte' style = 'bg-[#00df9a] text-black rounded-md font-medium my-6 mx-auto px-6 py-3 ' />
        <PricingCard emoji='💬' title='AI Mentor' subtitle='€ op aanvraag' condition1='Functionaliteit en rapport naar wens' condition2='Prijs afhankelijk van functionaliteit' style = 'bg-black text-[#00df9a] rounded-md font-medium my-6 mx-auto px-6 py-3' />
        <PricingCard emoji='👨‍💻' title='Customized Features' subtitle='€ op aanvraag' condition1='Meeste problemen oplosbaar' condition2='Prijs bespreekbaar' style = 'bg-[#00df9a] text-black rounded-md font-medium my-6 mx-auto px-6 py-3' />
      </div>
    </div>
    </div>
  );
};

export default PricingAI;

export function PricingCard({ emoji, title, subtitle, condition1, condition2, style }) {
  return (
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <div className='text-center text-6xl'>{emoji}</div>
        <h2 className='text-2xl font-bold text-center py-8'>{title}</h2>
        <p className='text-center text-4xl font-bold'>{subtitle}</p>
        <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>{condition1}</p>
            <p className='py-2 border-b mx-8'>{condition2}</p>
        </div>
        <button className = {style} >
            <HashLink smooth to='/support/#Contact'  >Meer Informatie</HashLink>
        </button>
    </div>
  );
}