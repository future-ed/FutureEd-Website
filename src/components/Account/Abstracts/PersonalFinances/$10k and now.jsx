import React from 'react'
import GeneralAbstract from '../General_Abstract';
import backgroundImage from '../../../../assets/Personal_Finances.png';

const $10k_and_now = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• How to spend $10.000 Effectively</p>
            <ul>
                <li className='ml-3'>Further Financial Gains</li>
                <li className='ml-3'>Personal Experiences</li>
                <li className='ml-3'>Skill Learning</li>
            </ul>
            <div className='mt-3'>
                <p>In this part, we focus on effective ways to use $10,000, aiming for further financial gains and personal 
                    development. We highlight methods that offer potential for financial growth, such as investing in assets 
                    or education that can yield long-term returns. Additionally, leveraging personal experiences, like travel 
                    or skill-building activities, is emphasized to improve one's life while potentially expanding opportunities.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="$10k and now?"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default $10k_and_now
