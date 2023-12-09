import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/cb_ng1.svg';
import c2 from '../../../../assets/content/nl-en/cb_ng2.svg';
import c3 from '../../../../assets/content/nl-en/cb_ng3.svg';
import c4 from '../../../../assets/content/nl-en/cb_ng4.svg';

const Negotiation = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
  ]
  return (
    <GeneralContent 
            title="Negotiation"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Negotiation
