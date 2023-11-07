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
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col">
      <img src={Logo} alt="Logo" className="top-4 mt-6 md:ml-10 my-16" style={{ width: '150px', height: 'auto', marginLeft: '-2px'  }} />
      <h1 className='font-bold md:text-3xl py-10'>Personal Information</h1>
      
    
      
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
            <input onChange={(e) => setName(e.target.value)} className='font-light text-[#B5B2B2] border p-3 rounded-lg md:w-[575px] md:h-[65px]' type='text' placeholder='Your Name'/>
        </div>
        <div className='flex flex-col py-3 relative'>
            <input onChange={(e) => setBirthday(e.target.value)} className='font-light text-[#B5B2B2] border p-3 rounded-lg md:w-[575px] md:h-[65px]' type='text' placeholder='Your Birthdate  DD/MM/YYYY' />
        </div>
        
        <div className='flex justify-center items-center relative'>
        <div>
            <div className='h-7 mb-2 overflow-y-auto'> 
                {error && <p className='text-red-500 text-center'>{error}</p>}
            </div>
            <button 
            onClick={handleSubmit}
            className='font-bold md:w-[330px] md:h-[60px] bg-[#000B28] hover:bg-blue-900 border p-3 rounded-full text-white'>Continue</button>
        </div>
        </div>
      </form> 
      <h1 className='font-medium absolute bottom-7 text-[#000B28]'>TERMS OF USE | PRIVACY POLICY</h1>  
       
    </div>
  )
}

export default Personal_Info
