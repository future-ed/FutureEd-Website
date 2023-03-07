import React from 'react'

export default function ForgotPassword() {
  return (
    <div className='text-white custom-img-support1 '>
      <div className='bg-black/70'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

      <form className='bg-gray-200 max-w-[800px] shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-20'>
                <h2 className='text-4xl font-bold text-center py-6'>
                    <h1 className='my-auto text-3xl font-bold text-black'>Set a new password</h1>   
                </h2>
                <div className="mb-3 pt-0 my-3">
                    <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded-full text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                    />
                </div>
             
                <div className='flex justify-center text-black text-bold '>
                    <button className='border w-full my-5 py-2 mx-2 bg-darkgreen-gradient rounded-full hover:bg-green-gradient text-white'>Create new password</button>
                </div>=
            </form>
    
      </div>
      </div>
    </div>
  )
}

