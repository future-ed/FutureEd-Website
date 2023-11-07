import React, {useState} from 'react'
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { UserAuth } from '../../context/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';

const Card = ({title, subtitle, description}) => {
    return (
        <div className='bg-white md:w-[326px] md:h-[370px] rounded-3xl my-1 text-[#122A41] px-10 flex flex-col justify-center items-center p-6 mx-auto sm:mx-0 shadow-lg relative'>
          <div className="flex flex-col">
            <div className="ml-4">
              <h1 className='text-center text-xl font-bold ml-[-40px]'>{title}</h1>
              <h2 className='text-center text-[#4F4F4F] text-lg mt-2 ml-[-40px]'>{subtitle}</h2>
            </div>
          </div>
          <div className="mt-3 h-[100px] overflow-hidden px-4">
            <p className='text-[#B5B2B2] text-start leading-[1.25rem] font-light'>{description}</p>
          </div>
        </div>
      );
    };

const Select_Plan = () => {
    const[selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();
    const {user} = UserAuth();
    const [error, setError] = useState('');
    const info = doc(db, 'users', `${user?.email}`)

    const handleSubmit = async () => {
        if (selectedCard) {
            await updateDoc(info, { 
                "info.plan": selectedCard  
            })
            navigate('/ChooseCountry');
        } else {
            setError('Please select a plan before continuing');
        }
    }

    return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col">
      <img src={Logo} alt="Logo" className="top-4 mt-6 md:ml-10 my-10" style={{ width: '150px', height: 'auto', marginLeft: '-2px'}} />
      <h1 className='font-bold md:text-3xl py-10'>Select Your Plan</h1>
      <div className='grid md:grid-cols-3 grid-cols-1 justify-center gap-6 mt-[-30px]'>
                <button onClick={() => setSelectedCard('Monthly')}
                        className={`${selectedCard === 'Monthly' ? 'border-2 border-blue-500 rounded-3xl focus:border-blue-600 focus:outline-none' : 'focus:outline-none'}`}>
                    <Card
                        title="Monthly"
                        subtitle="€0,99"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                </button>

                <button onClick={() => setSelectedCard('Yearly')}
                        className={`${selectedCard === 'Yearly' ? 'border-2 border-blue-500 rounded-3xl focus:border-blue-600 focus:outline-none' : 'focus:outline-none'}`}>
                    <Card
                        title="Yearly"
                        subtitle="€9,99"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                </button>

                <button onClick={() => setSelectedCard('LifeTime')}
                        className={`${selectedCard === 'LifeTime' ? 'border-2 border-blue-500 rounded-3xl focus:border-blue-600 focus:outline-none' : 'focus:outline-none'}`}>
                    <Card
                        title="Life time"
                        subtitle="€9,99"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                </button>
            </div>
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
    </div>
    )
}

export default Select_Plan
