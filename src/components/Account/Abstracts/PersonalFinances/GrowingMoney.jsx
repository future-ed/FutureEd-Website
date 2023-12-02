import React from 'react'
import GeneralContent from '../General_Abstract/General_Content';
import c1 from '../../../../assets/pf_gm1.svg';
import c2 from '../../../../assets/pf_gm2.svg';

const GrowingMoney = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
]
  return (
    <GeneralContent 
            title="Growing Money"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default GrowingMoney
