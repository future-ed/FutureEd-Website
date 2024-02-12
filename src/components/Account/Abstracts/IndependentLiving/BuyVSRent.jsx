import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/il_bvsr1.svg';
import c2 from '../../../../assets/content/nl-en/il_bvsr2.svg';
import c3 from '../../../../assets/content/nl-en/il_bvsr3.svg';
import c4 from '../../../../assets/content/nl-en/il_bvsr4.svg';

const BuyVSRent = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
  ]
  return (
    <GeneralContent 
            title="Buy vs Rent"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default BuyVSRent

