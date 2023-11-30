import React, {useState, useEffect} from 'react'
import Main from './Main'
import backgroundImage from '../../../assets/IndependentLiving.png';
import { useReadStatus } from '../../Account/update_read';
import {useChapterReadProgress} from '../Dashboard/Chapter_Read_Progress'

import IndepIntroduction from '../Abstracts/IndependentLiving/Introduction';
import MovingOut from '../Abstracts/IndependentLiving/MovingOut';
import BuyVsRent from '../Abstracts/IndependentLiving/BuyVSRent';
import ChecklistMovingOut from '../Abstracts/IndependentLiving/ChecklistMovingOut';
import Chores from '../Abstracts/IndependentLiving/Chores';
import DreamHouseCalculation from '../Abstracts/IndependentLiving/DreamHouseCalculationandCar';


const Independent_Living = () => {
    const [readStatuses, toggleReadStatus] = useReadStatus('independent living')
    const [currentComponent, setCurrentComponent] = useState(null);
    const [cardsData, setCardsData] = useState([]);
    const chapterReadProgress = useChapterReadProgress('independent living');

    useEffect(() => {
      setCardsData([
      { emoji: '🛠', title: 'Introduction', completed: readStatuses['introduction'] ? 100 : 0, path: 'indepIntroduction' },
      { emoji: '🏠', title: 'Moving Out', completed: readStatuses['moving_out'] ? 100 : 0, path: 'movingOut' },
      { emoji: '🏘', title: 'Buy vs Rent', completed: readStatuses['buy_vs_rent'] ? 100 : 0, path: 'buyVsRent' },
      { emoji: '📋', title: 'Checklist Moving Out', completed: readStatuses['checklist_moving_out'] ? 100 : 0, path: 'checklistMovingOut' },
      { emoji: '🧹', title: 'Chores', completed: readStatuses['chores'] ? 100 : 0, path: 'chores' },
      { emoji: '😘', title: 'Dream House Calculation', completed: readStatuses['dream_house_calculation'] ? 100 : 0, path: 'dreamHouseCalculation' },
      ]);
  }, [readStatuses]);
    
  const handleToggleReadStatus = (path) => {
    toggleReadStatus(path);
  };
  
  const componentMapping = {
    indepIntroduction: <IndepIntroduction onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['introduction']} 
                                 onToggleRead={() => handleToggleReadStatus('introduction')} />,
    movingOut: <MovingOut onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['moving_out']} 
                                 onToggleRead={() => handleToggleReadStatus('moving_out')} />,
    buyVsRent: <BuyVsRent onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['buy_vs_rent']} 
                                 onToggleRead={() => handleToggleReadStatus('buy_vs_rent')} />,
    checklistMovingOut: <ChecklistMovingOut onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['checklist_moving_out']} 
                                 onToggleRead={() => handleToggleReadStatus('checklist_moving_out')} />,
    chores: <Chores onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['chores']} 
                                 onToggleRead={() => handleToggleReadStatus('chores')} />,                            
    dreamHouseCalculation: <DreamHouseCalculation onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['dream_house_calculation']} 
                                 onToggleRead={() => handleToggleReadStatus('dream_house_calculation')} />,
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
                 mainTitle='Independent Living'
                 cardsData={cardsData}
                 gridCols="md:grid-cols-3 grid-cols-1"
                 navigateTo={navigateTo} 
                 readProgress={chapterReadProgress}
                 />
         }
   </div>
   );
}

export default Independent_Living
