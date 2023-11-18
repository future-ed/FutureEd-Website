import React from 'react'
import GeneralAbstract from '../Abstracts/General_Abstract';
import backgroundImage from '../../../assets/CareerBuilding.png';

const Negotiation = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• The Goal of Negotiation</p>
            <p>• Techniques for Effective Negotiation Like:</p>
            <ul>
                <li className='ml-3'>Mirroring</li>
                <li className='ml-3'>Anchoring</li>
                <li className='ml-3'>Loss Aversion</li>
            </ul>
            
            <div className='mt-3'>
                <p>In this section, we'll discuss the art of negotiation, focusing on effective techniques such as 
                    mirroring, anchoring, and understanding loss aversion. How these strategies play a role in successful 
                    negotiations such as negotiating a higher salary, and how to employ them effectively to achieve 
                    favorable outcomes.</p>
            </div>
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Negotiations"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default Negotiation
