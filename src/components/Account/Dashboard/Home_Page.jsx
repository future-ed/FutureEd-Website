import React, { useState, useEffect } from 'react';
import backgroundImage from '../../../assets/bg/profile.png';
import home from '../../../assets/bg_home.png';
import { UserAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
// import { useOverallReadProgress} from '../../Account/overall_read_progress';

const Home = () => {
    const { user, logOut } = UserAuth();
    const [userData, setUserData] = useState({});
    const [notifications, setNotifications] = useState([]);
    // const [showFeedbackButton, setShowFeedbackButton] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalMessages, setTotalMessages] = useState(0); 
    const navigate = useNavigate();
    // const readProgress = useOverallReadProgress();
    const messagesPerPage = 3;
    const totalPages = Math.ceil(totalMessages / messagesPerPage);
    const displayCurrentPage = totalMessages === 0 ? 0 : currentPage;
    const [showSignOutConfirmation, setShowSignOutConfirmation] = useState(false);

    const handleFeedbackClick = () => {
        const feedbackUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfi-AWfU5V4076d1IYM2z_mLdYi3LMGzTY846AZ_JQAxdlP8w/viewform?usp=sharing"; 
        window.open(feedbackUrl, "_blank");
    };

    const Finance_assignment = () => {
        navigate('/Finance_Assignment');
    }

    const Taxes_assignment = () => {
        navigate('/Taxes_Assignment');
    }

    const Career_assignment = () => {
        navigate('/Career_Assignment');
    }

    const Health_assignment = () => {
        navigate('/Health_Assignment');
    }

    const IndependentLiving_assignment = () => {
        navigate('/Independent_Living_Assignment');
    }

    const LifeSkills_assignment = () => {
        navigate('');
    }


    const handleSignOut = () => {
        setShowSignOutConfirmation(true);
    };

    const handleSignOutYes = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleSignOutNo = () => {
        setShowSignOutConfirmation(false);
    };

    const gradientStylePink = {
        background: 'linear-gradient(to top, #E7C8EC, #7AE7FF )',
        color: 'transparent', 
      };
    
      

    const Card = ({ title, description, onCardClick }) => {
        return (
          <div 
            className='bg-white w-[150px] h-[100px] rounded-lg my-1.5 text-[#E1DEDE] flex flex-col justify-between items-center p-2 mx-auto sm:mx-0 relative gradient-border cursor-pointer'
            style={gradientStylePink}
            onClick={onCardClick}
          >
            <div className='flex flex-col items-center'>
            <span>
                <h1 className='text-[#030303] leading-[2rem] mt-[5px]'>{title}</h1>
            </span>
            <div className='text-[#1b2750] text-center mt-[-4px]'>
                <p>{description}</p>
            </div>
            </div>
        
            <span></span>
            {/* <svg className="absolute bottom-1 right-1 cursor-pointer" width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 23,10 L 40,10 L 35,5 M 40,10 L 35,15" fill="none" stroke="black" strokeWidth="2"/>
            </svg> */}
          </div>
        );
      };
    
    useEffect(() => {
        if (user && user.email) {
            console.log('User email:', user.email);
            const userDocRef = doc(db, 'users', user.email);
            const unsubscribeUser = onSnapshot(userDocRef, (userDocSnap) => {
                if (userDocSnap.exists()) {
                    const userInfo = userDocSnap.data().info;
                    setUserData(userInfo);
                    // if (readProgress === 100) {
                    //     setShowFeedbackButton(true);
                    // }

                    const notificationRef = doc(db, 'notifications', 'notification');
                    const unsubscribeNotifications = onSnapshot(notificationRef, (notificationSnap) => {
                        if (notificationSnap.exists()) {
                            console.log('Notification data:', notificationSnap.data());
                            const data = notificationSnap.data();
                            const userCountryMessages = Object.entries(data)
                                .map(([key, value]) => {
                                    console.log('Created at:', value.created_at);
                                    const date = value.created_at.toDate ? value.created_at.toDate() :
                                        new Date(value.created_at.seconds * 1000);
                                    return {
                                        date: date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }),
                                        message: value.message,
                                        country: value.country,
                                        timestamp: date.getTime(),
                                        id: key
                                    };
                                })
                                .filter(notification => notification.country === userInfo.country)
                                .sort((a, b) => b.timestamp - a.timestamp);

                            setTotalMessages(userCountryMessages.length);
                            const startIndex = (currentPage - 1) * messagesPerPage;
                            setNotifications(userCountryMessages.slice(startIndex, startIndex + messagesPerPage));
                        }
                    });
    
                    return () => {
                        unsubscribeNotifications();
                    };
                } else {
                    console.log("No such user document!");
                }
            });
    
            return () => {
                unsubscribeUser();
            };
        }
    }, [user, currentPage]);
    

    const handleNext = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    };

    const handlePrevious = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    };

    return (
        <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="bg-white w-[90%] h-[90%] rounded-lg shadow-lg p-12 flex flex-col justify-between">
                <h1 className='text-[42px] font-bold mb-8 text-start mt-[-36px]'>
                    Home
                </h1>
                {/* {showFeedbackButton && ( */}
                 <button 
                    onClick={handleFeedbackClick}
                    style={{
                        backgroundImage: 'linear-gradient(to top, #94A9F6, #CA7ED4)',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '0.7rem 1rem', 
                        borderRadius: '9999px',
                        border: 'none', 
                        cursor: 'pointer', 
                        //textDecoration: 'none'
                      }}
                    className="absolute top-[58px] right-[95px] m-2 text-white font-bold py-2 px-4 rounded-full hover:underline">
                    Final Feedback
                </button>
                {/* )} */}

                
            <div className="flex items-start mb-5 w-full">
                    
                    <div className='w-1/2 h-60 bg-white rounded-lg'>
                        <div style={{ 
                            backgroundImage: `url(${home})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '240px'
                        }}>
                            <h2 className='font-bold text-2xl mb-2 text-black mt-[-120px]'>Welcome back,</h2>
                            <h2 className='italic font-light text-xl mb-6 text-black'>{userData.name || 'NAME'}</h2>
                        </div>
                    </div>
                    
                    <div className="w-[55%] h-[280px]  rounded-lg p-3 ml-4 bg-gray-100"> 
                    {/* style={gradientStylePink} */}
                        <p className='font-bold mb-1 text-xl ml-2 text-black'>Assignments</p>
                        {/* <button onClick={handleAssignmentsClick} className='font-bold hover hover:underline'>
                            Click here ‼️‼️
                        </button> */}

                        <div className='grid grid-cols-3 gap-1 ml-2'>
                        <Card
                            title="💰"
                            description= "Personal Finance"
                            onCardClick={Finance_assignment}
                          />
                          <Card
                            title="💸"
                            description= "Taxes"
                            onCardClick={Taxes_assignment}
                          />
                          <Card
                            title="🔨"
                            description= "Career Building"
                            onCardClick={Career_assignment}
                          />
                          <Card
                            title="🏘️"
                            description= "Independent Living"
                            onCardClick={IndependentLiving_assignment}
                          />
                          <Card
                            title="🩺"
                            description= "Health"
                            onCardClick={Health_assignment}
                          />
                          <Card
                            title="🕺🏻"
                            description= "Life Skills"
                            onCardClick={LifeSkills_assignment}
                          />
                        </div>            
                    </div>
                </div>

                <div className="w-full bg-gray-100 rounded-lg p-4 mb-6 overflow-auto relative h-[210px]"> 
                <p className='font-bold mb-6 text-xl'>Notifications</p>
                <ul>
                    {notifications.map((notification) => (
                        <li key={notification.id} className="mb-4">
                            <span className="font-semibold">{notification.date}:</span>
                            <span className="ml-4">{notification.message}</span>
                        </li>
                    ))}
                </ul>
                
                <div className="pagination-controls absolute bottom-2 right-2 flex items-center">
                    <button 
                        onClick={handlePrevious} 
                        className={`bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 rounded-l ${currentPage <= 1 ? "invisible" : ""}`}
                    >
                        &lt;
                    </button>

                    <span className="px-2">{displayCurrentPage} / {totalPages}</span>

                    <button 
                        onClick={handleNext} 
                        className={`bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 rounded-r ${currentPage >= totalPages ? "invisible" : ""}`}
                    >
                        &gt;
                    </button>
                </div>
            </div>
            {showSignOutConfirmation && (
                <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg ">
                        <p>Are you sure you want to sign out?</p>
                        <div className="flex justify-center mt-4">
                            <button onClick={handleSignOutNo} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2">
                                No
                            </button>
                            <button onClick={handleSignOutYes} className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Original Sign Out Button */}
            <div className="flex justify-center mb-[-40px]">
                <button onClick={handleSignOut} className="bg-black text-white font-bold py-1 px-3 rounded-md text-sm">
                    Sign Out
                </button>
            </div>
                
            
            </div>
        </div>
    );
};

export default Home;