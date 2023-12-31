import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/cb_iq1.svg';
import c2 from '../../../../assets/content/nl-en/cb_iq2.svg';
import c3 from '../../../../assets/content/nl-en/cb_iq3.svg';
import c4 from '../../../../assets/content/nl-en/cb_iq4.svg';
import c5 from '../../../../assets/content/nl-en/cb_iq5.svg';
import c6 from '../../../../assets/content/nl-en/cb_iq6.svg';

const InterviewPreparation = ({ onBackClick, readStatus, onToggleRead }) => {
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
            title="Interview Preparation"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default InterviewPreparation
