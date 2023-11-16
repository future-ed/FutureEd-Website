import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/Personal_Finances.png';

const TaxesS = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Taxes S</h1>
            <p>• What is Tax-Free Profit</p>
            <p>• Income Tax as Self-Employed</p>
            <p>• The Health Insurance Act (ZVW)</p>
            <p>• How to get Tax Deductions as Self-employed</p>
            <div className='mt-3'>
                <p>In this section, we're exploring how income tax works for freelancers and self-employed. Our main focus 
                    is to explain what the Health Insurance Act (ZVW) in the Netherlands means for self-employed individuals 
                    and what expenses a freelancer can use as tax deductions.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Abstract"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default TaxesS
