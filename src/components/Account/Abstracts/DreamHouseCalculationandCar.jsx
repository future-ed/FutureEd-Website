import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/IndependentLiving.png';

const DreamHouseCalculationandCar = ({ onBackClick }) => {
    const content = (
        <div>
            <h1 className='mt-1'>Dream House Calculation and Car</h1>
            <p>• Calculating Monthly Expenses for your Dream House and Car (Exercise)</p>

            <div className='mt-3'>
                <p>In this section, we'll discuss the process of calculating the monthly expenses associated with your 
                    dream house and car. We'll explore the various costs involved, from mortgage payments to utilities and
                    maintenance, helping students estimate the financial needs of owning and maintaining their ideal home. 
                    By doing so we can help students set more realistic goals and motivate them to create a clear path to 
                    reach these goals.</p>
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

export default DreamHouseCalculationandCar
