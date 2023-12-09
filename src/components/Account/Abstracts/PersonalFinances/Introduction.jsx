import React from 'react'
import c1 from '../../../../assets/content/nl-en/pf_intro.svg';
import GeneralContent from '../General_Abstract/General_Content';

const Introduction = ({ onBackClick, readStatus, onToggleRead }) => {   
    const contentPictures = [
        c1
    ]
  return (
    <GeneralContent
            title="Introduction"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
            />
  )
}


export default Introduction
