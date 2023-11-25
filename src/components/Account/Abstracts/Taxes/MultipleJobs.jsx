import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/Personal_Finances.png';

const MultipleJobs = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• How do taxes work when combining multiple jobs?</p>
            <p>• Combing Your Job + Side Business</p>
            <div className='mt-3'>
                <p>In this section, we’ll discuss how taxes function when you combine multiple jobs or when you have a 
                    business alongside your primary employment.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Multiple Jobs"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default MultipleJobs
