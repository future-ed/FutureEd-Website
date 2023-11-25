import React from 'react'
import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/Personal_Finances.png';

const TaxesE = ({ onBackClick, readStatus, onToggleRead }) => {
    const content = (
        <div>
            <p>• The Basics of Taxes</p>
            <p>• The Progressive Tax System (NL)</p>
            <p>• The Tax Advantages of a Mortgage</p>
            <div className='mt-3'>
                <p>In this part, we discuss the fundamental aspects of taxes for employees, offering a comprehensive view 
                    of the tax system. Emphasizing mainly on the basics of the tax systems and how mortgage interest can 
                    be used as a deduction on one's income taxes.</p>
            </div>
            
        </div>
    );
  return (
    <GeneralAbstract 
            backgroundImage={backgroundImage}
            title="Taxes E"
            content={content}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default TaxesE
