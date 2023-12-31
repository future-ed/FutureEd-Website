import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/pf_rot1.svg';
import c2 from '../../../../assets/content/nl-en/pf_rot2.svg';

const RuleOfThumb = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
  ]
  return (
    <GeneralContent 
            title="Rule of Thumb"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}


export default RuleOfThumb
