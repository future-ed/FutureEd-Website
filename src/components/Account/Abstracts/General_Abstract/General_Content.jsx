import React, { useState, useEffect } from 'react';

const General_Content = ({ title, content, onBackClick, readStatus, onToggleRead }) => {
  const [isChecked, setIsChecked] = useState(readStatus);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsChecked(readStatus);
    setCurrentImageIndex(0);
  }, [readStatus]);

  const handleToggleRead = () => {
    if (currentImageIndex < content.length - 1) {
      // If there are more images, move to the next one
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      // If it's the last image, toggle read status
      setIsChecked(!isChecked);
      onToggleRead();
    }
  };

  return (
    <div className="flex flex-col h-screen w-full relative">

        <div className="absolute top-[30px] left-[60px] flex items-center">
            <svg onClick={onBackClick} className="cursor-pointer mr-6" width="30" height="20" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
            <path d="M 20,10 L 0,10 L 3,7 M 0,10 L 3,13" fill="none" stroke="black" strokeWidth="2"/>
            </svg>
            <p className='text-3xl font-bold'>{title}</p>
        </div>
      {/* Display content (images) */}
      {content.map((image, index) => (
        <img key={index} src={image} alt={`content-${index}`} style={{ display: index === currentImageIndex ? 'block' : 'none', maxWidth: '100%' }} />
      ))}
  
      {/* Navigation arrows */}
        <div className="absolute top-[30px] right-[180px] flex items-center ml-3">
            {/* Back button (only for not the first page) */}
            {currentImageIndex !== 0 && (
                <button
                className="bg-black text-white rounded-full px-3 py-1 cursor-pointer"
                onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
                >
                &larr; Back
                </button>
            )}
        </div>
                
        
        <div className="absolute top-[30px] right-[60px] flex items-center ml-3">
            {/* Next arrow or button for the last page */}
            {currentImageIndex !== content.length - 1 ? (
                <button
                    className="bg-black text-white rounded-full px-3 py-1 cursor-pointer"
                    onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
                    >
                    Next &rarr;
                </button>
            ) : (
                <div>
                <button
                  onClick={handleToggleRead}
                  className={`border-2 px-1 py-1/2 mt-1 rounded ${isChecked ? 'border-green-500' : 'border-red-500'}`}>
                     <span style={{ visibility: isChecked ? 'visible' : 'hidden' }}>
                        &#10004;
                    </span>
                </button>
                <span className="ml-2 text-black">{'Read'}</span>
                </div>
            )}
        </div>
    </div>
  );
  
};

export default General_Content;
