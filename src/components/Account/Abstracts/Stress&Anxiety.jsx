import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/Health.png';

const StressAnxiety = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Stress & Anxiety</h1>
            <p>• Common Causes of Stress and Anxiety</p>
            <p>• How to Prevent Stress and Anxiety</p>
            <p>• How to Minimize Stress and Anxiety</p>
            <p>• Stress and Anxiety Relieve Exercise</p>

            <div className='mt-3'>
                <p>In this section, we'll discuss stress and anxiety, exploring their common causes and offering 
                    strategies to prevent and minimize their impact. Additionally, we'll discuss exercises and techniques 
                    aimed at relieving stress and anxiety, providing effective ways to manage and alleviate these 
                    feelings.</p>
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

export default StressAnxiety
