import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <div className=' flex w-full'>
            <img className='h-[35px]' src={Logo} alt='/' />
            <h1 className='my-auto text-3xl font-bold text-[#00df9a]'><Link to='/'>FutureEd</Link></h1>
        </div>
      <ul className='hidden md:flex'>
        <li className='p-4'>
            <Link to='/'>Home</Link>
        </li>
        <li className='p-4'>
            <Link to='/products'>Products</Link>
        </li>
        <li className='p-4'>
            <Link to='/company'>Company</Link>
        </li>
        <li className='p-4'>
            <Link to='/support'>Contact</Link>
        </li>
        {/* <button className='bg-[#00df9a] w-[80px] rounded-md font-medium my-2 mx-auto h-10 text-black ml-4'><Link to='/signin'>Sign in</Link></button> */}
      </ul>
    <div onClick={handleNav} className = 'block md:hidden'>
        {!nav ? <AiOutlineClose size = {20} /> : <AiOutlineMenu size = {20} />}
    </div>
    <div className= {!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#051622] ease-in-out duration-500' : 'fixed left-[-100%]  ease-in-out duration-500'}>
    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>FutureEd</h1>
        <ul className='pt-4 uppercase'>
            <li className='p-4 border-b border-gray-600'><Link to='/'>Home</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to='/products'>Products</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to='/company'>Company</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to='/support'>Contact</Link></li>
            {/* <button className='pt-4 p-4 uppercase'> <Link to='/signin'>Sign in</Link> </button> */}
        </ul>
    </div>
    </div>
  );
};

export default Navbar;