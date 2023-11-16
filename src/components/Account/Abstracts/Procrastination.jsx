import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/LifeSkills.png';

const Procrastination = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Procrastination</h1>
            <p>• What is Procrastination</p>
            <p>• How to Minimize Procrastination</p>
            <p>• How to use Procrastination</p>

            <div className='mt-3'>
                <p>In this section, we'll explore procrastination, defining its nature and impact on productivity. 
                    We'll discuss effective strategies to minimize procrastination and even explore ways to leverage 
                    procrastination tendencies for improved productivity and efficiency.</p>
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

export default Procrastination
