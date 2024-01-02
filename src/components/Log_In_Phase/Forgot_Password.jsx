import React, {useState} from 'react'
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';


const Forgot_Password = () => {
    const { sendResetEmail } = UserAuth();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

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

    const handleHome = () => {
      navigate('/');
    }

  return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen flex flex-col">
    <img onClick={handleHome} src={Logo} alt="Logo" className="mt-6 self-center cursor-pointer" style={{ width: '150px', height: 'auto' }} />

    <div className="flex-grow flex flex-col items-center justify-center px-4 w-full mt-[-90px]">
        <h1 className='font-bold text-3xl py-10 text-center'>Forgot Your Password</h1>
        <form onSubmit={handlePasswordReset} className="w-full max-w-[575px]">
            <div className='flex flex-col mb-4'>
                <input onChange={e => setEmail(e.target.value)} className='font-light text-black border p-3 rounded-lg w-full' type='email' placeholder='Email Address'/>
            </div>
            <div className='flex flex-col items-center'>
                <div className='h-5 mb-2'> 
                    {error && !message && <p className='text-red-500 text-center'>{error}</p>}
                    {message && <p className='text-green-500 text-center'>{message}</p>}
                </div>
                <button 
                type="submit"
                className='font-bold w-full md:w-[330px] md:h-[60px] bg-[#000B28] hover:bg-blue-900 border p-3 rounded-full text-white'
                >Send Email</button>
            </div>
        </form>   
        <p className='text-[#32403B] text-center'>Already have an account? <Link to='/SignIn' className='underline'>Sign in</Link> </p>
    </div>
</div>



  )
}

export default Forgot_Password