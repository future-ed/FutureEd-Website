import React, {useState} from 'react'
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { UserAuth } from '../../context/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';

const Personal_Info = () => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {user} = UserAuth();

    const info = doc(db, 'users', `${user?.email}`)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name && !birthday) {
            setError('Both name and birthday are required');
            return;
        }
        
        if (name.length < 3) {
            setError('Name must be at least 3 characters long');
            return;
        }
 
        const birthdayPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;

        if (!birthdayPattern.test(birthday)) {
            setError('Please enter a birthday in DD/MM/YYYY format');
            return;
        }
        
        try {
            await updateDoc(info, {              
                "info.name": name,
                "info.birthday": birthday,
                "info.created_at": Timestamp.now()
            })
            navigate('/')
            
        } catch (e) {
            setError(e.message)
            console.log(e.message)  
        }
    }
  return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between">
        <img src={Logo} alt="Logo" className="mt-7 self-center" style={{ width: '150px', height: 'auto' }} />
    
    <div className="flex flex-col items-center justify-center ">
    
    <h1 className='font-bold text-3xl my-10 mt-[-5px]'>Personal Information</h1>
    <form onSubmit={handleSubmit} className="w-full max-w-[575px] mx-auto">
      <div className='flex flex-col mb-4'>
        <input onChange={(e) => setName(e.target.value)} className='font-light text-black border p-3 rounded-lg w-full' type='text' placeholder='Your Name'/>
      </div>
      <div className='flex flex-col mb-4 relative'>
        <input onChange={(e) => setBirthday(e.target.value)} className='font-light text-black border p-3 rounded-lg w-full' type='text' placeholder='Your Birthdate  DD/MM/YYYY' />
      </div>
      {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
      <div className='flex justify-center w-full md:mt-6'>
      <button 
        type="submit"
        className='font-bold w-full md:w-[330px] md:h-[60px] bg-[#000B28] hover:bg-blue-900 border p-3 rounded-full text-white'
      >
        Continue
      </button>
      </div>
    </form> 
  </div>

  {/* Fixed bottom text */}
  <h1 className='font-medium self-center mb-7 text-[#000B28]'>TERMS OF USE | PRIVACY POLICY</h1>  
</div>

  )
}

export default Personal_Info
