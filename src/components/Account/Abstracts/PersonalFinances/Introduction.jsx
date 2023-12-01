import React from 'react'
// import GeneralAbstract from '../General_Abstract/General_Abstract';
import backgroundImage from '../../../../assets/Personal_Finances.png';
import backgroundImage2 from '../../../../assets/IndependentLiving.png';
import GeneralContent from '../General_Abstract/General_Content';

const Introduction = ({ onBackClick, readStatus, onToggleRead }) => {   
    const contentPictures = [
      backgroundImage,
      backgroundImage2,
      backgroundImage
    ]
  return (
    <GeneralContent
            title="Introduction"
            content={contentPictures}
            onBackClick={ onBackClick }
            readStatus={readStatus}
            onToggleRead={onToggleRead}
            />
  )
}


export default Introduction
