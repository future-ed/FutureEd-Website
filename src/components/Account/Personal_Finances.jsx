import React,  {useState}from 'react'
import Main from '../../components/Account/Main'
import backgroundImage from '../../assets/Personal_Finances.png';
import Introduction from '../Account/Abstracts/Introduction'
import MoneyPath from '../Account/Abstracts/MoneyPath'
import TheGoldenPillars from '../Account/Abstracts/TheGoldenPillars'
import Budgeting from '../Account/Abstracts/Budgeting'
import GrowingMoney from '../Account/Abstracts/GrowingMoney'
import Zero_to_ten from '../Account/Abstracts/$0 to $10k' 
import Ten_and_now from '../Account/Abstracts/$10k and now'
import RuleOfThumb from '../Account/Abstracts/RuleOfThumb'


const Personal_Finances = () => { 
  const [currentComponent, setCurrentComponent] = useState(null);
  const mainTitle = 'Personal Finance';

  const componentMapping = {
    introduction: Introduction,
    moneyPath: MoneyPath,
    theGoldenPillars: TheGoldenPillars,
    budgeting: Budgeting,
    growingMoney: GrowingMoney,
    zero_to_ten: Zero_to_ten,
    ten_and_now: Ten_and_now,
    ruleOfThumb: RuleOfThumb,
  };

  const handleBackClick = () => {
    setCurrentComponent(null);
  }
  
  const cardsData = [
    { emoji: '🫣', title: 'Introduction', completed: 60, path: 'introduction' },
    { emoji: '🛣', title: 'Money Paths', completed: 60, path: 'moneyPath' },
    { emoji: '🏆', title: 'The Golden Pillars', completed: 60, path: 'theGoldenPillars' },
    { emoji: '🔐', title: 'Budgeting', completed: 60, path: 'budgeting' },
    { emoji: '📈', title: 'Growing Money', completed: 60, path: 'growingMoney' },
    { emoji: '🚀', title: '€0 to €10k', completed: 60, path: 'zero_to_ten' },
    { emoji: '🔮', title: '€10k And Now?', completed: 60, path: 'ten_and_now' },
    { emoji: '👍🏾', title: 'Rules of Thumb', completed: 60, path: 'ruleOfThumb' },
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
);
}
export default Personal_Finances
