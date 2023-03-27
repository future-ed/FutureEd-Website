import React from 'react';
import {
  FaTiktok,
  FaInstagram,
  // FaLinkedin
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className='sm: px-16'>
    <div className='max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-4xl font-bold text-[#00df9a]'><Link to='/'>FutureEd</Link></h1>
        <p className='py-4'>
          De kloof verkleinen tussen 
          school en maatschappij.
          Gevestigd in 2023.
        </p>
        <h3 className='w-full text-2xl font-bold'>
          Volg ons op 
        </h3>
        <div className='flex justify-center gap-6 md:w-[40%] my-6'>
            <a href='https://www.tiktok.com/@futureed_nl' target='_blank' rel='noreferrer'><FaTiktok size={30} /></a>
            <a href='https://www.instagram.com/futureed_official/' target='_blank' rel='noreferrer'><FaInstagram size={30} /></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'><Link to='/products-schools'>Scholen</Link></h6>
        <ul>
            <li className='py-2 text-sm'><HashLink smooth to='/products-schools/#ModulesDocenten' > Lesmodules </HashLink></li>
            {/* <li className='py-2 text-sm'><HashLink smooth to='/products/#Reviews' > Reviews </HashLink></li> */}
             <li className='py-2 text-sm'><HashLink smooth to='/products-schools/#AbbosDocenten' > Pricing Lesmodules </HashLink></li>
             <li className='py-2 text-sm'><HashLink smooth to='/products-schools/#ProductAI' > AI-features </HashLink></li>
            <li className='py-2 text-sm'><HashLink smooth to='/products-schools/#PricingAIDocenten' > Pricing AI-features </HashLink></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'><Link to='/products-students'>Studenten</Link></h6>
        <ul>
            <li className='py-2 text-sm'><HashLink smooth to='/products-students/#ProductModule' > Lesmodules </HashLink></li>
            {/* <li className='py-2 text-sm'><HashLink smooth to='/products/#Reviews' > Reviews </HashLink></li> */}
             <li className='py-2 text-sm'><HashLink smooth to='/products-students/#Abbos' > Pricing Lesmodules </HashLink></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'><Link to='/company'>Bedrijf</Link></h6>
        <ul>
            <li className='py-2 text-sm'><HashLink smooth to='/company/#About' >Over ons</HashLink></li>
            {/* <li className='py-2 text-sm'>Jobs</li> */}
            <li className='py-2 text-sm'>Vertrouwde partners</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'><Link to='/support'>Support</Link></h6>
        <ul>
            <li className='py-2 text-sm'><HashLink smooth to='/support/#Contact' >Contact</HashLink></li>
            <li className='py-2 text-sm'><HashLink smooth to='/support/#FAQ' >FAQ</HashLink></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legaal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Beleid</li>
            <li className='py-2 text-sm'>Voorwaarden</li>
        </ul>
    </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;