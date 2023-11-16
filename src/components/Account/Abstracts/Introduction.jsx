import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/Personal_Finances.png';

const Introduction = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Introduction</h1>
            <p>• Introduction to Personal Finance</p>
            <p>• The Goal for this Chapter</p>
            <p>• The Methods of Education</p>
            
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


export default Introduction
