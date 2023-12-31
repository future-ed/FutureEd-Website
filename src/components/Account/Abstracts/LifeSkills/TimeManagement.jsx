import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/ls_tm1.svg';
import c2 from '../../../../assets/content/nl-en/ls_tm2.svg';

const TimeManagement = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
  ]
  return (
    <GeneralContent 
            title="Time Management"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}


export default TimeManagement
