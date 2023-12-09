import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/cb_nw1.svg';
import c2 from '../../../../assets/content/nl-en/cb_nw2.svg';
import c3 from '../../../../assets/content/nl-en/cb_nw3.svg';
import c4 from '../../../../assets/content/nl-en/cb_nw4.svg';

const NetworkPsychology = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
  ]
  return (
    <GeneralContent 
            title="Network Psychology"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default NetworkPsychology
