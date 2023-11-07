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

    const info = doc(db, 'users', `${user?.email}`)
  
    return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col">
      <img src={Logo} alt="Logo" className="top-4 mt-6 md:ml-10 my-10" style={{ width: '150px', height: 'auto', marginLeft: '-2px'}} />
      <h1 className='font-bold md:text-3xl py-10 mt-[40px]'>Choose Your Country</h1>
      <select 
            value={selectedCountry} 
            onChange={e => setSelectedCountry(e.target.value)}
            style={{
                width: '400px', 
                height: '50px', 
                fontSize: '18px', 
                padding: '10px',
                border: '2px solid grey',
                borderRadius: '1rem'
             }}
        >
            <option className="font-light" value="">Select a country</option>
            {countries.map(country => (
                <option key={country} value={country}>
                    {country}
                </option>
            ))}
        </select>
        <div className='flex justify-center items-center mt-12 '>
        <div>
            <div className='h-5 mb-2'> 
                {error && <p className='text-red-500 text-center'>{error}</p>}
            </div>
            <button 
            onClick={handleSubmit}
            className='font-bold md:w-[330px] md:h-[60px] bg-[#000B28] hover:bg-blue-900 border p-3 rounded-full text-white'>Continue</button>
        </div>
        </div>
        <h1 className='font-medium absolute bottom-7 text-[#000B28]'>TERMS OF USE | PRIVACY POLICY</h1>  
    </div>
  )
}

export default Choose_Country
