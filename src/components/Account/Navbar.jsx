import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext';
import profileIcon from '../../assets/Profile_Icon.png'

const navbar = () => {
  const { user } = UserAuth();
  
  return (
    <div className='h-screen w-[261px]'>
      <div className='flex items-center text-black text-[14px] w-[261px] h-[72px] border-b'>
      <img src={profileIcon} alt="profileIcon" className="self-center ml-7" style={{ width: '40px', height: '40px' }} />
        {user ? user.email : 'No user logged in'}
      </div>

      <div>
      <div className='flex justify-center text-[14px] text-[#aeacac] mt-6 mb-2'>
        Your Personal Content
      </div>
      <Link to="/PersonalFinances">
        <button className='flex button-with-line items-center ml-6 mb-1 w-[208px] h-[28px] hover:bg-gray-100 text-[14px] font-bold rounded-lg'>
        <span className='mr-2'>💰</span> 
        <span>Personal Finances</span>
      </button>
      </Link>
      
      <Link to="/Taxes">
        <button className='flex button-with-line items-center ml-6 mb-1 w-[208px] h-[28px] hover:bg-gray-100 text-[14px] font-bold rounded-lg'>
        <span className='mr-2'>👨🏻‍💼</span> 
        <span>Taxes</span>
      </button>
      </Link>
      
      <Link to="/CareerBuilding">
        <button className='flex button-with-line items-center ml-6 mb-1 w-[208px] h-[28px] hover:bg-gray-100 text-[14px] font-bold rounded-lg'>
        <span className='mr-2'>💼</span> 
        <span>Career Building</span>
      </button>
      </Link>
      
      <Link to="/IndependentLiving">
        <button className='flex button-with-line items-center ml-6 mb-1 w-[208px] h-[28px] hover:bg-gray-100 text-[14px] font-bold rounded-lg'>
        <span className='mr-2'>🏡</span> 
        <span>Independent Living </span>
      </button>
      </Link>
      
      <Link to="/Health">
        <button className='flex button-with-line items-center ml-6 mb-1 w-[208px] h-[28px] hover:bg-gray-100 text-[14px] font-bold rounded-lg'>
        <span className='mr-2'>🍎</span> 
        <span>Health</span>
      </button>
      </Link>
      
      <Link to="/LifeSkills">
        <button className='flex button-with-line items-center ml-6 w-[208px] h-[28px] hover:bg-gray-100 text-[14px] font-bold rounded-lg'>
        <span className='mr-2'>👩🏻‍🏫</span> 
        <span>Life Skills</span>
      </button>
      </Link>
      </div>

    <div className='ml-10' style={{ marginTop: '200px' }}>

      <div className='text-[14px] mt-12'>
        What I've Read
        <div style={{ position: 'relative', width: '80%', marginTop: '1rem' }}> 
        <ProgressBar 
            completed={50}
            customLabelStyles={{
            color: '#000000',
            fontSize: '13px',
            position: 'absolute', 
            right: 0, 
            top: '-41px', 
            transform: 'translateY(0)'
        }}
            height="10px"
            bgColor="linear-gradient(to left, #9BB1F6, #0D0D97)"
            labelColor="#e80909"
            transitionTimingFunction="linear"/>
        </div>
      </div>

      <div className='text-[14px] mt-7'>
        What I did
        <div style={{ position: 'relative', width: '80%', marginTop: '0.9rem' }}> 
        <ProgressBar 
            completed={50}
            customLabelStyles={{
            color: '#000000',
            fontSize: '13px',
            position: 'absolute',
            right: 0, 
            top: '-40px', 
            transform: 'translateY(0)'
            
        }}
        height="10px"
        bgColor="linear-gradient(to left, #9BB1F6, #0D0D97)"
        labelColor="#e80909"
        transitionTimingFunction="linear"
        />
        </div>
      </div>
      <img src={Logo} alt="Logo" className="absolute bottom-14 mt-20 self-center ml-7" style={{ width: '102px', height: 'auto' }} />
        </div> 
    </div>
  )
}

export default navbar