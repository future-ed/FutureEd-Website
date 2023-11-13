import React from 'react'
import Main from '../../components/Account/Main'
import backgroundImage from '../../assets/LifeSkills.png';

const LifeSkills = () => {
    const mainTitle = 'Life Skills';
    const cardsData = [
      { emoji: '📚', title: 'Study Hacks', completed: 50 },
      { emoji: '🗓', title: 'Time Management', completed: 60 },
      { emoji: '🖥', title: 'Workspace Optimisation', completed: 60 },
      { emoji: '🤸🏻', title: 'Procrastination', completed: 60 },
      { emoji: '', title: 'Coming soon', completed: 60 },
      { emoji: '', title: 'Coming soon', completed: 60 },
    ];
    const gridCols = 'md:grid-cols-3 grid-cols-1';
    return (
      <Main 
        background={backgroundImage}
        mainTitle={mainTitle}
        cardsData={cardsData}
        gridCols={gridCols}
      />
    )
}

export default LifeSkills
