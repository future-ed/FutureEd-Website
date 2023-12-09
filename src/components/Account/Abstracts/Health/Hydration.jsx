import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/bg/Health.png';

const Hydration = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• The Importance of Water</p>
            <p>• Tracking Water Intake (Exercise)</p>

            <div className='mt-3'>
                <p>In this section, we'll discuss the significance of staying hydrated, emphasizing the importance of 
                    water for overall health. Additionally, we'll introduce an exercise focused on tracking water intake, 
                    ensuring students meet their daily hydration goals.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Hydration"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Hydration
