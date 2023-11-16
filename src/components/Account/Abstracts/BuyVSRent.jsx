import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/IndependentLiving.png';

const BuyVSRent = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Buy vs Rent</h1>
            <p>• The Financial decision</p>
            <p>• Your Situation and Possibilities</p>

            <div className='mt-3'>
                <p>In this section, we'll discuss the decision-making process between buying and renting, examining the 
                  financial and personal aspects involved in this choice.</p>
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

export default BuyVSRent
