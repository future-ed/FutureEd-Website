import React,  {useState}from 'react'
import Main from '../../components/Account/Main'
import backgroundImage from '../../assets/Personal_Finances.png';
import WhyTaxes from '../Account/Abstracts/WhyTaxes';
import TaxesE from '../Account/Abstracts/TaxesE';
import TaxesS from '../Account/Abstracts/TaxesS';
import TaxesB from '../Account/Abstracts/TaxesB';
import TaxesI from '../Account/Abstracts/TaxesI';
import MultipleJobs from '../Account/Abstracts/MultipleJobs';

const Taxes = () => {
    const [currentComponent, setCurrentComponent] = useState(null);
    const mainTitle = 'Taxes';

    const componentMapping = {
      whyTaxes: WhyTaxes,
      taxesE: TaxesE,
      taxesS: TaxesS,
      taxesB: TaxesB,
      taxesI: TaxesI,
      multipleJobs: MultipleJobs,
    };
  
    const handleBackClick = () => {
      setCurrentComponent(null);
    }
    const cardsData = [
      { emoji: '👨🏻', title: 'Why Taxes', completed: 50, path: 'whyTaxes' },
      { emoji: '💸', title: 'Taxes E', completed: 60, path: 'taxesE' },
      { emoji: '💵', title: 'Taxes S', completed: 60, path: 'taxesS' },
      { emoji: '🪙', title: 'Taxes B', completed: 60, path: 'taxesB' },
      { emoji: '🏦', title: 'Taxes I', completed: 60, path: 'taxesI' },
      { emoji: '👩🏼‍💻', title: 'Multiple Jobs', completed: 60, path: 'multipleJobs' },
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

export default Taxes
