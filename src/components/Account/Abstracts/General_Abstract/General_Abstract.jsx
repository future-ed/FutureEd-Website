import React, { useState, useEffect } from 'react';

const General_Abstract = ({ backgroundImage, title, content, onBackClick, readStatus, onToggleRead }) => {
    const [isChecked, setIsChecked] = useState(readStatus);

    useEffect(() => {
        setIsChecked(readStatus);
      }, [readStatus]);

    const handleToggleRead = () => {
        setIsChecked(!isChecked); // Update local state immediately for UI feedback
        onToggleRead(); // Update global state
    };

    return (
        <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            
                    <div className="flex flex-col h-screen justify-end items-center w-full">
                        <div className="mb-4 text-start self-stretch ml-[160px] font-bold"> 
                            <p className='text-3xl'>{title}</p>
                        </div>
                        <div className="bg-white w-full h-4/5"> 
                            <svg onClick={onBackClick} className="top-3 cursor-pointer mt-1 " width="30" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 20,10 L 0,10 L 3,7 M 0,10 L 3,13" fill="none" stroke="black" strokeWidth="2"/>
                            </svg>
                            <div className='ml-[160px] mr-[150px]'>
                                {content}
                            </div>
                            <div className="absolute bottom-[60px] right-[60px] flex items-center ml-3">
                            <button
                                onClick={handleToggleRead}
                                className={`border-2 px-1 py-1/2 rounded ${isChecked ? 'border-green-500' : 'border-red-500'}`}>
                                <span style={{ visibility: isChecked ? 'visible' : 'hidden' }}>
                                    &#10004;
                                </span>
                            </button>

                                <span className="ml-2 text-black">Read</span>
                            </div>
                        </div>
                    </div>
                </div>
            
       
    );
};

export default General_Abstract
