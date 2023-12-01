import React from 'react'
import c1 from '../../../../assets/tax_intro.svg';
import GeneralContent from '../General_Abstract/General_Content';

const WhyTaxes = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
]
  return (
    <GeneralContent 
            title="Why Taxes"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default WhyTaxes
