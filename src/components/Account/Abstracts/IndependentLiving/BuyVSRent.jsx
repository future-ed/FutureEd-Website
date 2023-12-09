import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/bg/IndependentLiving.png';

const BuyVSRent = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
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
            title="Buy vs Rent"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default BuyVSRent
