import React from 'react'
import GeneralAbstract from '../General_Abstract';
import backgroundImage from '../../../../assets/CareerBuilding.png';

const CVBuilding = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• Key Tips for Writing a CV  </p>
            <p>• CV Template to Fill In and Start With (Exercise)</p>
            
            <div className='mt-3'>
                <p>In this section, we're focusing on key tips and guidelines for crafting an effective CV. We'll cover 
                    essential strategies and insights to help students create a strong and impactful resume.</p>
            </div>
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="CV Building"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default CVBuilding
