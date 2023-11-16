import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/Health.png';

const Hydration = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Hydration</h1>
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
            title="Abstract"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default Hydration
