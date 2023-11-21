import React from 'react'
import GeneralAbstract from '../General_Abstract';
import backgroundImage from '../../../../assets/Health.png';

const DigitalDetox = ({ onBackClick }) => {
    const content = (
        <div>
            <p>• Phone Addiction and Digital Detox</p>
            <p>• Why should you take a Digital Detox</p>
            <p>• Digital Detox Challenge (Exercise)</p>

            <div className='mt-3'>
                <p>In this section, we'll explore digital detox, addressing phone addiction and its implications. We'll 
                    define what a digital detox involves and discuss the reasons why taking one can be beneficial. 
                    Additionally, we'll introduce a digital detox challenge exercise, offering a practical approach to 
                    stepping away from digital devices for a healthier balance.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Digital Detox"
            content={content}
            onBackClick={ onBackClick }
    />
  )
}

export default DigitalDetox
