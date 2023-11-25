import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/Health.png';

const Sleep = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• Why is Sleep Important</p>
            <p>• How to Optimizing Sleep</p>
            <p>• Sleeping Problems Solutions</p>
            <p>• Creating Good Sleep Habits (Exercise)</p>

            <div className='mt-3'>
                <p>In this section, we'll discuss the realm of sleep, why it's important for overall well-being, 
                    understanding the mechanics of sleep, and exploring methods to optimize your sleep quality. 
                    Additionally, we'll address common sleeping problems and offer possible solutions to improve 
                    the quality of your sleep.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Sleep"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Sleep
