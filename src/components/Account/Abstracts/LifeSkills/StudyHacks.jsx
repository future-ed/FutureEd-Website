import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/ls_sh1.svg';
import c2 from '../../../../assets/content/nl-en/ls_sh2.svg';
import c3 from '../../../../assets/content/nl-en/ls_sh3.svg';
import c4 from '../../../../assets/content/nl-en/ls_sh4.svg';
import c5 from '../../../../assets/content/nl-en/ls_sh5.svg';
import c6 from '../../../../assets/content/nl-en/ls_sh6.svg';

const StudyHacks = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
  ]
  return (
    <GeneralContent 
            title="Study Hacks"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default StudyHacks
