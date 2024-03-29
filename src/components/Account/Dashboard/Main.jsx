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

const Main = ({ background, mainTitle, cardsData, gridCols, gapx, navigateTo, readProgress, doProgress, subChapter }) => {
  const handleCardClick = (path) => {
    navigateTo(path);
  }

    const feedbackLinks = {
      'personal_finance': 'https://forms.gle/3XU5esNqhR1rEDib8',
      'taxes': 'https://forms.gle/ufAWjL4KsPDUUFcn8',
      'career_building': 'https://forms.gle/PfT6FaXc6YCxWfpm8',
      'independent_living': 'https://forms.gle/juf7XJrX9RTccUDd7',
      'life_skills': 'https://forms.gle/KWDMkXox82BxJXCN8',
      'health': 'https://forms.gle/aZYBdwchZAjVfsmXA',
    };

    const navigateToFeedback = () => {
      const feedbackLink = feedbackLinks[subChapter];
      if (feedbackLink) {
        window.open(feedbackLink, '_blank');
      } else {
        console.error("No feedback link found for this subchapter");
      }
    };

    const isSubchapterCompleted = () => {
      return cardsData.every(card => card.completed === 100);
    };

  return (
    <div className="bg-white min-w-screen max-w-screen bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
         style={{ backgroundImage: `url(${background})` }}>

      <div className="bg-white w-[90%] h-[90%] flex flex-col rounded-lg justify-between">
        <div className="flex justify-between items-center mt-3 ml-12 mr-12">
          <h1 className='lg:text-[42px] font-bold text-[25px]'>
            {mainTitle}
          </h1>

          {/* {isSubchapterCompleted() && ( */}
      <div className="flex justify-center mt-4 hover:underline hover:text-white text-[19px]">
        <button 
        onClick={navigateToFeedback}
        style={{
          backgroundImage: 'linear-gradient(to top, #94A9F6, #CA7ED4)',
          color: 'white',
          fontWeight: 'bold',
          padding: '0.6rem 1.3rem', 
          borderRadius: '9999px', 
          border: 'none', 
          cursor: 'pointer', 
          textDecoration: 'none' 
        }}
      >
        Feedback
      </button>

      </div>
    {/* )} */}
          {/* FOR PROGRESS WITHIN A SUBJECT */}
          {/* <div className='flex'>
          <div className='flex flex-col items-center text-[14px] mr-10'>
            <span className='whitespace-nowrap'>Read Progress: {readProgress}%</span>
            <ProgressBar 
              completed={readProgress}
              label=""
              customLabelStyles={{
                color: 'transparent',
                fontSize: '0px'
              }}
              height="10px"
              bgColor="linear-gradient(to left, #94A9F6, #CA7ED4)"
              labelColor="#e80909"
              transitionTimingFunction="linear"
              className="w-full" 
            />
          </div>

            <div className='flex flex-col items-center text-[14px]'>
            <span className='whitespace-nowrap'>Do Progress: {doProgress}%</span>
              <ProgressBar 
                completed={doProgress}
                label=""
                customLabelStyles={{
                  color: 'transparent',
                  fontSize: '0px'
                }}
                height="10px"
                bgColor="linear-gradient(to left, #94A9F6, #CA7ED4)"
                labelColor="#e80909"
                transitionTimingFunction="linear"
                className="w-full" 
              />
            </div>
          </div> */}
        </div>
        <div className='flex-grow flex justify-center'> {/* Flex container to center the grid */}
          <div className={`grid ${gridCols} mt-6`} style={{ rowGap: '1px', columnGap: `${gapx}px` }}> {/* Grid container */}
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

export default Main;