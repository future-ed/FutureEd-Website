import React, {useState} from 'react'
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext'


const Forgot_Password = () => {
    const { sendResetEmail } = UserAuth();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        
        try {
          await sendResetEmail(email);
          setMessage("Password reset email sent! Please check your inbox");
        } catch (e) {
            if (e.code === 'auth/invalid-email') {
              setError("This Email is not registered");
            } else {
              setError(e.message);
            }
          }
      }

  return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col">
      <img src={Logo} alt="Logo" className="top-4 mt-6 md:ml-10 my-16" style={{ width: '150px', height: 'auto', marginLeft: '-2px'  }} />
      <h1 className='font-bold md:text-3xl py-10'>Forgot Your Password</h1>
      <form onSubmit={handlePasswordReset}>
        <div className='flex flex-col'>
            <input onChange={e => setEmail(e.target.value)} className='my-10 font-light text-[#B5B2B2] border p-3 rounded-lg md:w-[575px] md:h-[65px]' type='email' placeholder='Email Address'/>
        </div>
        
        <div className='flex justify-center items-center'>
        <div className='flex flex-col items-center'>
            <div className='h-5 mb-2'> 
                {error && !message && <p className='text-red-500 text-center'>{error}</p>}
                {message && <p className='text-green-500 text-center'>{message}</p>}
            </div>
            <button 
            onClick={handlePasswordReset}
            className='font-bold md:w-[330px] md:h-[60px] bg-[#000B28] hover:bg-blue-900 border p-3 rounded-full text-white'>Send Email</button>
        </div>
        </div>
      </form>   
      <p className='text-[#32403B] text-center'>Already have an account? <Link to='/SignIn' className='underline'>Sign in</Link> </p>
    </div>
  )
}

export default Forgot_Password
