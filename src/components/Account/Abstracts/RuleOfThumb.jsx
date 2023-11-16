import React from 'react'
import GeneralAbstract from '../Abstracts/General_Abstract';
import backgroundImage from '../../../assets/Personal_Finances.png';

const RuleOfThumb = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Rules of Thumb</h1>
            <p>• The Maximum You Should Pay For a House </p>
            <p>• The Maximum You Should Pay For a Personal Vehicle</p>
            
            <div className='mt-3'>
                <p>In this part, we discuss the maximum recommended expenses for purchasing and maintaining a house and 
                    a personal vehicle, aiming to guide individuals toward smart financial decisions. We stress the 
                    importance of considering one's financial situation and priorities when determining these maximums.</p>
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

export default RuleOfThumb
