import React from 'react'
import GeneralAbstract from './General_Abstract';
import backgroundImage from '../../../assets/Personal_Finances.png';

const WhyTaxes = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• The Origin of Taxes</p>
            <p>• Mindsets around Taxes</p>
            <p>• Introduction of ESBI Taxes</p>
            <div className='mt-3'>
                <p>In this chapter, we lay out the different effects of taxes on the route students choose. 
                    An Employee pays different taxes than a freelancer. By understanding these differences 
                    we want the students to be able to make more conscious choices in their life when it comes 
                    to career choices and understand how to navigate taxes in the Netherlands which can also in 
                    part apply to Sint Maarten.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Why Taxes"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default WhyTaxes
