import React from 'react'
import Main from '../../components/Account/Main'
import backgroundImage from '../../assets/IndependentLiving.png';

const Independent_Living = () => {
    const mainTitle = 'Independent Living';
    const cardsData = [
      { emoji: '🛠', title: 'Introduction', completed: 50 },
      { emoji: '🏠', title: 'Moving Out', completed: 60 },
      { emoji: '🏘', title: 'Buy vs Rent', completed: 60 },
      { emoji: '📋', title: 'Checklist Moving Out', completed: 60 },
      { emoji: '🧹', title: 'Chores', completed: 60 },
      { emoji: '😘', title: 'Dream House Calculation', completed: 60 },
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

export default Independent_Living
