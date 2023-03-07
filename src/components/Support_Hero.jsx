// import React , { useState } from "react";

const Hero = () => {
  // const FORM_ENDPOINT = "";
  // const [submitted, setSubmitted] = useState(false);
  //   const handleSubmit = () => {
  //     setTimeout(() => {
  //       setSubmitted(true);
  //     }, 100);
  //   };
  const submitted = false;

  if (submitted) {
      return (
        <>
        <div id = 'Contact' className='text-white custom-img-support '>
      <div className='bg-black/70'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-5xl text-white sm:text-5xl text-4xl font-bold md:py-6'>
          Heb je vragen of interesse?
        </h1>
        
        <div className="text-2xl py-6">Thank you!</div>
          <div className="text-md py-0">We'll be in touch soon.</div>
    
      </div>
      </div>
    </div>
        </>
      );
    }

  return (
    <div id = 'Contact' className='text-white custom-img-support '>
      <div className='bg-black/70'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] text-xl font-bold p-6 uppercase'>
          Heb je vragen, interesse of wil je aanmelden?
        </p>
        {/* <h1 className='md:text-6xl text-white sm:text-5xl text-4xl font-bold md:py-6'>
          Still have questions?
        </h1> */}
        <h1 className='md:text-5xl text-white sm:text-5xl text-4xl font-bold md:py-6'>
          Neem contact met ons op!
        </h1> 

        <p className='text-[#00df9a] text-xl font-bold p-6 uppercase'>
          Email :
        </p>
        <h1 className='md:text-3xl text-white sm:text-5xl text-4xl font-bold md:py-6'>
          contact@future-ed.dev
        </h1> 
      
        {/* <form
          className="bg-black opacity-80 my-8 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-10"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <p className='text-white text-2xl py-4 font-bold '>Contact us</p>
          <div className="mb-3 pt-0 my-3">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <textarea
              placeholder="Your message"
              name="message"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 my-8 pt-0">
            <button
              className="bg-green-gradient w-70 text-black active:bg-darkblue-gradient font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Send a message
            </button>
          </div>
        </form> */}
    
      </div>
      </div>
    </div>
  );
};

export default Hero;