import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/bg/CareerBuilding.png';

const FormalDressCode = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• How to dress in an interview / during work? </p>

            <div className='mt-3'>
                <p>In this section, we'll focus on formal dress codes, particularly guiding students on how to dress 
                    appropriately for interviews and in professional work settings. We'll cover essential tips and 
                    guidelines to ensure students present themselves professionally in these formal environments.</p>
            </div>
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Formal Dress Code"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default FormalDressCode
