import React from 'react';
import BG from '../../assets/bg_homepage.jpg';
import Logo from '../../assets/logo.png';
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const gradientStylePink = {
    background: 'linear-gradient(135deg, #AD4FC5, #FF00A8)',
    WebkitBackgroundClip: 'text', // For Webkit browsers
    backgroundClip: 'text',
    color: 'transparent', // Make the text transparent
  };
  const gradientStyleBlue = {
    background: 'linear-gradient(135deg, #054B8C, #00B0E4)',
    WebkitBackgroundClip: 'text', // For Webkit browsers
    backgroundClip: 'text',
    color: 'transparent', // Make the text transparent
  };

  const handleCareersClick = () => {
    Swal.fire({
      icon: 'info', 
      title: 'No Vacancies',
      text: 'Sorry, there are no vacancies open currently. Please check back later.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#000000',
    });
  };

  const SignUpToCome = () => {
    Swal.fire({
      icon: 'info', 
      title: 'Coming Soon',
      text: 'Sign up will be available soon. Please check back later.',
      confirmButtonText: 'OK',
      confirmButtonColor: '#000000',
    });
  };

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/SignIn");
  };

  const handleCreateAccountClick = () => {
    navigate("/CreateAccount");
  }

  return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col" style={{ backgroundImage: `url(${BG})`,}}>
      <img src={Logo} alt="Logo" className="absolute top-4 left-4 mt-6 ml-4 md:ml-10" style={{ width: '150px', height: 'auto' }} />
      
      <div className='lg:flex hidden absolute top-1 left-0 right-0 justify-center items-center h-[114px] text-white'>
        <ul className='md:text-xl flex space-x-10 text-sm text-black pb-4'>
          <li className='p-4'><HashLink smooth to='/#Subjects' > Subjects </HashLink></li>
          <li className='p-4'><HashLink smooth to='/#School' > School </HashLink></li>
          {/* eslint-disable-next-line */}
          <li className='p-4'><a onClick={handleCareersClick}>Careers</a></li>
        </ul>
      </div>
      <div className = 'hidden md:flex'>
      <div className="absolute top-0 right-8 justify-center items-center h-[114px] text-white">
        <button className="mt-8 bg-white text-black font-semibold py-2 px-4 rounded-full hover:underline">
        {/* eslint-disable-next-line */}
          <a onClick={handleSignInClick}>Sign In </a>
        </button>
        <button className=" ml-4 bg-black text-white border font-semibold py-2 px-4 rounded-full hover:underline" >
          {/* eslint-disable-next-line */}
          <a onClick={SignUpToCome}>Get Started </a>
        </button>
      </div>
      </div>
        
      <div className="w-full h-full flex items-center justify-center md:justify-start md:pl-20 mb-20 md:mb-0">
        <div className="text-black text-center md:text-left">
          <p className="text-md md:text-xl mb-2 text-gray-818283">THE ULTIMATE SELF-DEVELOPMENT PLATFORM</p>
          <h1 className="text-4xl md:text-6xl font-bold">Bridge the gap</h1>
          <h1 className="text-4xl md:text-6xl font-bold">between <span style={gradientStylePink}>Education</span></h1>
          <h1 className="text-4xl md:text-6xl font-bold">and <span style={gradientStyleBlue}>Society</span></h1>
          <p className="text-sm md:text-xl mt-4 md:px-0 px-4">All the information you need for life in one single place</p>

            <button className="mt-6 bg-black text-white border font-semibold py-2 px-4 rounded-full hover:underline">
              {/* eslint-disable-next-line */}
              <a onClick={SignUpToCome}>Get Started </a>
          </button>
          <button className="mt-4 ml-2 bg-white text-black border border-black font-semibold py-2 px-4 rounded-full hover:underline">
            <HashLink smooth to='/#Contact' > Contact Us </HashLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
