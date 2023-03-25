import React from "react";
import { HashLink } from "react-router-hash-link";
// import PandaAnalytics from '../assets/panda-analytics-logo.png';
// import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='text-white custom-img'>
      <div className='bg-black/70'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-6 uppercase'>
         {/* Your most valuable asset is your time and mind - invest in it wisely! */}
         Je meest waardevolle bezittingen zijn je tijd en geest - investeer er verstandig in!
        </p>
        <h1 className='md:text-6xl text-white sm:text-5xl text-4xl font-bold md:py-6'>
          {/* Invest In Your Future */}
          FutureEd: de toekomst van onderwijs is hier.
        </h1>
        <div className='flex flex-row justify-center'>
          <button className='bg-green-gradient w-[200px] rounded-md font-medium my-6 mx-4 py-3 text-black'>
            <HashLink to='/#Modules'>Voor studenten</HashLink>
          </button>
          <button className='bg-green-gradient w-[200px] rounded-md font-medium my-6 mx-4 py-3 text-black'>
            <HashLink to='/#Modules'>Voor scholen</HashLink>
          </button>
          </div>
        {/* <img className='float-left h-[100px] w-[350px] mx-auto my-8' src={PandaAnalytics} alt='/' /> */}
      </div>
      </div>
    </div>
  );
};

export default Hero;