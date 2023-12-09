import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/il_mo1.svg';
import c2 from '../../../../assets/content/nl-en/il_mo2.svg';
import c3 from '../../../../assets/content/nl-en/il_mo3.svg';
import c4 from '../../../../assets/content/nl-en/il_mo4.svg';

const MovingOut = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
  ]
  return (
    <GeneralContent 
            title="MovingOut"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}


export default MovingOut
