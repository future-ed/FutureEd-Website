import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/tax_b1.svg';
import c2 from '../../../../assets/tax_b2.svg';
import c3 from '../../../../assets/tax_b3.svg';
import c4 from '../../../../assets/tax_b4.svg';

const TaxesB = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
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
