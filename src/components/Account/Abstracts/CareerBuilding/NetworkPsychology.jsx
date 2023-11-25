import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/CareerBuilding.png';

const NetworkPsychology = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• The Importance of Referrals and Reputation</p>
            <p>• Understanding Hidden Networks </p>
            <p>• The Balance Between Confidence and Modesty</p>
            <p>• How to get people to Refer You</p>
            
            <div className='mt-3'>
                <p>In this section, we'll discuss the significance of referrals and reputation, exploring their impact on 
                    professional growth. We'll also address the balance between confidence and modesty, essential in 
                    personal branding. Additionally, we'll discuss the psychology behind networking and strategies to 
                    encourage people to refer and advocate for you.</p>
            </div>
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Network Psychology"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default NetworkPsychology
