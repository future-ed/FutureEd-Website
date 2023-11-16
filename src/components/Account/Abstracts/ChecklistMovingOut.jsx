import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/IndependentLiving.png';

const ChecklistMovingOut = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Checklist Moving Out</h1>
            <p>• Doing Paperwork</p>
            <p>• Potential Deposit</p>
            <p>• Insurance For Personal Belongings</p>
            <p>• A Complete List of Items You Will Need Before Moving Out</p>

            <div className='mt-3'>
                <p>In this section, we'll cover the essentials of moving out, focusing on crucial tasks such as managing 
                    paperwork, understanding potential deposits, and the importance of insurance for personal belongings. 
                    Additionally, we'll provide a comprehensive checklist of items students need before moving out.</p>
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

export default ChecklistMovingOut
