import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/tax_b1.svg';
import c2 from '../../../../assets/content/nl-en/tax_b2.svg';
import c3 from '../../../../assets/content/nl-en/tax_b3.svg';
import c4 from '../../../../assets/content/nl-en/tax_b4.svg';
import c5 from '../../../../assets/content/nl-en/tax_b5.svg';

const TaxesB = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
    c5,
]
  return (
    <GeneralContent
            title="Taxes B"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default TaxesB
