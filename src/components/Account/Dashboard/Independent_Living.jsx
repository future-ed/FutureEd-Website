import React, {useState} from 'react'
import Main from './Main'
import backgroundImage from '../../../assets/IndependentLiving.png';
import IndepIntroduction from '../Abstracts/IndependentLiving/Introduction';
import MovingOut from '../Abstracts/IndependentLiving/MovingOut';
import BuyVsRent from '../Abstracts/IndependentLiving/BuyVSRent';
import ChecklistMovingOut from '../Abstracts/IndependentLiving/ChecklistMovingOut';
import Chores from '../Abstracts/IndependentLiving/Chores';
import DreamHouseCalculation from '../Abstracts/IndependentLiving/DreamHouseCalculationandCar';


const Independent_Living = () => {
    const [currentComponent, setCurrentComponent] = useState(null);
    const mainTitle = 'Independent Living';
    const componentMapping = {
      indepIntroduction: IndepIntroduction,
      movingOut: MovingOut,
      buyVsRent: BuyVsRent,
      checklistMovingOut: ChecklistMovingOut,
      chores: Chores,
      dreamHouseCalculation: DreamHouseCalculation,
    };
  
    const handleBackClick = () => {
      setCurrentComponent(null);
    }
    const cardsData = [
      { emoji: '🛠', title: 'Introduction', completed: 50, path: 'indepIntroduction' },
      { emoji: '🏠', title: 'Moving Out', completed: 60, path: 'movingOut' },
      { emoji: '🏘', title: 'Buy vs Rent', completed: 60, path: 'buyVsRent' },
      { emoji: '📋', title: 'Checklist Moving Out', completed: 60, path: 'checklistMovingOut' },
      { emoji: '🧹', title: 'Chores', completed: 60, path: 'chores' },
      { emoji: '😘', title: 'Dream House Calculation', completed: 60, path: 'dreamHouseCalculation' },
    ];
    const gridCols = 'md:grid-cols-3 grid-cols-1';
    const navigateTo = (path) => {
      const ComponentToShow = componentMapping[path];
      if (ComponentToShow) {
        setCurrentComponent(<ComponentToShow onBackClick={handleBackClick}/>);
      }
    };

    return (
      <div>
        {currentComponent ? React.cloneElement(currentComponent, { onBackClick: handleBackClick }) : (
            <Main 
              background={backgroundImage}
              mainTitle={mainTitle}
              cardsData={cardsData}
              gridCols={gridCols}
              navigateTo={navigateTo}
            />
        )}
      </div>
    )
}

export default Independent_Living
