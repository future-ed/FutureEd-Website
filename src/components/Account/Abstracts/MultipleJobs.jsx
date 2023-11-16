import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/Personal_Finances.png';

const MultipleJobs = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Multiple Jobs</h1>
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
            title="Abstract"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default MultipleJobs
