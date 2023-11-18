import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/Health.png';

const Relationships = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• The Importance of Relationships</p>
            <p>• How to be More Socially Likable</p>
            
            <div className='mt-3'>
                <p>In this section, we'll explore the significance of relationships, highlighting their importance in 
                    student's lives. We'll also discuss strategies and techniques to become more socially involved, 
                    fostering better connections and interactions with others (especially when moving to the Netherlands).</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Relationships"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default Relationships