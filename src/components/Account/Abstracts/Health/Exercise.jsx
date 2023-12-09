import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/bg/Health.png';

const Exercise = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• The Basics of Exercise</p>
            <p>• The Benefits of Exercise</p>
            <p>• Follow Along Training Plan</p>

            <div className='mt-3'>
                <p>In this section, we'll explore the fundamentals of exercise, covering its basics and the wide-ranging 
                    benefits it offers for physical and mental well-being. Additionally, we'll provide a follow-along 
                    training plan, offering guidance and routines to help kick-start or enhance your exercise routine and 
                    hopefully motivate you to get/keep going.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Exercise"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Exercise
