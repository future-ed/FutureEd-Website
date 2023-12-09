import React from 'react'
import c1 from '../../../../assets/content/nl-en/pf_gp1.svg';
import c2 from '../../../../assets/content/nl-en/pf_gp2.svg';
import c3 from '../../../../assets/content/nl-en/pf_gp3.svg';
import c4 from '../../../../assets/content/nl-en/pf_gp4.svg';
import c5 from '../../../../assets/content/nl-en/pf_gp5.svg';
import GeneralContent from '../General_Abstract/General_Content';

const TheGoldenPillars = ({ onBackClick, readStatus, onToggleRead }) => {
    const contentPictures = [
        c1,
        c2,
        c3,
        c4,
        c5
    ]
  return (
    <GeneralContent
            title="The Golden Pillars"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default TheGoldenPillars
