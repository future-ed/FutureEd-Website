import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/health_in1.svg';
import c2 from '../../../../assets/content/nl-en/health_in2.svg';

const Insurance = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
  ]
  return (
    <GeneralContent 
            title="Insurance"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Insurance
