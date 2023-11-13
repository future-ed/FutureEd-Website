import React from 'react'
import Main from '../../components/Account/Main'
import backgroundImage from '../../assets/CareerBuilding.png';

const Career_Building = () => {
    const mainTitle = 'Career Building';
    const cardsData = [
      { emoji: '🔖', title: 'CV Building', completed: 50 },
      { emoji: '👔', title: 'LinkedIn Profile Building', completed: 60 },
      { emoji: '🙋‍♀️', title: 'Interview Preparation', completed: 60 },
      { emoji: '🤵🏽', title: 'Formal Dress Code', completed: 60 },
      { emoji: '💬', title: 'Negotiation', completed: 60 },
      { emoji: '🌐', title: 'Networking Psychology', completed: 60 },
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

export default Career_Building
