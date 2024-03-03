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
      {/* Top navigation elements */}
      <div className="w-full flex justify-between items-center bg-white z-10 mt-9">
        {/* Back Click Arrow (always visible) */}
        <div className="flex items-center">
          <svg onClick={onBackClick} className="cursor-pointer" width="30" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 26,10 L 0,10 L 6,7 M 0,10 L 6,13" fill="none" stroke="black" strokeWidth="2"/>
          </svg>
          {/* <p className='text-3xl font-bold ml-4'>{title}</p> */}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center mr-4">
        {/* Back Navigation Button (if not the first image) */}
        {currentImageIndex !== 0 ? (
          <button
            className="bg-black text-white rounded-full px-3.5 py-1.5 cursor-pointer mr-2"
            style={{ minWidth: '75px' }} // Fixed width
            onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
          >
            &larr; Back
          </button>
        ) : (
          <div style={{ minWidth: '75px' }} /> // Invisible placeholder for alignment
        )}
        {/* Next Page Button (if not the last image) */}
        {currentImageIndex < content.length - 1 ? (
          <button
            className="bg-black text-white rounded-full px-3.5 py-1.5 cursor-pointer"
            style={{ minWidth: '75px' }} // Fixed width
            onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
          >
            Next &rarr;
          </button>
        ) : (
          <div style={{ minWidth: '75px' }} /> // Invisible placeholder for alignment
        )}
      </div>

      </div>

      {/* Display content (images) */}
      <div className="flex-grow">
        {content.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`content-${index}`}
            className={`${index === currentImageIndex ? '' : 'hidden'}`}
            style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 20px)', objectFit: 'contain', margin: 'auto', marginTop:'-85px' }} // Adjust the maxHeight if the navigation bar height changes
          />
        ))}
      </div>

      {/* Bottom navigation element: Read Button (if last image) */}
      <div className="absolute bottom-0 w-full flex justify-end items-center bg-white">
        {currentImageIndex === content.length - 1 && (
          <div className="flex items-center mr-10 mb-7">
            <button
              onClick={handleToggleRead}
              className={`mr-1 border-2 px-1.5 py-1 rounded ${isChecked ? 'border-green-500' : 'border-red-500'}`}
            >
              <span style={{ visibility: isChecked ? 'visible' : 'hidden' }}>
                &#10004;
              </span>
            </button>
            <span className="text-black text-[19px] ml-2">Read</span>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default General_Content;
