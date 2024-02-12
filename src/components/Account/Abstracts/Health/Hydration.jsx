import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/content/nl-en/health_hv1.svg';
import c2 from '../../../../assets/content/nl-en/health_hv2.svg';
import c3 from '../../../../assets/content/nl-en/health_hv3.svg';

const Hydration = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
  ]
  return (
    <GeneralContent 
            title="Hydration and Vitamins"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Hydration
