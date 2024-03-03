import React, { useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar"
import Logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../../context/AuthContext';
import profileIcon from '../../../assets/icons/Profile_Icon.png'
import { useOverallReadProgress} from '../../Account/overall_read_progress';
import { db } from '../../../firebase'; 
import { doc, getDoc } from "firebase/firestore";


const Navbar = () => {
  const { user } = UserAuth();
  const readPercentage = useOverallReadProgress();
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  const [userCountry, setUserCountry] = useState("");

  useEffect(() => {
    const fetchUserCountry = async () => {
      if (user && user.email) {
        const userRef = doc(db, "users", user.email);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserCountry(userSnap.data().info.country); // Access nested fields appropriately
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserCountry();
  }, [user]);

  // useEffect(() => {
  //   if (user) {
  //       const notificationsQuery = query(
  //           collection(db, "notifications"),
  //           where("userId", "==", user.uid),
  //           where("isNew", "==", true)
  //       );

  //       const unsubscribe = onSnapshot(notificationsQuery, (snapshot) => {
  //           const hasNew = !snapshot.empty;
  //           console.log('New notifications:', hasNew);
  //           setHasNewNotifications(hasNew);
  //       });

  //       return () => unsubscribe();
  //   }
  // }, [user]);
  
  return (
    <div className='h-screen w-[261px] relative navbar-vertical-line'>
      <div className='flex items-center justify-center text-black text-[14px] w-[261px] h-[90px] border-b'>
          <img src={profileIcon} alt="profileIcon" className="mr-0" style={{ width: '40px', height: '40px' }} />
          <span className='text-center truncate text-[16px]'>{user ? user.email : 'No user logged in'}</span>
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

      {userCountry === "Sint Maarten, (Dutch part)" && (
        <div className="absolute bottom-20 left-0 right-0 w-[88%] mx-auto flex justify-center">
        <a href="https://docs.google.com/document/d/19Q0pe7Nrd0fHXBk3k5PukjfKuRVPOZ-hYjc7ofTKZTE/edit#heading=h.c843crkluuf3" target="_blank" rel="noopener noreferrer" 
           className='rounded-full text-white font-bold py-2 px-4 text-center hover hover:underline'
           style={{ 
             backgroundImage: 'linear-gradient(to top, #054B8C, #00B0E4)',
             display: 'inline-block', // Ensures the gradient covers the button properly
           }}>
           <div>Extra Supplements</div>
          <div>SXM students exclusive!</div>
        </a>
      </div>
      )}

    <div className='ml-10'>
      <img src={Logo} alt="Logo" className="absolute bottom-12 left-0 right-0 mx-auto" style={{ width: '102px', height: 'auto' }} />
    </div> 
  </div>

    
  )
}

export default Navbar