import React from 'react';
import MissionImage from '../../assets/bg/bg_mission.png'; // Import the mission image

const Mission = () => {
    const gradientStylePink = {
        background: 'linear-gradient(45deg, #FFFFFF, #F69BF4, #FFFFFF)',
        WebkitBackgroundClip: 'text', // For Webkit browsers
        backgroundClip: 'text',
        color: 'transparent', // Make the text transparent
    };

    return (
        <div id='Mission' className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center relative" style={{ backgroundImage: `url(${MissionImage})`, }}>
            <div className='max-w-screen-xl mx-auto py-20 px-4 text-center'>
                <p className='text-white text-xl md:text-3xl' style={gradientStylePink}>
                    “Our primary mission is to make life easier
                </p>
                <p className='text-white text-xl md:text-3xl mt-0 md:mt-2' style={gradientStylePink}>
                    by providing practical knowledge"
                </p>
            </div>
        </div>
    );
};

export default Mission;
