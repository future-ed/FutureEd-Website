import React from 'react'
import GeneralAbstract from '../Abstracts/General_Abstract';
import backgroundImage from '../../../assets/Personal_Finances.png';

const TheGoldenPillars = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>The Golden Pillars</h1>
            <p>• Your First Financial Pillars (Goals) to Achieve</p>
            <ul>
                <li className='ml-3'>#1 Saving a $1.000 emergency fund</li>
                <li className='ml-3'>#2 Pay off debt and avoid bad debt as much as possible</li>
                <li className='ml-3'>#3 Save up 6 months of living expenses</li>
            </ul>
            
            <div className='mt-3'>
                <p>In this part, we discuss the "Golden Pillars," a financial framework for financial stability. The first pillar emphasizes saving $1000, creating a safety net for unforeseen expenses, like a financial first aid kit. The second pillar focuses on clearing debts, paving the way for a more stable financial future. The final pillar focuses on saving six months' worth of living expenses, providing a cushion against unexpected financial challenges.</p>
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

export default TheGoldenPillars
