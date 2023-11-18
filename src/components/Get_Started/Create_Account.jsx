import React, {useState} from 'react'
import Logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import visibility from '../../assets/icon_visibility.png'
import invisibility from '../../assets/icon_invisible.png'

const Create_Account = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const togglePasswordVisibility = () => {setPasswordVisibility(!isPasswordVisible);};


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (!email || !password) {
            setError('Both email and password are required');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        try {
            await createUser(email,password)
            navigate('/SelectPlan')
            
        } catch (e) {
            alert(e.message)
            console.log(e.message)  
        }
    }

  return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen flex flex-col">
    <img src={Logo} alt="Logo" className="mt-7 self-center" style={{ width: '150px', height: 'auto' }} />
    <div className="flex-grow flex flex-col items-center justify-center px-4">
      <h1 className='font-bold text-3xl my-11 mt-[-55px]'>Create Your Account</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-[575px] mx-auto">
        <div className='flex flex-col'>
            <input onChange={(e) => setEmail(e.target.value)} className='font-light text-black border p-3 rounded-lg md:w-[575px] md:h-[65px]' type='email' placeholder='Email Address'/>
        </div>
        <div className='flex flex-col py-4 relative'>
            <input onChange={(e) => setPassword(e.target.value)} className='font-light text-black border p-3 rounded-lg md:w-[575px] md:h-[65px]' type={isPasswordVisible ? 'text' : 'password'} placeholder='Password' />
            <span onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '20px', top: '45%', transform: 'translateY(-60%)', cursor: 'pointer' }}>
            {isPasswordVisible ? <img src={invisibility} alt="Invisibility Icon" style={{ width: '20px', height: '15px' }} /> : 
             <img src={visibility} alt="Visibility Icon" style={{ width: '20px', height: '15px' }} /> }
        </span>
            <p className='text-[#646D6A] text-right'><Link to='/ForgotPassword' className='underline'>Forgot your password?</Link></p>
        </div>
        <div className='flex justify-center items-center'>
        <div>
            <div className='h-5 mb-2'> 
                {error && <p className='text-red-500 text-center'>{error}</p>}
            </div>
            <button 
            onClick={handleSubmit}
            className='font-bold md:w-[330px] md:h-[60px] bg-[#000B28] hover:bg-blue-900 border p-3 rounded-full text-white'>Continue</button>
        </div>
        </div>
      </form>   
      
      <p className='text-[#32403B] text-center'>Already have an account? <Link to='/SignIn' className='underline'>Sign in</Link> </p>
      <h1 className='font-medium absolute bottom-7 left-1/2 transform -translate-x-1/2 text-[#000B28]'>TERMS OF USE | PRIVACY POLICY</h1> 
      </div>
    </div>
  )
}

export default Create_Account
