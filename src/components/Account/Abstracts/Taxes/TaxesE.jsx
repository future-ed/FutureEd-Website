import React from 'react'
import c1 from '../../../../assets/content/nl-en/tax_e1.svg';
import c2 from '../../../../assets/content/nl-en/tax_e2.svg';
import GeneralContent from '../General_Abstract/General_Content';

const TaxesE = ({ onBackClick, readStatus, onToggleRead }) => {
    const contentPictures = [
      c1,
      c2,
  ]
  return (
    <GeneralContent 
            title="Taxes E"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default TaxesE
