import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/LifeSkills.png';

const TimeManagement = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• The Importance of Time Management</p>
            <p>• Setting Goals</p>
            <p>• Making a Plan (Exercise)</p>
            <p>• Making Small Improvements</p>

  
            <div className='mt-3'>
                <p> In this section, we'll explore the significance of time management, emphasizing its impact on productivity 
                    and achieving goals. We'll discuss the importance of setting goals and offer an exercise to guide students 
                    through making an effective plan. Additionally, we'll discuss the idea of making small improvements for 
                    better time management.</p>
            </div>          
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Time Management"
            content={content}
            onBackClick={ onBackClick }
    />
  )
  }

export default TimeManagement
