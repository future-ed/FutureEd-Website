import React from 'react'
import GeneralAbstract from '../General_Abstract';
import backgroundImage from '../../../../assets/Personal_Finances.png';

const TaxesB = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• The Different Business Types (VOF and BV)</p>
            <p>• What are the Taxes as VOF</p>
            <p>• What are the Taxes as BV</p>
            <div className='mt-3'>
                <p>In this section, we're diving into the different types of businesses, specifically VOF (general 
                    partnership) and BV (private limited company), and how taxes apply to each. We'll briefly explore 
                    what distinguishes these business structures and how taxes work for both VOF and BV.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Taxes B"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default TaxesB
