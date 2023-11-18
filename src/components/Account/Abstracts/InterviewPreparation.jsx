import React from 'react'
import GeneralAbstract from '../Abstracts/General_Abstract';
import backgroundImage from '../../../assets/CareerBuilding.png';

const InterviewPreparation = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• Tips to Prepare Yourself for an Interview </p>
            <p>• Often used Interview Questions and How to Approach Them </p>
            <p>• Make your own template with answers to the common questions (Exercise)</p>
            
            <div className='mt-3'>
                <p>In this section, we'll cover valuable tips to prepare for an interview, including commonly asked 
                    interview questions and effective ways to answer them. We'll explore strategies to help students 
                    get ready and answer those often-used interview questions confidently.</p>
            </div>
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Interview Preparation"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default InterviewPreparation
