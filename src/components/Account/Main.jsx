import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar"

const Card = ({emoji, title, completed, onCardClick }) => {
  const isCompleted = completed === 100;
  return (
    <button
      onClick={onCardClick}
      className='bg-[#F7F6FB] w-[200px]  max-w-[360] h-[250px] rounded-lg my-3 text-[#122A41] flex flex-col justify-start items-start p-5 mx-auto sm:mx-0 shadow-lg relative' 
      style={{ border: 'none', padding: 0 }} 
    >
      <div className="bg-white w-[40px] h-[40px] rounded-full mt-[12px] ml-[14px] mb-3">
        <span className='w-[30px] h-[30px] mb-[3px] md:mb-[3px] mr-4 md:mr-0 ml-[5px] flex justify-center mt-[2px] text-[23px]'>{emoji}</span>
      </div>
      <div className="flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start">
          
          <div className="flex flex-col ml-[14px]">
                <h1 className='text-start text-md font-bold'>{title}</h1>
              <div className="flex-grow mt-3 h-[100px] ">
              <p className='text-black text-start leading-[1.25rem] font-light text-[15px]'>Progress</p>
              <div className="progress-bar-container" style={{ position: 'relative', marginTop: '0.5rem', width: '160px' }}>
              <ProgressBar 
                completed={completed}
                customLabelStyles={{
                  display: 'none',
                }}
                height="7px"
                bgColor="linear-gradient(to left, #94A9F6, #CA7ED4)"
                labelColor="#e80909"
                transitionTimingFunction="linear"
              />
              <div style={{ 
                position: 'absolute',
                right: '0',
                bottom: '-20px',
                color: '#000000',
                fontSize: '13px',
              }}>
                {isCompleted ? "Done" : "To do"}
              </div>
            </div>
            </div>

            <svg className="absolute bottom-3 right-2.5" width="50" height="20" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,10 L 40,10 L 35,5 M 40,10 L 35,15" fill="none" stroke="black" strokeWidth="2"/>
            </svg>

          </div>
      </div>
  </button>
  )
}

const Main = ({ background, mainTitle, cardsData, gridCols, navigateTo }) => {
  const handleCardClick = (path) => {
    navigateTo(path);
  }

  return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen items-center relative flex flex-col"
         style={{ backgroundImage: `url(${background})`}}>

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white w-[90%] h-[90%]">
          <h1 className='md:text-[42px] font-bold ml-12 mt-6 text-[30px]'>
            {mainTitle}
          </h1>
          <div className={`grid ${gridCols} ml-12`}>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                emoji={card.emoji}
                title={card.title}
                completed={card.completed}
                onCardClick={() => handleCardClick(card.path)}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};


export default Main
