import React, { useState, useEffect } from 'react';
import backgroundImage from '../../../assets/profile.png';
import { UserAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user, logOut} = UserAuth();
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                const docRef = doc(db, 'users', user.email);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setUserData(docSnap.data().info);
                } else {
                    console.log("No such document!");
                }
            }
        };

        fetchData();
    }, [user]);

    const handleSignOut = async () => {
        try {
            await logOut();
            navigate('/'); // redirect to home or sign-in page
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col"
            style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-white w-[90%] h-[90%]">
                    <h1 className='md:text-[42px] font-bold ml-12 mt-6 text-[30px] mb-7'>
                        Profile
                    </h1>
                    <div className='md:text-[15px] font-bold ml-12 mt-6 text-[15px]'>
                        <h1>Name</h1>
                        <h1 className='italic font-light mb-3'>{userData.name || 'Not set'}</h1>
                        <h1>Nationality</h1>
                        <h1 className='italic font-light mb-3'>{userData.country || 'Not set'}</h1>
                        <h1>Birthday</h1>
                        <h1 className='italic font-light mb-3'>{userData.birthday || 'Not set'}</h1>
                        <h1>Selected Plan</h1>
                        <h1 className='italic font-light mb-3'>{userData.plan || 'Not set'}</h1>
                        <h1>Email</h1>
                        <h1 className='italic font-light mb-6'>{user.email || 'Not set'}</h1>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={handleSignOut} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded">
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
