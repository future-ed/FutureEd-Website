import React, {useState} from 'react'
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { getNames } from 'country-list';
import { db } from '../../firebase';
import { UserAuth } from '../../context/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';

const Choose_Country = () => {
    const countries = getNames();
    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState('');
    const {user} = UserAuth();
    const [error, setError] = useState('');

    const handleSubmit = async () => {   
        if (selectedCountry) {
            await updateDoc(info, {
                "info.country": selectedCountry
                
            })
            navigate('/PersonalInformation');
        } else {
            setError('Please select a country before continuing');
            
    }}

    const handleHome = () => {
        navigate('/');
    }

    const info = doc(db, 'users', `${user?.email}`)
  
    return (
        <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen flex flex-col">
        <img onClick={handleHome} src={Logo} alt="Logo" className="mt-6 self-center cursor-pointer" style={{ width: '150px', height: 'auto' }} />
    
        <div className="flex-grow flex flex-col items-center justify-center px-4">
            <h1 className='font-bold md:text-3xl py-10 mt-[-35px] text-center'>Choose Your Country</h1>
            <select 
                value={selectedCountry} 
                onChange={e => setSelectedCountry(e.target.value)}
                className="font-light w-[400px] h-[50px] text-[18px] p-2 border-2 border-solid border-grey-300 rounded-xl"
            >
                <option value="">Select a country</option>
                {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
            <div className='flex justify-center items-center'>
        <div>
            <div className='h-5 mb-3 mt-4'> 
                {error && <p className='text-red-500 text-center'>{error}</p>}
            </div>
            <button 
            onClick={handleSubmit}
            className='font-bold md:w-[330px] md:h-[60px] bg-[#000B28] hover:bg-blue-900 border p-3 rounded-full text-white'>Continue</button>
        </div>
        </div>
        </div>
        <h1 className='font-medium self-center mb-7 text-[#000B28]'>TERMS OF USE | PRIVACY POLICY</h1>  
    </div>
    
  )
}

export default Choose_Country