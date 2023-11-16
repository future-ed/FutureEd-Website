import React from 'react'
import GeneralAbstract from '../Abstracts/General_Abstract';
import backgroundImage from '../../../assets/CareerBuilding.png';

const LinkedInProfileBuilding = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>LinkedIn Profile Building</h1>
            <p>• How to set up a LinkedIn </p>
            <p>• Key Points in Building a Professional LinkedIn Profile </p>
            <p>• How to use LinkedIn to Network and find jobs</p>
            
            <div className='mt-3'>
                <p>In this section, we focus on building a professional LinkedIn profile and key points to consider when 
                    creating an online presence. We'll explore strategies on how to use LinkedIn for networking and 
                    establishing professional connections.</p>
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

export default LinkedInProfileBuilding
