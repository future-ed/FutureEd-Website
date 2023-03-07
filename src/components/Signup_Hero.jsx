import React from 'react'
import Logo from '../assets/logo.png'

export default function Login() {
  return (
    <div className='text-white custom-img-signup '>
      <div className='bg-black/70 max-h-screen'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

      <form className='bg-gray-200 shadow-md justify-center rounded px-8 my-6 pt-6 pb-8 mb-4 mx-20'>
                <h2 className='text-4xl font-bold text-center py-2'>
                <div className=' flex justify-center'>
                    <img className='h-[35px]' src={Logo} alt='/' />
                    <h1 className='my-auto text-3xl font-bold text-[#00df9a]'>FutureEd</h1>
                </div>    
                </h2>

                <div className="flex justify-center text-black">
                <div className="pt-0 my-3 mx-2">
                    <input
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="pt-0 my-3 mx-2">
                    <input
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>  
                <div className="pt-0 my-3 mx-2">
                    <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>  
                </div>

                <div className="flex justify-center text-black">
                <div className="mb-3 pt-0 my-3  mx-2">
                    <input
                    type="text"
                    placeholder="Education level"
                    name="education"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div> 
                <div className="mb-3 pt-0 my-3 mx-2">
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
                <div className="mb-3 pt-0 my-3 mx-2">
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    
                    />
                </div>
                </div>
                
                <div className="justify-center  text-black">
                <p>Gender</p>
                <div className='flex justify-between text-black text-bold'>
                    <button className='border w-full my-5 py-2 mx-2 bg-darkblue-gradient rounded-full hover:bg-green-gradient text-white'>Male</button>
                    <button className='border w-full my-5 py-2 mx-2 bg-darkgreen-gradient rounded-full hover:bg-green-gradient text-white'>Female</button>
                    <button className='border w-full my-5 py-2 mx-2 bg-black-gradient rounded-full hover:bg-green-gradient text-white'>Other</button>
                </div>
                </div>
                

                <div className="justify-center text-black">
                <p>Subscription type</p>
                    <div className='flex justify-between text-black text-bold'>
                        <button className='border w-full my-5 py-2 mx-2 bg-darkblue-gradient rounded-full hover:bg-green-gradient text-white'>Basic</button>
                        <button className='border w-full my-5 py-2 mx-2 bg-darkgreen-gradient rounded-full hover:bg-green-gradient text-white'>Premium</button>
                        <button className='border w-full my-5 py-2 mx-2 bg-black-gradient rounded-full hover:bg-green-gradient text-white'>Platinum</button>
                    </div>
                </div>
                
                <button className='border w-full my-5 py-2 bg-darkblue-gradient rounded-full hover:bg-green-gradient text-white'>Signup</button>

                <div className='text-black px-4 text-bold'>
                    <p>By signing up, you agree to our</p>
                    <div className='underline'>
                        <p>Terms & Conditions and Privacy Policy</p>
                    </div>
                </div>
                
            </form>
    
      </div>
      </div>
    </div>
  )
}