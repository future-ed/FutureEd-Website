import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='text-white custom-img-signin '>
      <div className='bg-black/70'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

      <form className='bg-gray-200 max-w-[800px] shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-20'>
                <h2 className='text-4xl font-bold text-center py-6'>
                <div className=' flex justify-center'>
                    <img className='h-[35px]' src={Logo} alt='/' />
                    <h1 className='my-auto text-3xl font-bold text-[#00df9a]'>FutureEd</h1>
                </div>    
                </h2>
                <div className="mb-3 pt-0 my-3">
                    <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    
                    />
                </div>
                <div className='flex justify-between text-black text-bold'>
                    <button className='border w-full my-5 py-2 mx-2 bg-darkblue-gradient rounded-full hover:bg-green-gradient text-white'>Login</button>
                    <button className='border w-full my-5 py-2 mx-2 bg-darkgreen-gradient rounded-full hover:bg-green-gradient text-white'><Link to='/signup'>Signup</Link></button>
                </div>
                <div className='flex justify-between  text-black px-4 text-bold'>
                    <p><Link to='/forgotpassword'>Forgot password?</Link></p>
                    <p></p>
                </div>
            </form>
    
      </div>
      </div>
    </div>
  )
}