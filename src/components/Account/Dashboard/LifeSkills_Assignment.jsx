import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Reflection from '../../../components/Account/Dashboard/Assignments/Life Skills/Procrastination_Self_Reflection'
import Beat_Procrastination from '../../../components/Account/Dashboard/Assignments/Life Skills/Beat_Procrastination_Challenge'
import Stress_And_Anxiety from './Assignments/Life Skills/Stress_And_Anxiety';

const LifeSkills_Assignment = () => {
    const navigate = useNavigate();
    const [currentExercise, setCurrentExercise] = useState(1);

    const onBackClick = () => {
        navigate('/Home');
    };

    const renderExercise = () => {
        // eslint-disable-next-line 
        switch (currentExercise) {
            case 1:
                return <Reflection />;
            case 2:
                return <Beat_Procrastination />; 
            case 3:
                return <Stress_And_Anxiety />;
            // case 4:
            //     return <Laundry />;              
            // case 5:
            //     return <LaundryQuiz />;        
            // case 6:
            //     return <CleaningQuiz />;
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
                {/* <p className='text-3xl font-bold ml-4'>Independent Living</p> */}
            </div>

            <div className="text-xl flex justify-center space-x-12">
                <button 
                className={`${buttonBaseClass} ${currentExercise === 1 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
                style={currentExercise === 1 ? activeButtonStyle : {}}
                onClick={() => setCurrentExercise(1)}
                >
                Procrastination Self-Reflection
                </button>
                <button 
                className={`${buttonBaseClass} ${currentExercise === 2 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
                style={currentExercise === 2 ? activeButtonStyle : {}}
                onClick={() => setCurrentExercise(2)}
                >
                Beat Procrastination Challenge
                </button>
                <button 
                className={`${buttonBaseClass} ${currentExercise === 3 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
                style={currentExercise === 3 ? activeButtonStyle : {}}
                onClick={() => setCurrentExercise(3)}
                >
                Stress and Anxiety Self-Reflection
                </button>
                {/* <button 
                className={`${buttonBaseClass} ${currentExercise === 4 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
                style={currentExercise === 4 ? activeButtonStyle : {}}
                onClick={() => setCurrentExercise(4)}
                >
                Laundry
                </button>
                <button 
                className={`${buttonBaseClass} ${currentExercise === 5 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
                style={currentExercise === 5 ? activeButtonStyle : {}}
                onClick={() => setCurrentExercise(5)}
                >
                Laundry Quiz
                </button>
                <button 
                className={`${buttonBaseClass} ${currentExercise === 6 ? 'text-white' : 'hover:bg-gray-200 hover:text-black'}`}
                style={currentExercise === 6 ? activeButtonStyle : {}}
                onClick={() => setCurrentExercise(6)}
                >
                Cleaning Quiz
                </button> */}
            </div>

            <hr className='mt-6' style={{ width: '100%', border: '1px solid black' }} />

            <div className="exercise-content">
                {renderExercise()}
            </div>
        </div>
    );
}

export default LifeSkills_Assignment
