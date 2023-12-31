import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/il_ch1.svg';
import c2 from '../../../../assets/content/nl-en/il_ch2.svg';

const Chores = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
  ]
  return (
    <GeneralContent 
            title="Chores"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}
export default Chores
