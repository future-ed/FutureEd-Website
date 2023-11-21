import React, {useState} from 'react'
import Main from './Main'
import backgroundImage from '../../../assets/Health.png';
import Sleep from '../Abstracts/Health/Sleep';
import Exercise from '../Abstracts/Health/Exercise';
import StressAnxiety from '../Abstracts/Health/Stress&Anxiety';
import DigitalDetox from '../Abstracts/Health/DigitalDetox';
import Perfectionism from '../Abstracts/Health/Perfectionism';
import Relationships from '../Abstracts/Health/Relationships';
import Insurance from '../Abstracts/Health/Insurance';
import Hydration from '../Abstracts/Health/Hydration';

const Health = () => {
    const [currentComponent, setCurrentComponent] = useState(null);
    const mainTitle = 'Health';
    const componentMapping = {
      sleep: Sleep,
      exercise: Exercise,
      stressAnxiety: StressAnxiety,
      digitalDetox: DigitalDetox,
      perfectionism: Perfectionism,
      relationships: Relationships,
      insurance: Insurance,
      hydration: Hydration,
    };
  
    const handleBackClick = () => {
      setCurrentComponent(null);
    }
    const cardsData = [
      { emoji: '😴', title: 'Sleep', completed: 50, path: 'sleep' },
      { emoji: '💪🏻', title: 'Exercise', completed: 60, path: 'exercise' },
      { emoji: '😣', title: 'Stress & Anxiety', completed: 60, path: 'stressAnxiety' },
      { emoji: '📱', title: 'Digital Detox', completed: 60, path: 'digitalDetox' },
      { emoji: '😇', title: 'Perfectionism', completed: 60, path: 'perfectionism' },
      { emoji: '🫱🏻‍🫲🏼', title: 'Relationships', completed: 60, path: 'relationships' },
      { emoji: '⛑️', title: 'Insurance', completed: 60, path: 'insurance' },
      { emoji: '💧', title: 'Hydration', completed: 60, path: 'hydration' },
    ];
    const gridCols = 'md:grid-cols-4 grid-cols-1';
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

export default Health
