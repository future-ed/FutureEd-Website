import React from 'react'
import GeneralAbstract from '../Abstracts/General_Abstract';
import backgroundImage from '../../../assets/Personal_Finances.png';

const $0_to_$10k = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• The Current Average Student Debt is €20.000, with Locals Generally Having Much More Debt </p>
            <p>• How to Prevent Debt</p>
            <p>• Multiple (Doable) Ways to Save Up $10.000</p>
            <div className='mt-3'>
                <p>Here we address the current student debt issue, where the current average student has a debt of $20,000. 
                    Our focus is to prevent debt and present multiple feasible strategies to save $10,000, helping individuals 
                    remove their financial burdens and build a financial foundation for their future. </p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="$0 to $10k"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default $0_to_$10k
