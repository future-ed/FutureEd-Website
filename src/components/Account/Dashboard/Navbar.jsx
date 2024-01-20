import React, { useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar"
import Logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../../context/AuthContext';
import profileIcon from '../../../assets/icons/Profile_Icon.png'
import { useOverallReadProgress} from '../../Account/overall_read_progress';
import { db } from '../../../firebase'; 
import { collection, query, where, onSnapshot } from "firebase/firestore";


const Navbar = () => {
  const { user } = UserAuth();
  const readPercentage = useOverallReadProgress();

  // eslint-disable-next-line
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  useEffect(() => {
    if (user) {
        const notificationsQuery = query(
            collection(db, "notifications"),
            where("userId", "==", user.uid),
            where("isNew", "==", true)
        );

        const unsubscribe = onSnapshot(notificationsQuery, (snapshot) => {
            const hasNew = !snapshot.empty;
            console.log('New notifications:', hasNew);
            setHasNewNotifications(hasNew);
        });

        return () => unsubscribe();
    }
  }, [user]);
  
  return (
    <div className='h-screen w-[261px] relative navbar-vertical-line'>
      <div className='flex items-center justify-center text-black text-[14px] w-[261px] h-[72px] border-b'>
          <img src={profileIcon} alt="profileIcon" className="mr-0" style={{ width: '40px', height: '40px' }} />
          <span className='text-center truncate'>{user ? user.email : 'No user logged in'}</span>
      </div>

      <div>
      <div className='flex justify-center text-[16px] text-[#aeacac] mt-6 mb-2'>
        Your Personal Content
      </div>

      <Link to="/Home">
      <button className='flex button-with-line items-center ml-6 mb-2 w-[208px] h-[28px] hover:bg-gray-100 text-[16px] font-bold rounded-lg'>
                    <span className='mr-2'>📍</span>
                    Home Page
                </button>
      </Link>

      <Link to="/PersonalFinances">
        <button className='flex button-with-line items-center ml-6 mb-2 w-[208px] h-[28px] hover:bg-gray-100 text-[16px] font-bold rounded-lg'>
        <span className='mr-2'>💰</span> 
        <span>Personal Finance</span>
      </button>
      </Link>
      
      <Link to="/Taxes">
        <button className='flex button-with-line items-center ml-6 mb-2 w-[208px] h-[28px] hover:bg-gray-100 text-[16px] font-bold rounded-lg'>
        <span className='mr-2'>👨🏻‍💼</span> 
        <span>Taxes</span>
      </button>
      </Link>
      
      <Link to="/CareerBuilding">
        <button className='flex button-with-line items-center ml-6 mb-2 w-[208px] h-[28px] hover:bg-gray-100 text-[16px] font-bold rounded-lg'>
        <span className='mr-2'>💼</span> 
        <span>Career Building</span>
      </button>
      </Link>
      
      <Link to="/IndependentLiving">
        <button className='flex button-with-line items-center ml-6 mb-2 w-[208px] h-[28px] hover:bg-gray-100 text-[16px] font-bold rounded-lg'>
        <span className='mr-2'>🏡</span> 
        <span>Independent Living </span>
      </button>
      </Link>
      
      <Link to="/Health">
        <button className='flex button-with-line items-center ml-6 mb-2 w-[208px] h-[28px] hover:bg-gray-100 text-[16px] font-bold rounded-lg'>
        <span className='mr-2'>🍎</span> 
        <span>Health</span>
      </button>
      </Link>
      
      <Link to="/LifeSkills">
        <button className='flex button-with-line items-center ml-6 w-[208px] h-[28px] hover:bg-gray-100 text-[16px] font-bold rounded-lg'>
        <span className='mr-2'>👩🏻‍🏫</span> 
        <span>Life Skills</span>
      </button>
      </Link>
      </div>

      <div className='text-[14px] ml-14 mt-6'>
        What I've Read
        <div style={{ position: 'absolute', width: '65%', marginTop: '1rem' }}> 
        <ProgressBar 
            completed={readPercentage}
            customLabelStyles={{
            color: '#000000',
            fontSize: '13px',
            position: 'absolute', 
            right: 0, 
            top: '-41px', 
            transform: 'translateY(0)'
        }}
            height="10px"
            bgColor="linear-gradient(to left, #94A9F6, #CA7ED4)"
            labelColor="#e80909"
            transitionTimingFunction="linear"/>
        </div>
      </div>


    <div className='ml-10'>
      <img src={Logo} alt="Logo" className="absolute bottom-14 self-center ml-7" style={{ width: '102px', height: 'auto' }} />
    </div> 
  </div>

    
  )
}

export default Navbar