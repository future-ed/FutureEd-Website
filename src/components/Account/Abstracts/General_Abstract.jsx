import React, { useState } from 'react';

const General_Abstract = ({ backgroundImage, title, content, onBackClick }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(current => !current);
    };

    return (
        <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="flex h-screen relative"> 
                <div className="flex-grow">
                    <div className="flex flex-col h-screen justify-end items-center">
                        <div className="mb-4 text-start self-stretch ml-[150px] font-bold"> 
                            <p className='text-3xl'>{title}</p>
                        </div>
                        <div className="bg-white w-[1179px] h-4/5"> 
                            <svg onClick={onBackClick} className="top-3 cursor-pointer mt-1 " width="30" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 20,10 L 0,10 L 3,7 M 0,10 L 3,13" fill="none" stroke="black" strokeWidth="2"/>
                            </svg>
                            <div className='ml-[150px] mr-[150px]'>
                                {content}
                            </div>
                            <div className="absolute bottom-[60px] right-[60px] flex items-center ml-3">
                                <button onClick={handleClick} className="border-2 border-red-500 px-1 py-1/2 rounded">
                                    <span style={{ visibility: isChecked ? 'visible' : 'hidden' }}>&#10004;</span>
                                </button>
                                <span className="ml-2 text-black">Read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default General_Abstract
