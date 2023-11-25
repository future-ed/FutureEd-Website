import React,  {useState, useEffect}from 'react'
import Main from './Main'
import backgroundImage from '../../../assets/Personal_Finances.png';
import { useReadStatus } from '../../Account/update_read';

import WhyTaxes from '../Abstracts/Taxes/WhyTaxes';
import TaxesE from '../Abstracts/Taxes/TaxesE';
import TaxesS from '../Abstracts/Taxes/TaxesS';
import TaxesB from '../Abstracts/Taxes/TaxesB';
import TaxesI from '../Abstracts/Taxes/TaxesI';
import MultipleJobs from '../Abstracts/Taxes/MultipleJobs';

const Taxes = () => {
    const [readStatuses, toggleReadStatus] = useReadStatus('taxes');
    const [currentComponent, setCurrentComponent] = useState(null);
    const [cardsData, setCardsData] = useState([]);
  
    useEffect(() => {
      setCardsData([
        { emoji: '👨🏻', title: 'Why Taxes', completed: readStatuses['why_taxes'] ? 100 : 0, path: 'whyTaxes' },
      { emoji: '💸', title: 'Taxes E', completed: readStatuses['taxes_e'] ? 100 : 0, path: 'taxesE' },
      { emoji: '💵', title: 'Taxes S', completed: readStatuses['taxes_s'] ? 100 : 0, path: 'taxesS' },
      { emoji: '🪙', title: 'Taxes B', completed: readStatuses['taxes_b'] ? 100 : 0, path: 'taxesB' },
      { emoji: '🏦', title: 'Taxes I', completed: readStatuses['taxes_i'] ? 100 : 0, path: 'taxesI' },
      { emoji: '👩🏼‍💻', title: 'Multiple Jobs', completed: readStatuses['multiple_jobs'] ? 100 : 0, path: 'multipleJobs' },
      ]);
  }, [readStatuses]);
    
  const handleToggleReadStatus = (path) => {
    toggleReadStatus(path);
  };
  
  const componentMapping = {
    whyTaxes: <WhyTaxes onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['why_taxes']} 
                                 onToggleRead={() => handleToggleReadStatus('why_taxes')} />,
    taxesE: <TaxesE onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['taxes_e']} 
                                 onToggleRead={() => handleToggleReadStatus('taxes_e')} />,
    taxesS: <TaxesS onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['taxes_s']} 
                                 onToggleRead={() => handleToggleReadStatus('taxes_s')} />,
    taxesB: <TaxesB onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['taxes_b']} 
                                 onToggleRead={() => handleToggleReadStatus('taxes_b')} />,
    taxesI: <TaxesI onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['taxes_i']} 
                                 onToggleRead={() => handleToggleReadStatus('taxes_i')} />,                            
    multipleJobs: <MultipleJobs onBackClick={() => setCurrentComponent(null)} 
                                 readStatus={readStatuses['multiple_jobs']} 
                                 onToggleRead={() => handleToggleReadStatus('multiple_jobs')} />,
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
              mainTitle='Taxes'
              cardsData={cardsData}
              gridCols='md:grid-cols-3 grid-cols-1'
              navigateTo={navigateTo} />}
    </div>  
    )
}

export default Taxes
