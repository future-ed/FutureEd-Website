import React from 'react'
import Main from '../../components/Account/Main'
import backgroundImage from '../../assets/Personal_Finances.png';

const Personal_Finances = () => { 
  const mainTitle = 'Personal Finance';
  const cardsData = [
    { emoji: '🫣', title: 'Introduction', completed: 100 },
    { emoji: '🛣', title: 'Money Paths', completed: 60 },
    { emoji: '🏆', title: 'The Golden Pillars', completed: 60 },
    { emoji: '🔐', title: 'Budgeting', completed: 60 },
    { emoji: '📈', title: 'Growing Money', completed: 60 },
    { emoji: '🚀', title: '€0 to €10k', completed: 60 },
    { emoji: '🔮', title: '€10k And Now?', completed: 60 },
    { emoji: '👍🏾', title: 'Rules of Thumb', completed: 60 },
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

export default Personal_Finances
