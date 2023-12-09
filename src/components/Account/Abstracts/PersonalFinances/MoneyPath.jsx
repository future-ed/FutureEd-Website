import React from 'react'
import c1 from '../../../../assets/content/nl-en/pf_mp1.svg';
import c2 from '../../../../assets/content/nl-en/pf_mp2.svg';
import GeneralContent from '../General_Abstract/General_Content';

const MoneyPath = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
]
  return (
    <GeneralContent 
            title="Money Paths"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default MoneyPath
