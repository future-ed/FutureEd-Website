import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/IndependentLiving.png';

const Introduction = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• Introduction to Independent Living</p>
            <div className='mt-3'>
                <p>In this section, we'll introduce the concept of independent living. We'll explore what it means to live 
                   independently and what you need to know and prepare before you do so.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Introduction"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Introduction
