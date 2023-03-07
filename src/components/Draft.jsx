import React from 'react'
import Logo from '../assets/logo.png'
import loginImg from '../assets/login.jpg'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='mt-[-96px] w-full opacity-40 hidden sm:block custom-img-signin'>
        </div>

        <div className='bg-gray-100 mt-[-96px] w-full opacity-90 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>
                <div className=' flex justify-center'>
                    <img className='h-[35px]' src={Logo} alt='/' />
                    <h1 className='my-auto text-3xl font-bold text-[#00df9a]'>FutureEd</h1>
                </div>    
                </h2>
                <div className="mb-3 pt-0 my-3">
                    <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Create an account</p>
                </div>
            </form>
        </div>
    </div>
  )
}