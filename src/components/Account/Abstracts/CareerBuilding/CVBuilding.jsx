import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/cb_cv1.svg';
import c2 from '../../../../assets/content/nl-en/cb_cv2.svg';
import c3 from '../../../../assets/content/nl-en/cb_cv3.svg';
import c4 from '../../../../assets/content/nl-en/cb_cv4.svg';

const CVBuilding = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
  ]
  return (
    <GeneralContent 
            title="CV Building"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default CVBuilding
