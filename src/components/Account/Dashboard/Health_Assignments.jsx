import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sleeping from '../Dashboard/Assignments/Health/Sleeping_Schedule';
import SleepQuiz from '../Dashboard/Assignments/Health/SleepQuiz'

const Health_Assignments = () => {
  const navigate = useNavigate();
    const [currentExercise, setCurrentExercise] = useState(1);

    const onBackClick = () => {
        navigate('/Home');
    };

    const renderExercise = () => {
        // eslint-disable-next-line 
        switch (currentExercise) {
            case 1:
                return <SleepQuiz />;
            case 2:
                return <Sleeping />; 
        }
    };

    const gradientBackground = { 
        backgroundImage: 'linear-gradient(to top, #054B8C, #00B0E4)' 
      };

      const activeButtonStyle = {
        ...gradientBackground, 
        color: 'white'
      };
      
    const buttonBaseClass = "px-3.5 py-1.5 rounded-full"; 

    return (
        <div>
            <div className="flex items-center mt-8 mb-[-27px]">
                <svg onClick={onBackClick} className="cursor-pointer" width="30" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 26,10 L 0,10 L 6,7 M 0,10 L 6,13" fill="none" stroke="black" strokeWidth="2"/>
                </svg>
            </div>

            <div className="text-xl flex justify-center space-x-12">
            <button 
                className={`${buttonBaseClass} ${currentExercise === 1 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
                style={currentExercise === 1 ? activeButtonStyle : {}}
                onClick={() => setCurrentExercise(1)}
                >
                Sleep Quiz
            </button>
            <button 
                className={`${buttonBaseClass} ${currentExercise === 2 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
                style={currentExercise === 2 ? activeButtonStyle : {}}
                onClick={() => setCurrentExercise(2)}
                >
                Sleeping Schedule
            </button>
            </div>

            <hr className='mt-6' style={{ width: '100%', border: '1px solid black' }} />

            <div className="exercise-content">
                {renderExercise()}
            </div>
        </div>
    );
}

export default Health_Assignments
