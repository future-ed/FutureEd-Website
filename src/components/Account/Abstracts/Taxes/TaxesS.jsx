import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/tax_s1.svg';
import c2 from '../../../../assets/content/nl-en/tax_s2.svg';
import c3 from '../../../../assets/content/nl-en/tax_s3.svg';
import c4 from '../../../../assets/content/nl-en/tax_s4.svg';
import c5 from '../../../../assets/content/nl-en/tax_s5.svg';

const TaxesS = ({ onBackClick, readStatus, onToggleRead }) => {
    const contentPictures = [
      c1,
      c2,
      c3,
      c4,
      c5
  ]
  return (
    <GeneralContent 
            title="Taxes S"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default TaxesS
