import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/health_sl1.svg';
import c2 from '../../../../assets/content/nl-en/health_sl2.svg';
import c3 from '../../../../assets/content/nl-en/health_sl3.svg';
import c4 from '../../../../assets/content/nl-en/health_sl4.svg';

const Sleep = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
  ]
  return (
    <GeneralContent 
            title="Sleep"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Sleep
