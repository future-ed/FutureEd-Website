import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import Logo from '../../assets/logo.png';
import visibility from '../../assets/icon_visibility.png'
import invisibility from '../../assets/icon_invisible.png'


const Welcome_Back = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {signIn} = UserAuth()
  const navigate = useNavigate()

  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {setPasswordVisibility(!isPasswordVisible);};
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signIn(email,password)
      navigate('/AccountMain')
    } catch (e) {
      if (e.code === 'auth/invalid-login-credentials') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError(e.message);
      }
      console.log(e.message);
    }
  }

  return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col">
      <img src={Logo} alt="Logo" className="top-4 mt-6 md:ml-10 my-16" style={{ width: '150px', height: 'auto', marginLeft: '-2px'  }} />
      <h1 className='font-bold md:text-3xl py-10'>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
            <input onChange={(e) => setEmail(e.target.value)} className='font-light text-black border p-3 rounded-lg md:w-[575px] md:h-[65px]' type='email' placeholder='Email Address'/>
        </div>
        <div className='flex flex-col py-3 relative'>
          <input onChange={(e) => setPassword(e.target.value)} className='font-light text-black border p-3 rounded-lg md:w-[575px] md:h-[65px]' type={isPasswordVisible ? 'text' : 'password'} placeholder='Password' />
            <span onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '20px', top: '45%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
              {isPasswordVisible ? <img src={invisibility} alt="Invisibility Icon" style={{ width: '20px', height: '15px' }} /> : 
             <img src={visibility} alt="Visibility Icon" style={{ width: '20px', height: '15px' }} />}
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
            className='font-bold md:w-[330px] md:h-[60px] bg-[#000B28] hover:bg-blue-900 border p-3 rounded-full text-white'>Log In</button>
        </div>
        </div>
      </form>   
      
      <p className='text-[#32403B]'>Don't have an account? <Link to='/CreateAccount' className='underline'>Sign up</Link> </p>
    </div>
  )
}

export default Welcome_Back
