import React from 'react'
import c1 from '../../../../assets/content/nl-en/tax_i1.svg';
import c2 from '../../../../assets/content/nl-en/tax_i2.svg';
import c3 from '../../../../assets/content/nl-en/tax_i3.svg';
import GeneralContent from '../General_Abstract/General_Content';

const TaxesI = ({ onBackClick, readStatus, onToggleRead }) => {
    const contentPictures = [
      c1,
      c2,
      c3,
  ]
  return (
    <GeneralContent 
            title="Taxes I"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default TaxesI
