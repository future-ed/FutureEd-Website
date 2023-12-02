import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/Health.png';

const Perfectionism = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• What is Perfectionism</p>
            <p>• Methods to Minimize Perfectionism</p>

            <div className='mt-3'>
                <p>In this section, we'll discuss the concept of perfectionism, defining what it entails and its impact. 
                    We'll explore effective methods to minimize perfectionist tendencies and offer exercises designed to 
                    reduce the pressures of perfectionism, fostering a healthier approach to goals and accomplishments.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Perfectionism"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Perfectionism
