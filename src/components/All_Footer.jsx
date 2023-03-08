import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin
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
          Bridging the gap between 
          education and society.
          Established in 2023.
        </p>
        <h3 className='w-full text-2xl font-bold'>
          Follow us soon on
        </h3>
        <div className='flex justify-between md:w-[40%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaLinkedin size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'><Link to='/products'>Products</Link></h6>
        <ul>
            <li className='py-2 text-sm'><HashLink smooth to='/products/#ProductModule' > Modules </HashLink></li>
            <li className='py-2 text-sm'><HashLink smooth to='/products/#ProductAI' > AI-features </HashLink></li>
            {/* <li className='py-2 text-sm'><HashLink smooth to='/products/#Reviews' > Reviews </HashLink></li> */}
             <li className='py-2 text-sm'><HashLink smooth to='/products/#Abbos' > Pricing lesmodules </HashLink></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'><Link to='/company'>Company</Link></h6>
        <ul>
            <li className='py-2 text-sm'><HashLink smooth to='/company/#About' >About</HashLink></li>
            {/* <li className='py-2 text-sm'>Jobs</li> */}
            <li className='py-2 text-sm'>Trusted partners</li>
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
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;