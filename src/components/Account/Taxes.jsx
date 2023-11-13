import React from 'react'
import Main from '../../components/Account/Main'
import backgroundImage from '../../assets/Personal_Finances.png';

const Taxes = () => {
    const mainTitle = 'Taxes';
    const cardsData = [
      { emoji: '👨🏻', title: 'Why Taxes', completed: 50 },
      { emoji: '💸', title: 'Taxes E', completed: 60 },
      { emoji: '💵', title: 'Taxes S', completed: 60 },
      { emoji: '🪙', title: 'Taxes B', completed: 60 },
      { emoji: '🏦', title: 'Taxes I', completed: 60 },
      { emoji: '👩🏼‍💻', title: 'Multiple Jobs', completed: 60 },
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

export default Taxes
