import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/bg/Personal_Finances.png';

const RuleOfThumb = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• The Maximum You Should Pay For a House </p>
            <p>• The Maximum You Should Pay For a Personal Vehicle</p>
            
            <div className='mt-3'>
                <p>In this part, we discuss the maximum recommended expenses for purchasing and maintaining a house and 
                    a personal vehicle, aiming to guide individuals toward smart financial decisions. We stress the 
                    importance of considering one's financial situation and priorities when determining these maximums.</p>
            </div>

            <p> COMING SOON </p>
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Rules of Thumb"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default RuleOfThumb
