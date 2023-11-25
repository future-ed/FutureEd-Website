import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/Health.png';

const Insurance = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• Basic Health Insurance</p>
            <p>• Additional Health Insurance</p>
            <p>• Own Risk (everything not insured)</p>

            <div className='mt-3'>
                <p>In this section, we'll cover the essentials of insurance, focusing on basic health insurance and the 
                    significance of additional health coverage. We'll also discuss the concept of own risk (deductibles), 
                    which are expenses not covered by insurance.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Insurance"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Insurance
