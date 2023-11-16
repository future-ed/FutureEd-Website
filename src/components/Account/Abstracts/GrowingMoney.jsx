import React from 'react'
import GeneralAbstract from '../Abstracts/General_Abstract';
import backgroundImage from '../../../assets/Personal_Finances.png';

const GrowingMoney = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Growing Money</h1>
            <p>• How to Make Yourself Less Dependent </p>
            <p>• The 50/30/20-framework to Invest, focusing mainly on the 20-part</p>
            <p>• Investing Safely + Basic Fundamental Rules</p>
            <div className='mt-3'>
                <p>This part aims to provide students with essential guidelines to invest safely. We emphasize the 
                    importance of diversification, spreading investments across different asset classes to mitigate 
                    risk. Additionally, understanding risk and conducting thorough research before investing is 
                    highlighted as a crucial fundamental. Lastly, we explain the significance of setting clear 
                    investment goals and having a long-term perspective, avoiding impulsive decisions.</p>
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

export default GrowingMoney
