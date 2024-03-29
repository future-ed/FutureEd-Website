import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CVTemplate from '../Dashboard/Assignments/Career Building/CV_Template';
import Interview from '../Dashboard/Assignments/Career Building/Interview_Questions';
import Networking from '../Dashboard/Assignments/Career Building/Networking';

const Career_Assignments = () => {
    const navigate = useNavigate();
    const [currentExercise, setCurrentExercise] = useState(1);

    const onBackClick = () => {
        navigate('/Home');
    };

    const renderExercise = () => {
        switch (currentExercise) {
            case 1:
                return <CVTemplate />;
            case 2:
                 return <Interview />; 
            case 3:
                 return <Networking />;
            default:   
                return <CVTemplate />;
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
                {/* <p className='text-3xl font-bold ml-4'>Career Building</p> */}
            </div>

            <div className="text-xl flex justify-center space-x-12 ">
            <button 
          className={`${buttonBaseClass} ${currentExercise === 1 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
          style={currentExercise === 1 ? activeButtonStyle : {}}
          onClick={() => setCurrentExercise(1)}
        >
          CV Template
        </button>
        <button 
          className={`${buttonBaseClass} ${currentExercise === 2 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
          style={currentExercise === 2 ? activeButtonStyle : {}}
          onClick={() => setCurrentExercise(2)}
        >
          Interview Questions
        </button>
        <button 
          className={`${buttonBaseClass} ${currentExercise === 3 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
          style={currentExercise === 3 ? activeButtonStyle : {}}
          onClick={() => setCurrentExercise(3)}
        >
          Networking (Important People List)
        </button>
            </div>
            <hr className='mt-6' style={{ width: '100%', border: '1px solid black' }} />
            <div className="exercise-content">
                {renderExercise()}
            </div>
        </div>
    );
} 


export default Career_Assignments
