import React, {useState, useEffect} from 'react'
import Main from './Main'
import backgroundImage from '../../../assets/bg/Health.png';
import { useReadStatus } from '../../Account/update_read';
import {useChapterReadProgress} from '../Dashboard/Chapter_Read_Progress'

import Sleep from '../Abstracts/Health/Sleep';
import Exercise from '../Abstracts/Health/Exercise';
import StressAnxiety from '../Abstracts/Health/Stress&Anxiety';
import DigitalDetox from '../Abstracts/Health/DigitalDetox';
import Perfectionism from '../Abstracts/Health/Perfectionism';
import Relationships from '../Abstracts/Health/Relationships';
import Insurance from '../Abstracts/Health/Insurance';
import Hydration from '../Abstracts/Health/Hydration';

const Health = () => {
    const [readStatuses, toggleReadStatus] = useReadStatus('health')
    const [currentComponent, setCurrentComponent] = useState(null);
    const [cardsData, setCardsData] = useState([]);
    const chapterReadProgress = useChapterReadProgress('health');

    useEffect(() => {
      setCardsData([
        { emoji: '😴', title: 'Sleep', completed: readStatuses['sleep'] ? 100 : 0, path: 'sleep' },
      //{ emoji: '💪🏻', title: 'Exercise', completed: readStatuses['exercise'] ? 100 : 0, path: 'exercise' },
      //{ emoji: '😣', title: 'Stress & Anxiety', completed: readStatuses['stress_and_anxiety'] ? 100 : 0, path: 'stressAnxiety' },
      //{ emoji: '📱', title: 'Digital Detox', completed: readStatuses['digital_detox'] ? 100 : 0, path: 'digitalDetox' },
      //{ emoji: '😇', title: 'Perfectionism', completed: readStatuses['perfectionism'] ? 100 : 0, path: 'perfectionism' },
      //{ emoji: '🫱🏻‍🫲🏼', title: 'Relationships', completed: readStatuses['relationships'] ? 100 : 0, path: 'relationships' },
      { emoji: '⛑️', title: 'Insurance', completed: readStatuses['insurance'] ? 100 : 0, path: 'insurance' },
      //{ emoji: '💧', title: 'Hydration', completed: readStatuses['hydration'] ? 100 : 0, path: 'hydration' },
      ]);
  }, [readStatuses]);
    
  const handleToggleReadStatus = (path) => {
    toggleReadStatus(path);
  };
  
  const componentMapping = {
    sleep: <Sleep onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['sleep']} 
                                 onToggleRead={() => handleToggleReadStatus('sleep')} />,
    exercise: <Exercise onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['exercise']} 
                                 onToggleRead={() => handleToggleReadStatus('exercise')} />,
    stressAnxiety: <StressAnxiety onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['stress_and_anxiety']} 
                                 onToggleRead={() => handleToggleReadStatus('stress_and_anxiety')} />,
    digitalDetox: <DigitalDetox onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['digital_detox']} 
                                 onToggleRead={() => handleToggleReadStatus('digital_detox')} />,
    perfectionism: <Perfectionism onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['perfectionism']} 
                                 onToggleRead={() => handleToggleReadStatus('perfectionism')} />,                            
    relationships: <Relationships onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['relationships']} 
                                 onToggleRead={() => handleToggleReadStatus('relationships')} />,
    insurance: <Insurance onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['insurance']} 
                                 onToggleRead={() => handleToggleReadStatus('insurance')} />,                            
    hydration: <Hydration onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['hydration']} 
                                 onToggleRead={() => handleToggleReadStatus('hydration')} />,
  };
    
    const navigateTo = (path) => {
      const ComponentToShow = componentMapping[path];
      setCurrentComponent(ComponentToShow);
    };

    return (
      <div>
       {currentComponent ? 
           currentComponent : 
           <Main background={backgroundImage}
                 mainTitle='Health'
                 cardsData={cardsData}
                 gridCols="md:grid-cols-3 grid-cols-1"
                 gapx={150}
                 navigateTo={navigateTo} 
                 readProgress={chapterReadProgress}
                 subChapter={'health'}
                 />
         }
   </div>
   );
}

export default Health
