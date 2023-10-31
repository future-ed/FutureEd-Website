import React from 'react';
import BG from '../../assets/bg_contact2.png';

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div
        id="Contact"
        className="w-full h-screen flex items-center justify-center bg-center"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-col items-center">
          <p className='md:text-5xl text-4xl text-white font-bold '>Get in touch!</p>
          <p className='text-[#C0C0C0] text-[13px] md:text-xl mt-6'>
            Bridging Gaps, One Touch Away
          </p>
          <div className="relative font-medium md:text-[20px] text-[14px] my-8 flex items-center justify-center md:w-[200px] w-[130px] md:h-[58px] h-[45px]">
            <button
                className="absolute inset-0 flex items-center justify-center z-10 rounded-full text-white"
                style={{
                background: 'linear-gradient(45deg, #052E97, #F69BF4)',
                }}
                onClick={() => {
                window.location.href = 'mailto:contact@future-ed.dev';
                }}
            >
                Contact Us Now
            </button>
        </div>


        </div>
      </div>
      {/* grey text */}
      <div className="text-center -mt-16 text-[#A9B1B1] text-xs p-2">
          Copyright © 2023 FutureEd
      </div>
    </div>
  );
};

export default Contact;