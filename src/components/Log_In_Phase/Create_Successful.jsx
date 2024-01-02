import React from 'react'
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Create_Successful = () => {
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/SignIn');
    }
    const handleHome = () => {
        navigate('/');
    }

    return (
        <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between">
            <img onClick={handleHome} src={Logo} alt="Logo" className="mt-7 self-center cursor-pointer" style={{ width: '150px', height: 'auto' }} />
        
        <div className="flex flex-col items-center justify-center ">
        
        <h1 className='font-bold text-3xl my-10 mt-[-5px]'>Congratulations 🎉🎉</h1>
        <h1 className='font-bold text-3xl my-10 mt-[-5px]'>Your have successfully created your account!</h1>
        
        
          <div className='gird grid-cols-2 flex justify-center w-full md:mt-6 space-x-4'>
          <button 
            onClick={handleSignIn}
            className='font-bold w-full md:w-[230px] md:h-[50px] bg-[#000B28] hover:bg-blue-900 border p-3 rounded-full text-white'
          >
            Sign In
          </button>
          <button 
            onClick={handleHome}
            className='font-bold w-full md:w-[230px] md:h-[50px] bg-[#000B28] hover:bg-blue-900 border p-3 rounded-full text-white'
          >
            Home Page
          </button>
          </div>
        
      </div>

      <h1 className='font-medium self-center mb-7 text-[#000B28]'>TERMS OF USE | PRIVACY POLICY</h1>  
    </div>
    
      )
}

export default Create_Successful