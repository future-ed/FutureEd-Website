import React, { useState, useEffect } from 'react';
import backgroundImage from '../../../assets/profile.png';
import home from '../../../assets/bg_home.png';
import { UserAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useOverallReadProgress} from '../../Account/overall_read_progress';

const Home = () => {
    const { user, logOut } = UserAuth();
    const [userData, setUserData] = useState({});
    const [notifications, setNotifications] = useState([]);
    const [showFeedbackButton, setShowFeedbackButton] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalMessages, setTotalMessages] = useState(0); 
    const navigate = useNavigate();
    const readProgress = useOverallReadProgress();
    const messagesPerPage = 3;
    const totalPages = Math.ceil(totalMessages / messagesPerPage);
    const [showSignOutConfirmation, setShowSignOutConfirmation] = useState(false);

    const handleFeedbackClick = () => {
        const feedbackUrl = "https://www.google.com/maps/@47.5058859,19.0709642,14z?entry=ttu"; 
        window.open(feedbackUrl, "_blank");
    };


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
    
    useEffect(() => {
        if (user) {
            const userDocRef = doc(db, 'users', user.email);
            const unsubscribeUser = onSnapshot(userDocRef, (userDocSnap) => {
                if (userDocSnap.exists()) {
                    const userInfo = userDocSnap.data().info;
                    setUserData(userInfo);
                    if (readProgress === 100) {
                        setShowFeedbackButton(true);
                    }

                    const notificationRef = doc(db, 'notifications', 'notification');
                    const unsubscribeNotifications = onSnapshot(notificationRef, (notificationSnap) => {
                        if (notificationSnap.exists()) {
                            const data = notificationSnap.data();
                            const userCountryMessages = Object.entries(data)
                                .map(([key, value]) => {
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
    }, [user, readProgress, currentPage]);
    

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
                {showFeedbackButton && (
                 <button 
                    onClick={handleFeedbackClick}
                    className="absolute top-[65px] right-[95px] m-4 bg-[#000B28] text-white font-bold py-1 px-4 rounded-full">
                    Feedback
                </button>
                )}

                
            <div className="flex items-start mb-5">
                    
                    <div style={{ width: '565px', height: '60' }}>
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
                            <h2 className='font-bold text-2xl mb-2 text-black mt-[-90px]'>Welcome back,</h2>
                            <h2 className='italic font-light text-xl mb-6 text-black'>{userData.name || 'NAME'}</h2>
                        </div>
                    </div>
                    
                    <div className="w-96 h-60 bg-gray-100 rounded-lg p-4 ml-4"> 
                        <p className='font-bold mb-2 text-xl'>Assignments</p>
                        <p>Coming soon</p>
                        {/* Add assignments content here */}
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

                    <span className="px-2">{currentPage} / {totalPages}</span>

                    <button 
                        onClick={handleNext} 
                        className={`bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-1 px-2 rounded-r ${currentPage >= totalPages ? "invisible" : ""}`}
                    >
                        &gt;
                    </button>
                </div>
            </div>
            {showSignOutConfirmation && (
                <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center ml-[20px]">
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
            <div className="flex justify-center mb-[-30px]">
                <button onClick={handleSignOut} className="bg-black text-white font-bold py-1 px-10 rounded-full">
                    Sign Out
                </button>
            </div>
                
            
            </div>
        </div>
    );
};

export default Home;
