import React from 'react'
import c1 from '../../../../assets/pf_mp1.svg';
import c2 from '../../../../assets/pf_mp2.svg';
import General_Content from '../General_Abstract/General_Content';

const MoneyPath = ({ onBackClick, readStatus, onToggleRead }) => {
  const contentPictures = [
    c1,
    c2,
]
  return (
    <General_Content 
            title="Money Paths"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
    />
  )
}

export default MoneyPath
