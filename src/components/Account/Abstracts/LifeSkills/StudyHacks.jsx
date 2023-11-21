import React from 'react'
import GeneralAbstract from '../General_Abstract';
import backgroundImage from '../../../../assets/LifeSkills.png';

const StudyHacks = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• Why People Fail to Learn Effectively</p>
            <p>• Effective Study Techniques</p>
            <p>• Sample Study Plan</p>
            <p>• Making Your Own Study Plan (Exercise)</p>

            <div className='mt-3'>
                <p>In this section, we'll address common reasons why students might struggle with effective learning. 
                    We'll then discuss various effective study techniques and provide a sample study plan. Additionally, 
                    there'll be an exercise to guide students in creating their own personalized study plans to optimize 
                    their learning and study process.</p>
            </div>          
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Study Hacks"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default StudyHacks
