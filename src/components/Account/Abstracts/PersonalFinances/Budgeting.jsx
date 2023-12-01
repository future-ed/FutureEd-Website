import React from 'react'
import c1 from '../../../../assets/pf_bg1.svg';
import c2 from '../../../../assets/pf_bg2.svg';
import c3 from '../../../../assets/pf_bg3.svg';
import c4 from '../../../../assets/pf_bg4.svg';
import c5 from '../../../../assets/pf_bg5.svg';
import GeneralContent from '../General_Abstract/General_Content';

const Budgeting = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
    c3,
    c4,
    c5
]
  return (
    <GeneralContent 
            title="Budgeting"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default Budgeting
