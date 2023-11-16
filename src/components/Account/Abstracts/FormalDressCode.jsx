import React from 'react'
import GeneralAbstract from '../Abstracts/General_Abstract';
import backgroundImage from '../../../assets/CareerBuilding.png';

const FormalDressCode = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Formal Dress Code</h1>
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
            title="Abstract"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default FormalDressCode
