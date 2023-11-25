import React,  {useState, useEffect}from 'react'
import Main from './Main'
import backgroundImage from '../../../assets/Personal_Finances.png';
import { useReadStatus } from '../../Account/update_read';

import Introduction from '../Abstracts/PersonalFinances/Introduction'
import MoneyPath from '../Abstracts/PersonalFinances/MoneyPath'
import TheGoldenPillars from '../Abstracts/PersonalFinances/TheGoldenPillars'
import Budgeting from '../Abstracts/PersonalFinances/Budgeting'
import GrowingMoney from '../Abstracts/PersonalFinances/GrowingMoney'
import Zero_to_ten from '../Abstracts/PersonalFinances/$0 to $10k' 
import Ten_and_now from '../Abstracts/PersonalFinances/$10k and now'
import RuleOfThumb from '../Abstracts/PersonalFinances/RuleOfThumb'


const Personal_Finances = () => { 
  const [readStatuses, toggleReadStatus] = useReadStatus('personal finances');
  const [currentComponent, setCurrentComponent] = useState(null);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    setCardsData([
      { emoji: '🫣', title: 'Introduction', completed: readStatuses['introduction'] ? 100 : 0, path: 'introduction' },
      { emoji: '🛣', title: 'Money Paths', completed: readStatuses['money_paths'] ? 100 : 0, path: 'moneyPath' },
      { emoji: '🏆', title: 'The Golden Pillars', completed: readStatuses['the_golden_pillars'] ? 100 : 0, path: 'theGoldenPillars' },
      { emoji: '🔐', title: 'Budgeting', completed: readStatuses['budgeting'] ? 100 : 0, path: 'budgeting' },
      { emoji: '📈', title: 'Growing Money', completed: readStatuses['growing_money'] ? 100 : 0, path: 'growingMoney' },
      { emoji: '🚀', title: '€0 to €10k', completed: readStatuses['zero_to_ten'] ? 100 : 0, path: 'zero_to_ten' },
      { emoji: '🔮', title: '€10k And Now?', completed: readStatuses['ten_and_now'] ? 100 : 0, path: 'ten_and_now' },
      { emoji: '👍🏾', title: 'Rules of Thumb', completed: readStatuses['rules_of_thumb'] ? 100 : 0, path: 'ruleOfThumb' },
    ]);
}, [readStatuses]);
  
const handleToggleReadStatus = (path) => {
  toggleReadStatus(path);
};

const componentMapping = {
  introduction: <Introduction onBackClick={() => setCurrentComponent(null)} 
                               readStatus={readStatuses['introduction']} 
                               onToggleRead={() => handleToggleReadStatus('introduction')} />,
  moneyPath: <MoneyPath onBackClick={() => setCurrentComponent(null)} 
                               readStatus={readStatuses['money_paths']} 
                               onToggleRead={() => handleToggleReadStatus('money_paths')} />,
  theGoldenPillars: <TheGoldenPillars onBackClick={() => setCurrentComponent(null)} 
                               readStatus={readStatuses['the_golden_pillars']} 
                               onToggleRead={() => handleToggleReadStatus('the_golden_pillars')} />,
  budgeting: <Budgeting onBackClick={() => setCurrentComponent(null)} 
                               readStatus={readStatuses['budgeting']} 
                               onToggleRead={() => handleToggleReadStatus('budgeting')} />,
  growingMoney: <GrowingMoney onBackClick={() => setCurrentComponent(null)} 
                               readStatus={readStatuses['growing_money']} 
                               onToggleRead={() => handleToggleReadStatus('growing_money')} />,                            
  zero_to_ten: <Zero_to_ten onBackClick={() => setCurrentComponent(null)} 
                               readStatus={readStatuses['zero_to_ten']} 
                               onToggleRead={() => handleToggleReadStatus('zero_to_ten')} />,
  ten_and_now: <Ten_and_now onBackClick={() => setCurrentComponent(null)} 
                               readStatus={readStatuses['ten_and_now']} 
                               onToggleRead={() => handleToggleReadStatus('ten_and_now')} />,
  ruleOfThumb: <RuleOfThumb onBackClick={() => setCurrentComponent(null)} 
                               readStatus={readStatuses['rules_of_thumb']} 
                               onToggleRead={() => handleToggleReadStatus('rules_of_thumb')} />,
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
              mainTitle="Personal Finance"
              cardsData={cardsData}
              gridCols="md:grid-cols-4 grid-cols-1"
              navigateTo={navigateTo} />
      }
</div>
);
}
export default Personal_Finances
