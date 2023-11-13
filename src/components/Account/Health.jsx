import React from 'react'
import Main from '../../components/Account/Main'
import backgroundImage from '../../assets/Health.png';

const Health = () => {
    const mainTitle = 'Health';
    const cardsData = [
      { emoji: '😴', title: 'Sleep', completed: 50 },
      { emoji: '💪🏻', title: 'Exercise', completed: 60 },
      { emoji: '😣', title: 'Stress & Anxiety', completed: 60 },
      { emoji: '📱', title: 'Digital Detox', completed: 60 },
      { emoji: '😇', title: 'Perfectionism', completed: 60 },
      { emoji: '🫱🏻‍🫲🏼', title: 'Relationships', completed: 60 },
      { emoji: '⛑️', title: 'Insurance', completed: 60 },
      { emoji: '💧', title: 'Hydration', completed: 60 },
    ];
    const gridCols = 'md:grid-cols-4 grid-cols-1';
    return (
      <Main 
        background={backgroundImage}
        mainTitle={mainTitle}
        cardsData={cardsData}
        gridCols={gridCols}
      />
    )
}

export default Health
