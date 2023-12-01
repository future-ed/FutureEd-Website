import React from 'react'
import c1 from '../../../../assets/pf_zn1.svg';
import c2 from '../../../../assets/pf_zn2.svg';
import GeneralContent from '../General_Abstract/General_Content';

const $10k_and_now = ({ onBackClick, readStatus, onToggleRead }) => {
    const contentPictures = [
        c1,
        c2,
    ]
  return (
    <GeneralContent 
            title="$10k and now?"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default $10k_and_now
