import React from "react";
// import PandaAnalytics from '../assets/panda-analytics-logo.png';
// import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='text-white custom-img'>
      <div className='bg-black/70'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-6 uppercase'>
         Your most valuable asset is your time and mind - invest in it wisely!
        </p>
        <h1 className='md:text-6xl text-white sm:text-5xl text-4xl font-bold md:py-6'>
          Invest In Your Future
        </h1>
        
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
            Use AI tools to improve study efficiency and secure your future by nurturing your mind with practical knowledge.
        </p>
        {/* <button className='bg-green-gradient w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'><Link to='/signup'>Get Started</Link> </button>
        <img className='float-left h-[100px] w-[350px] mx-auto my-8' src={PandaAnalytics} alt='/' /> */}
      </div>
      </div>
    </div>
  );
};

export default Hero;