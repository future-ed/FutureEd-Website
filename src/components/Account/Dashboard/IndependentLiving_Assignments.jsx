import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovingOut from './Assignments/Independent Living/Moving_Out';
import Chores from './Assignments/Independent Living/Chores';

const IndependentLiving_Assignments = () => {
    const navigate = useNavigate();
    const [currentExercise, setCurrentExercise] = useState(1);

    const onBackClick = () => {
        navigate('/Home');
    };

    const renderExercise = () => {
        // eslint-disable-next-line 
        switch (currentExercise) {
            case 1:
                return <MovingOut />;
            case 2:
                  return <Chores />; 
            // case 3:
            //      return <Networking />;
            // default:   
            //     return <CV_Template />;
        }
    };

    return (
        <div>
            <div className="flex items-center mt-5 mb-12">
                <svg onClick={onBackClick} className="cursor-pointer" width="30" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 26,10 L 0,10 L 6,7 M 0,10 L 6,13" fill="none" stroke="black" strokeWidth="2"/>
                </svg>
                {/* <p className='text-3xl font-bold ml-4'>Independent Living</p> */}
            </div>

            <div className="text-xl flex justify-center mt-4 space-x-12">
                <button className="mx-2 hover:bg-gray-200" onClick={() => setCurrentExercise(1)}>Moving Out</button>
                <button className="mx-2 hover:bg-gray-200" onClick={() => setCurrentExercise(2)}>Chores</button>
                {/* <button className="mx-2" onClick={() => setCurrentExercise(3)}>Networking (Important People List)</button> */}
            </div>

            <hr className='mt-8' style={{ width: '100%', border: '1px solid black' }} />

            <div className="exercise-content">
                {renderExercise()}
            </div>
        </div>
    );
}

export default IndependentLiving_Assignments
