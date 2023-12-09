import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/tax_mj1.svg';

const MultipleJobs = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
]
  return (
    <GeneralContent 
            title="Multiple Jobs"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default MultipleJobs
