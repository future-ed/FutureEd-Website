import React from 'react';
import Ai_image from '../assets/landing_ai.jpeg';
import { HashLink } from 'react-router-hash-link';

const Ai = () => {
  return (
    <div id = 'AI' className='w-full text-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='float-left h-[300px] w-[550px] mx-auto my-8' src={Ai_image} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>
            AI Features
        </p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            	
            </h1>
          <p>
          Ben je het zat om eindeloos te moeten worstelen met het samenvatten van ellendelange teksten, 
          het zoeken naar de juiste referenties of het bekijken van urenlange video's voor een paar belangrijke punten? 
          Goed nieuws: wij zijn bezig met het ontwikkelen van AI-functies die het studieproces eenvoudiger maken!
          </p>
          <HashLink smooth to='/products/#ProductAI' > 
          <button className='bg-[#00df9a] text-black  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
            Meer informatie 
          </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Ai;