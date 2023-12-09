import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/il_cmo.svg';

const ChecklistMovingOut = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
  ]
  return (
    <GeneralContent 
            title="Checklist Moving Out"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default ChecklistMovingOut
