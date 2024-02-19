import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/ls_pr1.svg';
import c2 from '../../../../assets/content/nl-en/ls_pr2.svg';
import c3 from '../../../../assets/content/nl-en/ls_pr3.svg';
import c4 from '../../../../assets/content/nl-en/ls_pr4.svg';

const Procrastination = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
  ]
  return (
    <GeneralContent 
            title="Procrastination"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}


export default Procrastination
