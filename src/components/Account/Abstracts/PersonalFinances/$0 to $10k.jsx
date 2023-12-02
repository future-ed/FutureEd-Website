import React from 'react'
import c1 from '../../../../assets/pf_zt1.svg';
import c2 from '../../../../assets/pf_zt2.svg';
import c3 from '../../../../assets/pf_zt3.svg';
import c4 from '../../../../assets/pf_zt4.svg';
import GeneralContent from '../General_Abstract/General_Content';

const $0_to_$10k = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
]
  return (
    <GeneralContent 
            title="$0 to $10k"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default $0_to_$10k
