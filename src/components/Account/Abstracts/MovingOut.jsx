import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/IndependentLiving.png';

const MovingOut = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Moving Out</h1>
            <p>• The Pros and Cons of Moving Out</p>
            <p>• How to Find a House</p>
            <p>• The Contract and Your Rights</p>

            <div className='mt-3'>
                <p>In this section, we'll explore the pros and cons of moving out, covering essential aspects such as 
                    finding a house, understanding contracts, and your rights as a tenant.</p>
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

export default MovingOut
