import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/cb_lb1.svg';
import c2 from '../../../../assets/content/nl-en/cb_lb2.svg';
import c3 from '../../../../assets/content/nl-en/cb_lb3.svg';
import c4 from '../../../../assets/content/nl-en/cb_lb4.svg';
import c5 from '../../../../assets/content/nl-en/cb_lb5.svg';
import c6 from '../../../../assets/content/nl-en/cb_lb6.svg';

const LinkedInProfileBuilding = ({ onBackClick, readStatus, onToggleRead }) => {
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
            title="LinkedIn Profile Building"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default LinkedInProfileBuilding

