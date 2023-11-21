import React from 'react'
import GeneralAbstract from '../General_Abstract';
import backgroundImage from '../../../../assets/Personal_Finances.png';

const TaxesI = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• The €57.000 Exemption</p>
            <p>• How does Capital Tax work</p>
            <p>• How to Calculate Your Own I Taxes</p>
            <div className='mt-3'>
                <p>In this section, we explore the capital tax an investor needs to pay and the €57,000 capital exemption 
                    you have as an investor. And lastly how students can calculate their own Taxes as an Investor.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Taxes I"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default TaxesI
